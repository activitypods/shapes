import { Button, App } from 'antd';
import type { ButtonProps } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface CopyButtonProps extends ButtonProps {
  text: string;
  label?: React.ReactNode;
}

const CopyButton = ({ text, label, onClick, ...props }: CopyButtonProps) => {
  const { t } = useTranslation();
  const { message } = App.useApp();
  return (
    <Button
      icon={<CopyOutlined />}
      onClick={async (event) => {
        onClick?.(event);
        await navigator.clipboard.writeText(text);
        message.success(t('shape.copied'));
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CopyButton;
