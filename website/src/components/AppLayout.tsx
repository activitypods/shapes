import { Layout, Menu, Segmented, Space, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { GITHUB_REPOSITORY } from '../lib/links';
import { useVisibleApplications } from '../api';

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 1300 1000" aria-hidden="true">
    <polygon fill="#353535" points="559,174 266,847 389,847 630,295 577,174" />
    <polygon fill="#7C4DFF" points="860,540 765,323 700,174 577,174 630,295 765,606 771,618 860,540" />
    <polygon fill="#00AEF0" points="765,606 771,618 634,304" />
    <polygon fill="#353535" points="771,618 871,847 781,641" />
  </svg>
);

const AppLayout = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { visible, hidden } = useVisibleApplications();

  const section = pathname.startsWith('/applications') ? 'applications' : pathname.startsWith('/propose') ? 'propose' : 'shapes';

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', gap: 24, borderBottom: '1px solid #f0f0f0' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(0,0,0,0.88)', fontSize: 18, fontWeight: 600, whiteSpace: 'nowrap' }}>
          <Logo />
          {t('site.title')}
        </Link>
        <Menu
          mode="horizontal"
          selectedKeys={[section]}
          style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end', borderBottom: 'none' }}
          items={[
            { key: 'shapes', label: <Link to="/">{t('nav.shapes')}</Link> },
            { key: 'applications', label: <Link to="/applications">{t('nav.applications')}</Link> },
            { key: 'propose', label: <Link to="/propose">{t('nav.propose')}</Link> },
            { key: 'github', icon: <GithubOutlined />, label: <a href={GITHUB_REPOSITORY} target="_blank" rel="noreferrer">{t('nav.github')}</a> }
          ]}
        />
        <Segmented
          size="small"
          value={i18n.language}
          options={SUPPORTED_LANGUAGES.map((lang) => ({ value: lang, label: lang.toUpperCase() }))}
          onChange={(lang) => i18n.changeLanguage(lang as string)}
        />
      </Layout.Header>
      <Layout.Content style={{ padding: '24px 50px 48px' }}>
        <Outlet />
      </Layout.Content>
      <Layout.Footer style={{ background: 'transparent' }}>
        <Space direction="vertical" size={4}>
          {visible.length + hidden > 0 && (
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {t('footer.usage', { visible: visible.length, hidden, language: t(`language.${i18n.language}`) })}
            </Typography.Text>
          )}
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            {t('footer.funding')}
          </Typography.Text>
        </Space>
      </Layout.Footer>
    </Layout>
  );
};

export default AppLayout;
