import { Alert, Avatar, Card, Col, Flex, Row, Space, Spin, Tag, Typography } from 'antd';
import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useShapes, useVisibleApplications } from '../api';
import type { Application } from '../api';
import { useLang } from '../lib/lang';
import { applicationPath, shapePath } from '../lib/links';

const ApplicationCard = ({ app }: { app: Application }) => {
  const { l } = useLang();
  const { data } = useShapes();
  const shapes = data?.shapes ?? [];
  const navigate = useNavigate();
  return (
    <Card size="small" hoverable onClick={() => navigate(applicationPath(app.slug))} style={{ height: '100%' }} styles={{ body: { display: 'flex', flexDirection: 'column', gap: 12, height: '100%', padding: '20px 24px' } }}>
      <Space size={12}>
        <Avatar shape="square" size={48} src={app.thumbnail ?? undefined}>
          {l(app.name).charAt(0)}
        </Avatar>
        <Space direction="vertical" size={0}>
          <Link to={applicationPath(app.slug)} style={{ fontSize: 16, fontWeight: 600, color: 'rgba(0,0,0,0.88)' }}>
            {l(app.name)}
          </Link>
          {app.url && (
            <a href={app.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 12, fontFamily: 'monospace' }}>
              {app.slug}
            </a>
          )}
        </Space>
      </Space>
      <Typography.Paragraph type="secondary" style={{ margin: 0, flex: 1 }}>
        {l(app.description)}
      </Typography.Paragraph>
      <Space size={4} wrap onClick={(e) => e.stopPropagation()}>
        {app.needs.map((need) => {
          const shape = shapes.find((s) => s.uri === need.shapeTree);
          return (
            <Link key={need.shapeTree} to={shape ? shapePath(shape.id) : '#'}>
              <Tag style={{ marginInlineEnd: 0 }}>{shape ? l(shape.label) : need.shapeTree}</Tag>
            </Link>
          );
        })}
      </Space>
    </Card>
  );
};

const ApplicationsPage = () => {
  const { t, i18n } = useTranslation();
  const { visible, hidden, isPending, isError } = useVisibleApplications();
  const language = t(`language.${i18n.language}`);

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Space direction="vertical" size={8} style={{ maxWidth: 760 }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          {t('applications.title')}
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ fontSize: 16, margin: 0 }}>
          {t('applications.intro')}
        </Typography.Paragraph>
      </Space>
      {isPending && <Spin />}
      {isError && <Alert type="error" showIcon message={t('applications.loadError')} />}
      {!isPending && !isError && (
        <>
          <Flex justify="space-between" align="center" wrap gap={8}>
            <Typography.Text type="secondary">{t('applications.count', { count: visible.length, language })}</Typography.Text>
            {hidden > 0 && (
              <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                {t('applications.hidden', { count: hidden })}
              </Typography.Text>
            )}
          </Flex>
          <Row gutter={[16, 16]}>
            {visible.map((app) => (
              <Col key={app.id} xs={24} md={12} xl={8}>
                <ApplicationCard app={app} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Space>
  );
};

export default ApplicationsPage;
