export function generateCrudEndpoints(entity: string) {
  return [
    `GET /v1/${entity}`,
    `POST /v1/${entity}`,
    `GET /v1/${entity}/:id`,
    `PATCH /v1/${entity}/:id`,
    `DELETE /v1/${entity}/:id`
  ];
}
