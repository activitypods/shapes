import { Space, Tag } from 'antd';
import { useTranslation } from 'react-i18next';

const colorByMode: Record<string, string | undefined> = { 'acl:Read': undefined, 'acl:Write': 'blue', 'acl:Append': 'cyan', 'acl:Control': 'gold' };

const AccessModeTags = ({ modes }: { modes: string[] }) => {
  const { t } = useTranslation();
  return (
    <Space size={4} wrap>
      {modes.map((mode) => (
        <Tag key={mode} color={colorByMode[mode]} style={{ marginInlineEnd: 0 }}>
          {t(`access.${mode.replace(':', '_')}`, { defaultValue: mode })}
        </Tag>
      ))}
    </Space>
  );
};

export default AccessModeTags;
