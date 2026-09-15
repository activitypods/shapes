import { Tag } from 'antd';

const colorByPrefix: Record<string, string> = { as: 'purple', vcard: 'blue' };

/** A monospace tag for a compacted IRI such as `as:Event`, colored by its namespace. */
const ClassTag = ({ iri }: { iri: string | null }) => {
  if (!iri) return null;
  const prefix = iri.split(':')[0];
  return (
    <Tag color={colorByPrefix[prefix]} style={{ fontFamily: 'monospace', marginInlineEnd: 0 }}>
      {iri}
    </Tag>
  );
};

export default ClassTag;
