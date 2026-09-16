import { Alert, Breadcrumb, Button, Card, Col, Descriptions, Flex, Grid, List, Result, Row, Space, Spin, Tabs, Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useShapes, useVisibleApplications, usersOfShape } from '../api';
import type { Shape } from '../api';
import { useLang } from '../lib/lang';
import { applicationPath, githubShapeTreeFile, shapePath } from '../lib/links';
import ClassTag from '../components/ClassTag';
import CopyButton from '../components/CopyButton';
import CodeBlock from '../components/CodeBlock';
import ShapeProperties from '../components/ShapeProperties';
import AccessModeTags from '../components/AccessModeTags';
import ApplicationAvatars from '../components/ApplicationAvatars';

const accessNeedsSnippet = (shape: Shape) => `// backend/services/app.service.js
accessNeeds: {
  required: [
    {
      shapeTreeUri: '${shape.uri}',
      accessMode: ['acl:Read', 'acl:Write']
    }
  ]
}`;

const handlerSnippet = (shape: Shape) => `// backend/services/${shape.name.toLowerCase()}.service.js
const { PodResourcesHandlerMixin } = require('@activitypods/app');

module.exports = {
  name: '${shape.name.toLowerCase()}',
  mixins: [PodResourcesHandlerMixin],
  settings: {
    shapeTreeUri: '${shape.uri}'
  }
};`;

