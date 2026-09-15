import { useTranslation } from 'react-i18next';
import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  /** Light variant for Turtle sources in side cards; dark by default for JavaScript snippets. */
  variant?: 'dark' | 'light';
}

const CodeBlock = ({ code, variant = 'dark' }: CodeBlockProps) => {
  const { t } = useTranslation();
  const dark = variant === 'dark';
  return (
    <div
      style={{
        position: 'relative',
        background: dark ? '#1e1e1e' : '#fafafa',
        color: dark ? '#d4d4d4' : 'rgba(0,0,0,0.88)',
        border: dark ? 'none' : '1px solid #f0f0f0',
        borderRadius: 8,
        padding: '16px 20px'
      }}
    >
      <CopyButton
        text={code}
        label={t('common.copy')}
        size="small"
        ghost={dark}
        style={{ position: 'absolute', top: 10, right: 10, ...(dark ? { color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(255,255,255,0.2)' } : {}) }}
      />
      <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.6, overflowX: 'auto', paddingRight: 96 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
