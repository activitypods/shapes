import { Avatar, Breadcrumb, Button, Card, Flex, Result, Space, Spin, Table, Tag, Typography } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useAllApplications, useShapes } from '../api';
import type { AccessNeed } from '../api';
import { useLang } from '../lib/lang';
import { shapePath } from '../lib/links';
import ClassTag from '../components/ClassTag';
import AccessModeTags from '../components/AccessModeTags';
import CopyButton from '../components/CopyButton';

const ApplicationDetailPage = () => {
  const { t } = useTranslation();
  const { l } = useLang();
  const { slug } = useParams();
  // Deliberately not filtered by language: a direct link to an application must work in every language.
  const { data, isPending } = useAllApplications();
  const { data: shapesData } = useShapes();

  if (isPending) return <Spin />;
  const app = data?.applications.find((a) => a.slug === slug);
  if (!app) return <Result status="404" title={t('applications.notFound')} extra={<Link to="/applications">{t('common.back')}</Link>} />;

  const shapes = shapesData?.shapes ?? [];
  const name = l(app.name);

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Breadcrumb items={[{ title: <Link to="/applications">{t('applications.title')}</Link> }, { title: name }]} />

      <Flex justify="space-between" align="flex-start" gap={24} wrap>
        <Space size={20} align="start" wrap>
          <Avatar shape="square" size={72} src={app.thumbnail ?? undefined}>
            {name.charAt(0)}
          </Avatar>
          <Space direction="vertical" size={4}>
            <Typography.Title level={2} style={{ margin: 0 }}>
              {name}
            </Typography.Title>
            <Typography.Paragraph type="secondary" style={{ fontSize: 16, margin: 0 }}>
              {l(app.description)}
            </Typography.Paragraph>
            {app.url && (
              <a href={app.url} target="_blank" rel="noreferrer" style={{ fontFamily: 'monospace', fontSize: 12 }}>
                {app.url}
              </a>
            )}
          </Space>
        </Space>
        <Space wrap>
          <Button icon={<ExportOutlined />} href={app.id} target="_blank">
            {t('applications.jsonld')}
          </Button>
          {app.url && (
            <Button type="primary" href={app.url} target="_blank">
              {t('applications.open')} <ExportOutlined />
            </Button>
          )}
        </Space>
      </Flex>

      <Card title={t('applications.dataUsed')} extra={<Typography.Text type="secondary">{t('applications.shapes', { count: app.needs.length })}</Typography.Text>}>
        <Table<AccessNeed>
          dataSource={app.needs}
          rowKey="shapeTree"
          pagination={false}
          scroll={{ x: 900 }}
          columns={[
            {
              title: t('applications.shape'),
              key: 'shape',
              width: 200,
              render: (_, need) => {
                const shape = shapes.find((s) => s.uri === need.shapeTree);
                return shape ? (
                  <Link to={shapePath(shape.id)} style={{ fontWeight: 600 }}>
                    {l(shape.label)}
                  </Link>
                ) : (
                  <Typography.Text type="secondary">{t('applications.unknownShape')}</Typography.Text>
                );
              }
            },
            {
              title: t('applications.class'),
              key: 'class',
              width: 180,
              render: (_, need) => {
                const shape = shapes.find((s) => s.uri === need.shapeTree);
                return <ClassTag iri={shape?.targetClass ?? shape?.expectsType ?? null} />;
              }
            },
            {
              title: t('applications.description'),
              key: 'description',
              render: (_, need) => <Typography.Text type="secondary">{l(shapes.find((s) => s.uri === need.shapeTree)?.definition)}</Typography.Text>
            },
            { title: t('applications.accessMode'), key: 'mode', width: 240, render: (_, need) => <AccessModeTags modes={need.accessMode} /> },
            {
              title: t('applications.identifier'),
              key: 'uri',
              width: 260,
              align: 'right',
              render: (_, need) => (
                <Space size={4}>
                  <code style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)' }}>{need.shapeTree.replace(/^.*\/shapetrees\//, '')}</code>
                  <CopyButton text={need.shapeTree} type="text" size="small" />
                  {need.necessity === 'interop:AccessOptional' && <Tag>{t('applications.optional')}</Tag>}
                </Space>
              )
            }
          ]}
        />
      </Card>
    </Space>
  );
};

export default ApplicationDetailPage;
