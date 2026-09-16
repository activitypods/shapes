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
        background: dark ? '#1e1e1e' : '#fafafa',
        color: dark ? '#d4d4d4' : 'rgba(0,0,0,0.88)',
        border: dark ? 'none' : '1px solid #f0f0f0',
        borderRadius: 8,
        padding: '10px 20px 16px'
      }}
    >
      {/* The button sits in its own row: an overlay would hide the start of long lines on narrow screens. */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 4 }}>
        <CopyButton
          text={code}
          label={t('common.copy')}
          size="small"
          ghost={dark}
          style={dark ? { color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(255,255,255,0.2)' } : undefined}
        />
      </div>
      <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.6, overflowX: 'auto' }}>
        <code style={{ overflowWrap: 'normal' }}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
