import { useEffect, useState } from 'react';
import { Button, Drawer, Grid, Layout, Menu, Segmented, Space, Typography } from 'antd';
import { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { GITHUB_REPOSITORY } from '../lib/links';
import { useLang } from '../lib/lang';
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
  const { lang } = useLang();
  const { pathname } = useLocation();
  const { visible, hidden } = useVisibleApplications();
  const screens = Grid.useBreakpoint();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Keep the document language in sync for assistive technologies and hyphenation.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Close the mobile menu when a link has been followed.
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const section = pathname.startsWith('/applications') ? 'applications' : pathname.startsWith('/propose') ? 'propose' : 'shapes';
  const compact = screens.md === false;

  const menuItems = [
    { key: 'shapes', label: <Link to="/">{t('nav.shapes')}</Link> },
    { key: 'applications', label: <Link to="/applications">{t('nav.applications')}</Link> },
    { key: 'propose', label: <Link to="/propose">{t('nav.propose')}</Link> },
    { key: 'github', icon: <GithubOutlined />, label: <a href={GITHUB_REPOSITORY} target="_blank" rel="noreferrer">{t('nav.github')}</a> }
  ];

  const languageSwitch = (
    <Segmented
      size="small"
      value={lang}
      options={SUPPORTED_LANGUAGES.map((code) => ({ value: code, label: code.toUpperCase() }))}
      onChange={(code) => i18n.changeLanguage(code as string)}
    />
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header className="site-header" style={{ display: 'flex', alignItems: 'center', gap: 24, borderBottom: '1px solid #f0f0f0' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(0,0,0,0.88)', fontSize: 18, fontWeight: 600, whiteSpace: 'nowrap', flex: compact ? 1 : undefined }}>
          <Logo />
          {t('site.title')}
        </Link>
        {compact ? (
          <>
            <Button type="text" icon={<MenuOutlined />} aria-label="Menu" onClick={() => setDrawerOpen(true)} />
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} placement="right" width={280} title={languageSwitch} styles={{ body: { padding: 0 } }}>
              <Menu mode="inline" selectedKeys={[section]} items={menuItems} style={{ borderInlineEnd: 'none' }} />
            </Drawer>
          </>
        ) : (
          <>
            <Menu mode="horizontal" selectedKeys={[section]} style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end', borderBottom: 'none' }} items={menuItems} />
            {languageSwitch}
          </>
        )}
      </Layout.Header>
      <Layout.Content className="site-content">
        <Outlet />
      </Layout.Content>
      <Layout.Footer style={{ background: 'transparent' }}>
        <Space direction="vertical" size={4}>
          {visible.length + hidden > 0 && (
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {t('footer.usage', { visible: visible.length, hidden, language: t(`language.${lang}`) })}
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
