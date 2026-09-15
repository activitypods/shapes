import { useEffect, useMemo, useState } from 'react';
import { Alert, AutoComplete, Button, Card, Col, Divider, Form, Input, Result, Row, Select, Space, Spin, Switch, Tabs, Typography } from 'antd';
import { GithubOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ApiError, VALUE_KINDS, previewProposal, submitProposal, useProposalsConfig, useShapes } from '../api';
import type { ProposalPreview, ShapeProposal } from '../api';
import CodeBlock from '../components/CodeBlock';
import ClassTag from '../components/ClassTag';
import ShapeProperties from '../components/ShapeProperties';
import { GITHUB_REPOSITORY } from '../lib/links';

const PREVIEW_DEBOUNCE = 400;

/** Turns the API's dotted field path (`properties.0.path`) into an Antd name path. */
const fieldPath = (field: string) => field.split('.').map((part) => (/^\d+$/.test(part) ? Number(part) : part));

const ProposePage = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<ShapeProposal>();
  const { data: config } = useProposalsConfig();
  const { data: shapesData } = useShapes();
  const knownPrefixes = shapesData?.prefixes ?? {};

  const values = Form.useWatch([], form);
  const [preview, setPreview] = useState<ProposalPreview | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<{ url: string; uri: string } | null>(null);

  const prefix = values?.prefix?.trim() ?? '';
  const needsNamespace = prefix !== '' && !knownPrefixes[prefix];

  // Regenerate the preview server-side whenever the form changes (the server is the only Turtle generator).
  useEffect(() => {
    if (!values) return;
    const timer = setTimeout(async () => {
      try {
        setPreview(await previewProposal({ ...values, githubHandle: values.githubHandle || '-' }));
        setPreviewError(null);
      } catch (error) {
        setPreview(null);
        setPreviewError(error instanceof ApiError && error.field ? `${t(`propose.${error.field.split('.')[0]}`, { defaultValue: error.field })}: ${error.message}` : (error as Error).message);
      }
    }, PREVIEW_DEBOUNCE);
    return () => clearTimeout(timer);
  }, [values, t]);

  const kindOptions = useMemo(() => VALUE_KINDS.map((kind) => ({ value: kind, label: t(`propose.kinds.${kind}`) })), [t]);
  const prefixOptions = useMemo(() => Object.keys(knownPrefixes).sort().map((p) => ({ value: p, label: `${p}: ${knownPrefixes[p]}` })), [knownPrefixes]);

  const onSubmit = async (proposal: ShapeProposal) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const { url } = await submitProposal(proposal);
      setResult({ url, uri: preview?.uri ?? '' });
    } catch (error) {
      if (error instanceof ApiError && error.field) {
        form.setFields([{ name: fieldPath(error.field) as never, errors: [error.message] }]);
        form.scrollToField(fieldPath(error.field) as never);
      } else if (error instanceof ApiError && error.status === 429) {
        setSubmitError(t('propose.rateLimited'));
      } else {
        setSubmitError((error as Error).message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <Result
        status="success"
        title={t('propose.successTitle')}
        subTitle={t('propose.successText', { uri: result.uri })}
        extra={
          <Space>
            <Button type="primary" icon={<GithubOutlined />} href={result.url} target="_blank">
              {t('propose.openPullRequest')}
            </Button>
            <Button
              onClick={() => {
                form.resetFields();
                setPreview(null);
                setResult(null);
              }}
            >
              {t('propose.another')}
            </Button>
          </Space>
        }
      />
    );
  }

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Space direction="vertical" size={8}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          {t('propose.title')}
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ fontSize: 16, margin: 0, maxWidth: 760 }}>
          {t('propose.intro')}
        </Typography.Paragraph>
      </Space>

      {config && !config.enabled && (
        <Alert
          type="warning"
          showIcon
          message={t('propose.disabled')}
          action={
            <Button size="small" icon={<GithubOutlined />} href={GITHUB_REPOSITORY} target="_blank">
              {t('propose.repository')}
            </Button>
          }
        />
      )}

      <Row gutter={24} align="top">
        <Col xs={24} xl={12}>
          <Form<ShapeProposal>
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            initialValues={{ properties: [], label: { en: '', fr: '' }, definition: { en: '', fr: '' } }}
          >
            <Card title={t('propose.identity')} style={{ marginBottom: 24 }}>
              <Row gutter={16}>
                <Col span={10}>
                  <Form.Item name="prefix" label={t('propose.prefix')} extra={t('propose.prefixHelp')} rules={[{ required: true }, { pattern: /^[a-z][a-z0-9-]*$/, message: 'a-z, 0-9, -' }]}>
                    <AutoComplete options={prefixOptions} placeholder="foaf" filterOption={(input, option) => String(option?.value).startsWith(input)} />
                  </Form.Item>
                </Col>
                <Col span={14}>
                  <Form.Item name="name" label={t('propose.name')} extra={t('propose.nameHelp')} rules={[{ required: true }, { pattern: /^[A-Z][A-Za-z0-9]*$/, message: 'PascalCase' }]}>
                    <Input placeholder="Project" />
                  </Form.Item>
                </Col>
              </Row>
              {needsNamespace && (
                <Form.Item name="namespace" label={t('propose.namespace')} extra={t('propose.namespaceHelp')} rules={[{ required: true }, { pattern: /^https?:\/\/\S+[#/]$/, message: 'https://…#' }]}>
                  <Input placeholder="http://xmlns.com/foaf/0.1/" />
                </Form.Item>
              )}
              <Form.Item name="targetClass" label={t('propose.targetClass')} extra={t('propose.targetClassHelp')} rules={[{ required: true }]}>
                <Input placeholder={prefix && values?.name ? `${prefix}:${values.name}` : 'foaf:Project'} />
              </Form.Item>
              <Form.Item name="describesInstance" label={t('propose.describesInstance')} extra={t('propose.describesInstanceHelp')}>
                <Input placeholder="as:name" />
              </Form.Item>
            </Card>

            <Card title={t('propose.labels')} style={{ marginBottom: 24 }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name={['label', 'en']} label={t('propose.labelEn')} rules={[{ required: true }]}>
                    <Input placeholder="Projects" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name={['label', 'fr']} label={t('propose.labelFr')} rules={[{ required: true }]}>
                    <Input placeholder="Projets" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name={['definition', 'en']} label={t('propose.definitionEn')} rules={[{ required: true }]}>
                <Input.TextArea rows={2} />
              </Form.Item>
              <Form.Item name={['definition', 'fr']} label={t('propose.definitionFr')} rules={[{ required: true }]}>
                <Input.TextArea rows={2} />
              </Form.Item>
            </Card>

            <Card title={t('propose.properties')} style={{ marginBottom: 24 }}>
              <Typography.Paragraph type="secondary">{t('propose.propertiesHelp')}</Typography.Paragraph>
              <Form.List name="properties">
                {(fields, { add, remove }) => (
                  <Space direction="vertical" size={16} style={{ width: '100%' }}>
                    {fields.map((field, index) => (
                      <Card key={field.key} size="small" extra={<Button type="text" danger icon={<MinusCircleOutlined />} onClick={() => remove(field.name)} />}>
                        <Row gutter={16}>
                          <Col span={12}>
                            <Form.Item name={[field.name, 'path']} label={t('propose.propertyPath')} rules={[{ required: true }]}>
                              <Input placeholder="foaf:name" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item name={[field.name, 'name']} label={t('propose.propertyName')}>
                              <Input placeholder="name" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item name={[field.name, 'kind']} label={t('propose.propertyKind')} initialValue="any" rules={[{ required: true }]}>
                              <Select options={kindOptions} />
                            </Form.Item>
                          </Col>
                          {values?.properties?.[index]?.kind === 'resource' && (
                            <Col span={12}>
                              <Form.Item name={[field.name, 'class']} label={t('propose.propertyClass')} rules={[{ required: true }]}>
                                <Input placeholder="as:Person" />
                              </Form.Item>
                            </Col>
                          )}
                          <Col span={24}>
                            <Form.Item name={[field.name, 'description']} label={t('propose.propertyDescription')}>
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item name={[field.name, 'required']} label={t('propose.propertyRequired')} valuePropName="checked" initialValue={false}>
                              <Switch />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item name={[field.name, 'multiple']} label={t('propose.propertyMultiple')} valuePropName="checked" initialValue={false}>
                              <Switch />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Card>
                    ))}
                    <Button type="dashed" block icon={<PlusOutlined />} onClick={() => add({ kind: 'any', required: false, multiple: false })}>
                      {t('propose.addProperty')}
                    </Button>
                  </Space>
                )}
              </Form.List>
            </Card>

            <Card title={t('propose.proposer')} style={{ marginBottom: 24 }}>
              <Form.Item name="githubHandle" label={t('propose.githubHandle')} extra={t('propose.githubHandleHelp')} rules={[{ required: true }]}>
                <Input prefix="@" placeholder="octocat" style={{ maxWidth: 320 }} />
              </Form.Item>
              <Form.Item name="motivation" label={t('propose.motivation')} extra={t('propose.motivationHelp')}>
                <Input.TextArea rows={3} />
              </Form.Item>
            </Card>

            {submitError && <Alert type="error" showIcon message={submitError} style={{ marginBottom: 24 }} />}
            <Button type="primary" size="large" htmlType="submit" icon={<GithubOutlined />} loading={submitting} disabled={!config?.enabled || !preview}>
              {t('propose.submit')}
            </Button>
          </Form>
        </Col>

        <Col xs={24} xl={12}>
          <div style={{ position: 'sticky', top: 24 }}>
            <Card title={t('propose.preview')} extra={<Typography.Text type="secondary" style={{ fontSize: 12 }}>{t('propose.previewHelp')}</Typography.Text>}>
              {previewError && <Alert type="warning" showIcon message={previewError} style={{ marginBottom: 16 }} />}
              {!preview && !previewError && (
                <Space>
                  <Spin size="small" />
                  <Typography.Text type="secondary">{t('propose.incomplete')}</Typography.Text>
                </Space>
              )}
              {preview && (
                <Space direction="vertical" size={16} style={{ width: '100%' }}>
                  <Tabs
                    items={[
                      { key: 'tree', label: t('propose.shapeTreeFile'), children: <CodeBlock variant="light" code={preview.files.shapeTree.content} /> },
                      { key: 'shape', label: t('propose.shapeFile'), children: <CodeBlock variant="light" code={preview.files.shape.content} /> }
                    ]}
                  />
                  <Divider style={{ margin: 0 }} />
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    {t('propose.humanPreview')}
                  </Typography.Title>
                  <Space size={8}>
                    <code style={{ fontSize: 12 }}>{preview.uri}</code>
                    <ClassTag iri={preview.targetClass} />
                  </Space>
                  {preview.properties.length > 0 ? <ShapeProperties properties={preview.properties} /> : <Typography.Text type="secondary">{t('shape.noProperties')}</Typography.Text>}
                </Space>
              )}
            </Card>
          </div>
        </Col>
      </Row>
    </Space>
  );
};

export default ProposePage;
