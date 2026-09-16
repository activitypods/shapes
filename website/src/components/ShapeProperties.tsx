import { Table, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import type { ShapeProperty, ValueConstraint } from '../api';
import ClassTag from './ClassTag';
import { useLang } from '../lib/lang';

const datatypeKeys: Record<string, string> = {
  'xsd:string': 'text',
  'rdf:langString': 'langText',
  'rdf:HTML': 'html',
  'xsd:dateTime': 'dateTime',
  'xsd:date': 'date',
  'xsd:anyURI': 'uri',
  'xsd:integer': 'integer',
  'xsd:int': 'integer',
  'xsd:decimal': 'decimal',
  'xsd:float': 'decimal',
  'xsd:double': 'decimal',
  'xsd:boolean': 'boolean'
};
const nodeKindKeys: Record<string, string> = { 'sh:IRI': 'iri', 'sh:Literal': 'literal', 'sh:BlankNode': 'blank' };

/** Turns one SHACL value constraint into a short human-readable phrase. */
const Constraint = ({ constraint }: { constraint: ValueConstraint }) => {
  const { t } = useTranslation();
  if (constraint.hasValue)
    return (
      <>
        {t('values.exactly')} <ClassTag iri={constraint.hasValue} />
      </>
    );
  if (constraint.class)
    return (
      <>
        {t('values.instanceOf')} <ClassTag iri={constraint.class} />
      </>
    );
  if (constraint.node)
    return (
      <>
        {t('values.node')} <ClassTag iri={constraint.node} />
      </>
    );
  if (constraint.datatype) {
    const key = datatypeKeys[constraint.datatype];
    return <>{key ? t(`values.${key}`) : <code>{constraint.datatype}</code>}</>;
  }
  if (constraint.nodeKind) {
    const key = nodeKindKeys[constraint.nodeKind];
    return <>{key ? t(`values.${key}`) : <code>{constraint.nodeKind}</code>}</>;
  }
  return null;
};

const ExpectedValue = ({ property }: { property: ShapeProperty }) => {
  const { t } = useTranslation();
  const alternatives = property.or ?? (property.value ? [property.value] : []);
  if (alternatives.length === 0) return <Typography.Text type="secondary">{t('values.any')}</Typography.Text>;
  return (
    <>
      {alternatives.map((constraint, index) => (
        <span key={index}>
          {index > 0 && <Typography.Text type="secondary"> {t('values.or')} </Typography.Text>}
          <Constraint constraint={constraint} />
        </span>
      ))}
    </>
  );
};

/** `0..n`, `1`, `1..n`, `0..1`… */
const cardinality = ({ minCount = 0, maxCount }: ShapeProperty) =>
  maxCount === undefined ? `${minCount}..n` : minCount === maxCount ? `${minCount}` : `${minCount}..${maxCount}`;

/** The nested shape a property's value must conform to, if any (direct `sh:node` or inside `sh:or`). */
const nestedProperties = (property: ShapeProperty): ShapeProperty[] | undefined =>
  [property.value, ...(property.or ?? [])].find((c) => c?.nodeProperties?.length)?.nodeProperties;

const ShapeProperties = ({ properties, nested = false }: { properties: ShapeProperty[]; nested?: boolean }) => {
  const { t } = useTranslation();
  const { l } = useLang();
  return (
    <Table<ShapeProperty>
      dataSource={properties}
      rowKey="path"
      pagination={false}
      size={nested ? 'small' : 'middle'}
      scroll={{ x: 640 }}
      expandable={{
        rowExpandable: (property) => !!nestedProperties(property),
        // Embedded nodes (an address, a geolocation…) show their own properties as a sub-table.
        expandedRowRender: (property) => <ShapeProperties properties={nestedProperties(property) ?? []} nested />,
        defaultExpandAllRows: true
      }}
      columns={[
        {
          title: t('shape.property'),
          dataIndex: 'path',
          width: 200,
          render: (path: string) => <code style={{ fontSize: 13 }}>{path}</code>
        },
        { title: t('shape.expected'), key: 'expected', width: 260, render: (_, property) => <ExpectedValue property={property} /> },
        { title: t('shape.cardinality'), key: 'cardinality', width: 80, render: (_, property) => <Typography.Text type="secondary">{cardinality(property)}</Typography.Text> },
        { title: t('shape.description'), dataIndex: 'description', render: (description?: ShapeProperty['description']) => <Typography.Text type="secondary">{l(description)}</Typography.Text> }
      ]}
    />
  );
};

export default ShapeProperties;
