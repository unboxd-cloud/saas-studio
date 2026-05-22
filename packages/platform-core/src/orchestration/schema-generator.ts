export type GeneratedField = {
  name: string;
  type: string;
  required?: boolean;
};

export type GeneratedEntity = {
  name: string;
  fields: GeneratedField[];
};

export function generateSchemaFromEntities(entities: string[]): GeneratedEntity[] {
  return entities.map((entity) => ({
    name: entity,
    fields: [
      { name: 'id', type: 'string', required: true },
      { name: 'organizationId', type: 'string', required: true },
      { name: 'tenantId', type: 'string' },
      { name: 'name', type: 'string', required: true },
      { name: 'metadata', type: 'json' },
      { name: 'createdAt', type: 'datetime', required: true },
      { name: 'updatedAt', type: 'datetime', required: true }
    ]
  }));
}
