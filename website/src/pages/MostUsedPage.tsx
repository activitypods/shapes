import { Breadcrumb, Card, Flex, List, Progress, Space, Spin, Typography } from 'antd';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useShapes, useVisibleApplications, usersOfShape } from '../api';
import { useLang } from '../lib/lang';
import { shapePath } from '../lib/links';
import ClassTag from '../components/ClassTag';
import ApplicationAvatars from '../components/ApplicationAvatars';

const MostUsedPage = () => {
  const { t, i18n } = useTranslation();
  const { l } = useLang();
  const { data, isPending } = useShapes();
  const { visible } = useVisibleApplications();

  if (isPending) return <Spin />;
  const shapes = data?.shapes ?? [];
  const ranked = shapes
    .map((shape) => ({ shape, users: usersOfShape(shape, visible).map((u) => u.app) }))
    .filter((entry) => entry.users.length > 0)
    .sort((a, b) => b.users.length - a.users.length);

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Breadcrumb items={[{ title: <Link to="/">{t('nav.shapes')}</Link> }, { title: t('mostUsed.title') }]} />
      <Space direction="vertical" size={8} style={{ maxWidth: 760 }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          {t('mostUsed.title')}
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ fontSize: 16, margin: 0 }}>
          {t('mostUsed.intro', { count: visible.length, language: t(`language.${i18n.language}`) })}
        </Typography.Paragraph>
      </Space>
      <Card styles={{ body: { padding: 0 } }}>
        <List
          dataSource={ranked}
          renderItem={({ shape, users }, index) => (
            <List.Item style={{ padding: '12px 24px' }}>
              <Flex align="center" gap={16} style={{ width: '100%' }}>
                <Typography.Text type="secondary" style={{ fontSize: 16, fontWeight: 600, width: 32 }}>
                  {index + 1}
                </Typography.Text>
                <Link to={shapePath(shape.id)} style={{ fontSize: 15, fontWeight: 600, width: 220 }}>
                  {l(shape.label)}
                </Link>
                <span style={{ width: 200 }}>
                  <ClassTag iri={shape.targetClass ?? shape.expectsType} />
                </span>
                <Flex align="center" gap={10} style={{ flex: 1, minWidth: 0 }}>
                  <ApplicationAvatars applications={users} size={28} />
                  <Typography.Text type="secondary" ellipsis>
                    {users.map((app) => l(app.name)).join(', ')}
                  </Typography.Text>
                </Flex>
                <Space size={8}>
                  <Progress percent={(users.length / visible.length) * 100} showInfo={false} size={[80, 6]} strokeColor="#7c4dff" />
                  <Typography.Text strong style={{ width: 44, textAlign: 'right' }}>
                    {users.length}/{visible.length}
                  </Typography.Text>
                </Space>
              </Flex>
            </List.Item>
          )}
        />
        <Typography.Text type="secondary" style={{ display: 'block', padding: '12px 24px' }}>
          {t('mostUsed.unused', { count: shapes.length - ranked.length })}
        </Typography.Text>
      </Card>
    </Space>
  );
};

export default MostUsedPage;
