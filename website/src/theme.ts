import type { ThemeConfig } from 'antd';

/** Antd defaults with the ActivityPods purple (see docs/src/styles/custom.css) and Open Sans like the Pod provider. */
const theme: ThemeConfig = {
  token: {
    colorPrimary: '#7c4dff',
    colorLink: '#7c4dff',
    fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: 6
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerPadding: '0 50px',
      bodyBg: '#f5f5f5'
    }
  }
};

export default theme;