const ShapeDetailPage = () => {
  const { t } = useTranslation();
  const { l, lang } = useLang();
  const { '*': id = '' } = useParams();
  const { data, isPending } = useShapes();
  const { visible } = useVisibleApplications();
  const compact = Grid.useBreakpoint().md === false;

  if (isPending) return <Spin />;
  const shapes = data?.shapes ?? [];
  const shape = shapes.find((s) => s.id === id);
  if (!shape) return <Result status="404" title={t('shape.notFound')} extra={<Link to="/">{t('common.back')}</Link>} />;

  const label = l(shape.label);
  const users = usersOfShape(shape, visible);
  const siblings = shapes.filter((s) => s.namespace === shape.namespace && s.id !== shape.id);
  const isFile = shape.expectsType === 'st:NonRDFResource';
  const code = <code />;

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Breadcrumb
        items={[
          { title: <Link to="/">{t('nav.shapes')}</Link> },
          ...(shape.namespace ? [{ title: <Link to={`/?ns=${shape.namespace}`}>{shape.namespace}</Link> }] : []),
          { title: label }
        ]}
      />

      <Flex justify="space-between" align="flex-start" gap={24} wrap>
        <Space direction="vertical" size={8} style={{ maxWidth: 800 }}>
          <Space size={12} align="center" wrap>
            <Typography.Title level={2} style={{ margin: 0 }}>
              {label}
            </Typography.Title>
            <ClassTag iri={shape.targetClass ?? shape.expectsType} />
          </Space>
          <Typography.Paragraph type="secondary" style={{ fontSize: 16, margin: 0 }}>
            {l(shape.definition)}
          </Typography.Paragraph>
        </Space>
        <Space wrap>
          <Button icon={<ExportOutlined />} href={githubShapeTreeFile(shape.id)} target="_blank">
            {t('shape.viewOnGithub')}
          </Button>
          <CopyButton type="primary" text={shape.uri} label={t('shape.copyUri')} />
        </Space>
      </Flex>

      <Row gutter={[24, 24]} align="top">
        <Col xs={24} xl={16}>
          <Space direction="vertical" size={24} style={{ width: '100%' }}>
            <Card title={t('shape.describes')} extra={!isFile && !compact && <Typography.Text type="secondary" style={{ fontSize: 12 }}>{t('shape.generated')}</Typography.Text>}>
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <Typography.Paragraph style={{ fontSize: 15, margin: 0 }}>
                  {isFile ? (
                    t('shape.summaryFile')
                  ) : shape.describesInstance ? (
                    <Trans i18nKey="shape.summaryNamed" values={{ class: shape.targetClass, property: shape.describesInstance }} components={[code, code]} />
                  ) : (
                    <Trans i18nKey="shape.summary" values={{ class: shape.targetClass }} components={[code]} />
                  )}
                </Typography.Paragraph>
                {!isFile && (shape.properties.length > 0 ? <ShapeProperties properties={shape.properties} /> : <Typography.Text type="secondary">{t('shape.noProperties')}</Typography.Text>)}
              </Space>
            </Card>

            <Card title={t('shape.integrate')}>
              <Tabs
                items={[
                  {
                    key: 'access',
                    label: t('shape.tabAccess'),
                    children: (
                      <Space direction="vertical" size={16} style={{ width: '100%' }}>
                        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
                          <Trans i18nKey="shape.accessHelp" values={{ label }} components={[code, code]} />
                        </Typography.Paragraph>
                        <CodeBlock code={accessNeedsSnippet(shape)} />
                      </Space>
                    )
                  },
                  {
                    key: 'backend',
                    label: t('shape.tabBackend'),
                    children: (
                      <Space direction="vertical" size={16} style={{ width: '100%' }}>
                        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
                          <Trans i18nKey="shape.backendHelp" components={[code, code, code, code, code, code]} />
                        </Typography.Paragraph>
                        <CodeBlock code={handlerSnippet(shape)} />
                      </Space>
                    )
                  }
                ]}
              />
            </Card>

            <Card title={t('shape.usedBy', { count: users.length })} styles={{ body: { padding: 0 } }}>
              <List
                dataSource={users}
                locale={{ emptyText: <span /> }}
                renderItem={({ app, need }) => (
                  <List.Item style={{ padding: compact ? '16px' : '16px 24px' }} extra={compact ? undefined : <AccessModeTags modes={need.accessMode} />}>
                    <List.Item.Meta
                      avatar={<ApplicationAvatars applications={[app]} size={48} />}
                      title={<Link to={applicationPath(app.slug)}>{l(app.name)}</Link>}
                      description={
                        <Space direction="vertical" size={4}>
                          <span>{l(app.description)}</span>
                          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                            {app.slug}
                          </Typography.Text>
                          {compact && <AccessModeTags modes={need.accessMode} />}
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
              <Typography.Text type="secondary" style={{ display: 'block', padding: '12px 24px', fontSize: 12 }}>
                {t('shape.usedByHelp', { language: t(`language.${lang}`) })}
              </Typography.Text>
            </Card>
          </Space>
        </Col>

        <Col xs={24} xl={8}>
          <Space direction="vertical" size={24} style={{ width: '100%' }}>
            <Card title={t('shape.identifiers')} styles={{ body: { padding: '8px 0' } }}>
              <Descriptions
                column={1}
                layout="vertical"
                size="small"
                colon={false}
                style={{ padding: '0 24px' }}
                items={[
                  {
                    key: 'shapeTree',
                    label: (
                      <span>
                        <Trans i18nKey="shape.shapeTreeUri" components={[code]} />
                      </span>
                    ),
                    children: (
                      <Flex justify="space-between" align="center" gap={8}>
                        <code style={{ fontSize: 12, wordBreak: 'break-all' }}>{shape.uri}</code>
                        <CopyButton text={shape.uri} type="text" size="small" />
                      </Flex>
                    )
                  },
                  ...(shape.shapeUri
                    ? [
                        {
                          key: 'shape',
                          label: t('shape.shapeUri'),
                          children: (
                            <Flex justify="space-between" align="center" gap={8}>
                              <code style={{ fontSize: 12, wordBreak: 'break-all' }}>{shape.shapeUri}</code>
                              <CopyButton text={shape.shapeUri} type="text" size="small" />
                            </Flex>
                          )
                        }
                      ]
                    : []),
                  ...(shape.targetClass ? [{ key: 'class', label: t('shape.targetClass'), children: <ClassTag iri={shape.targetClass} /> }] : [])
                ]}
              />
              <Space style={{ padding: '8px 24px 0' }} split={<Typography.Text type="secondary">·</Typography.Text>}>
                <a href={`${shape.uri}?format=turtle`} target="_blank" rel="noreferrer">
                  {t('shape.turtle')} <ExportOutlined />
                </a>
                <a href={`${shape.uri}?format=jsonld`} target="_blank" rel="noreferrer">
                  {t('shape.jsonld')} <ExportOutlined />
                </a>
              </Space>
            </Card>

            {siblings.length > 0 && (
              <Card title={t('shape.sameNamespace')} styles={{ body: { padding: 0 } }}>
                <List
                  dataSource={siblings}
                  renderItem={(sibling) => {
                    const siblingUsers = usersOfShape(sibling, visible).map((u) => u.app);
                    return (
                      <List.Item style={{ padding: '12px 24px' }} extra={<Space size={8}>{siblingUsers.length > 0 && <ApplicationAvatars applications={siblingUsers} size={20} />}<ClassTag iri={sibling.targetClass} /></Space>}>
                        <Link to={shapePath(sibling.id)}>{l(sibling.label)}</Link>
                      </List.Item>
                    );
                  }}
                />
              </Card>
            )}

            <Alert type="info" showIcon message={<Trans i18nKey="shape.immutable" components={[<Link to="/propose" />]} />} />
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default ShapeDetailPage;
