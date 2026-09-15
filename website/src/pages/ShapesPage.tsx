import { useMemo, useState } from 'react';
import { Card, Col, Empty, Flex, Input, Row, Space, Spin, Tag, Typography } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useShapes, useVisibleApplications, usersOfShape } from '../api';
import type { Shape } from '../api';
import { useLang } from '../lib/lang';
import { shapePath } from '../lib/links';
import ClassTag from '../components/ClassTag';
import ApplicationAvatars from '../components/ApplicationAvatars';
import CopyButton from '../components/CopyButton';

/** Namespaces with fewer shapes than this are grouped under "other namespaces". */
const MIN_NAMESPACE_SIZE = 2;

const namespaceTitles: Record<string, string> = { as: 'ActivityStreams', vcard: 'vCard', maid: 'Mutual Aid' };

const ShapeCard = ({ shape }: { shape: Shape }) => {
  const { t } = useTranslation();
  const { l } = useLang();
  const { visible } = useVisibleApplications();
  const navigate = useNavigate();
  const users = usersOfShape(shape, visible).map((u) => u.app);
  return (
    <Card
      size="small"
      hoverable
      onClick={() => navigate(shapePath(shape.id))}
      styles={{ body: { display: 'flex', flexDirection: 'column', gap: 8, height: '100%', padding: '20px 24px' } }}
      style={{ height: '100%' }}
    >
      <Flex justify="space-between" align="center" gap={8}>
        <Link to={shapePath(shape.id)} style={{ fontSize: 16, fontWeight: 600, color: 'rgba(0,0,0,0.88)' }}>
          {l(shape.label)}
        </Link>
        <ClassTag iri={shape.targetClass ?? shape.expectsType} />
      </Flex>
      <Typography.Paragraph type="secondary" style={{ margin: 0, flex: 1 }}>
        {l(shape.definition)}
      </Typography.Paragraph>
      <Flex justify="space-between" align="center" gap={12} style={{ paddingTop: 8 }}>
        {users.length > 0 ? (
          <Space size={8} onClick={(e) => e.stopPropagation()}>
            <ApplicationAvatars applications={users} />
            <Typography.Text type="secondary">{t('shapes.usedBy', { count: users.length })}</Typography.Text>
          </Space>
        ) : (
          <Typography.Text type="secondary">{t('shapes.usedBy', { count: 0 })}</Typography.Text>
        )}
        <CopyButton text={shape.uri} type="text" size="small" icon={<CopyOutlined />} onClick={(e) => e.stopPropagation()} label={<code style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)' }}>{shape.id}</code>} />
      </Flex>
    </Card>
  );
};

const ShapesPage = () => {
  const { t } = useTranslation();
  const { data, isPending } = useShapes();
  const { visible } = useVisibleApplications();
  const [search, setSearch] = useState('');
  const [namespace, setNamespace] = useState<string | null>(null);
  const [usedOnly, setUsedOnly] = useState(false);

  const shapes = data?.shapes ?? [];

  const namespaces = useMemo(() => {
    const counts = new Map<string, number>();
    for (const shape of shapes) counts.set(shape.namespace ?? '', (counts.get(shape.namespace ?? '') ?? 0) + 1);
    return [...counts.entries()].filter(([ns]) => ns).sort((a, b) => b[1] - a[1]);
  }, [shapes]);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return shapes.filter((shape) => {
      if (namespace && shape.namespace !== namespace) return false;
      if (usedOnly && usersOfShape(shape, visible).length === 0) return false;
      if (!needle) return true;
      const haystack = [shape.id, shape.targetClass, ...Object.values(shape.label), ...Object.values(shape.definition), ...shape.properties.map((p) => p.path)]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [shapes, search, namespace, usedOnly, visible]);

  // Group by namespace, big namespaces first, small ones together at the end.
  const groups = useMemo(() => {
    const byNamespace = new Map<string, Shape[]>();
    for (const shape of filtered) {
      const key = shape.namespace && (namespaces.find(([ns]) => ns === shape.namespace)?.[1] ?? 0) >= MIN_NAMESPACE_SIZE ? shape.namespace : '';
      byNamespace.set(key, [...(byNamespace.get(key) ?? []), shape]);
    }
    return [...byNamespace.entries()].sort(([a], [b]) => (a === '' ? 1 : b === '' ? -1 : 0));
  }, [filtered, namespaces]);

  if (isPending) return <Spin />;

  return (
    <Space direction="vertical" size={32} style={{ width: '100%' }}>
      <Space direction="vertical" size={16}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          {t('shapes.title')}
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ fontSize: 16, margin: 0, maxWidth: 760 }}>
          <Trans i18nKey="shapes.intro" components={[<Link to="/propose" />]} />
        </Typography.Paragraph>
        <Space size={16}>
          <Input.Search size="large" allowClear placeholder={t('shapes.search')} style={{ width: 560 }} value={search} onChange={(e) => setSearch(e.target.value)} />
          <Typography.Text type="secondary">{t('shapes.count', { count: shapes.length })}</Typography.Text>
        </Space>
      </Space>

      <Flex justify="space-between" align="center" wrap gap={8}>
        <Space size={4} wrap>
          <Tag.CheckableTag checked={namespace === null} onChange={() => setNamespace(null)}>
            {t('shapes.all')}
          </Tag.CheckableTag>
          {namespaces.map(([ns, count]) => (
            <Tag.CheckableTag key={ns} checked={namespace === ns} onChange={(checked) => setNamespace(checked ? ns : null)} style={{ fontFamily: 'monospace' }}>
              {ns} <span style={{ opacity: 0.55 }}>{count}</span>
            </Tag.CheckableTag>
          ))}
          <span style={{ width: 1, height: 16, background: '#d9d9d9', margin: '0 4px', display: 'inline-block', verticalAlign: 'middle' }} />
          <Tag.CheckableTag checked={usedOnly} onChange={setUsedOnly}>
            {t('shapes.usedOnly')}
          </Tag.CheckableTag>
        </Space>
        <Link to="/most-used">{t('shapes.mostUsed')}</Link>
      </Flex>

      {groups.length === 0 && <Empty description={t('shapes.noResult')} />}

      {groups.map(([ns, list]) => (
        <Space key={ns || 'other'} direction="vertical" size={16} style={{ width: '100%' }}>
          <Space align="baseline" size={12}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {ns ? namespaceTitles[ns] ?? ns : t('shapes.otherNamespaces')}
            </Typography.Title>
            {ns && (
              <Typography.Text type="secondary" style={{ fontFamily: 'monospace', fontSize: 12 }}>
                {ns}:
              </Typography.Text>
            )}
          </Space>
          <Row gutter={[16, 16]}>
            {list.map((shape) => (
              <Col key={shape.id} xs={24} md={12} xl={8}>
                <ShapeCard shape={shape} />
              </Col>
            ))}
          </Row>
        </Space>
      ))}
    </Space>
  );
};

export default ShapesPage;
