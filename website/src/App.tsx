import { App as AntdApp, ConfigProvider } from 'antd';
import frFR from 'antd/locale/fr_FR';
import enUS from 'antd/locale/en_US';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { useLang } from './lib/lang';
import theme from './theme';
import AppLayout from './components/AppLayout';
import ScrollToTop from './components/ScrollToTop';
import ShapesPage from './pages/ShapesPage';
import ShapeDetailPage from './pages/ShapeDetailPage';
import MostUsedPage from './pages/MostUsedPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ApplicationDetailPage from './pages/ApplicationDetailPage';
import ProposePage from './pages/ProposePage';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } } });

const App = () => {
  const { lang } = useLang();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme} locale={lang === 'fr' ? frFR : enUS}>
        <AntdApp>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<ShapesPage />} />
                <Route path="/most-used" element={<MostUsedPage />} />
                {/* The shape (tree) URIs served as RDF to machines show the same page to browsers. */}
                <Route path="/shapetrees/*" element={<ShapeDetailPage />} />
                <Route path="/shapes/*" element={<ShapeDetailPage />} />
                <Route path="/applications" element={<ApplicationsPage />} />
                <Route path="/applications/:slug" element={<ApplicationDetailPage />} />
                <Route path="/propose" element={<ProposePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
