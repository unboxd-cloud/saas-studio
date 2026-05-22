export type DataUploadPlan = {
  sourceName: string;
  acceptedFormats: string[];
  detectionSteps: string[];
  mappingSteps: string[];
  validationRules: string[];
  generatedEntities: string[];
};

export function planDataUploadFlow(input: { sourceName?: string; formats?: string[] }): DataUploadPlan {
  const sourceName = input.sourceName || 'uploaded-data';
  return {
    sourceName,
    acceptedFormats: input.formats || ['csv', 'xlsx', 'json'],
    detectionSteps: ['parse headers', 'detect column types', 'detect primary identifiers', 'detect tenant fields', 'detect relationships'],
    mappingSteps: ['map source columns to entities', 'map enum values', 'map owner and tenant fields', 'map timestamps'],
    validationRules: ['required id/name fields', 'valid email fields', 'tenantId present or derivable', 'duplicate detection', 'safe file size'],
    generatedEntities: [`${sourceName}_records`, `${sourceName}_imports`, `${sourceName}_validation_errors`]
  };
}
