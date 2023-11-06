export default {
  get: {
    tags: [],
    summary: 'получение записей',
    description: '',
    parameters: [
      {
        name: "id",
        in: "query",
        schema: {
          type: "string",
        },
        required: false,
        description: "filter by id",
      },
      {
        name: "perPage",
        in: "query",
        schema: {
          type: "string",
        },
        required: false,
        description: "number of elements per page",
      },
      {
        name: "pageNumber",
        in: "query",
        schema: {
          type: "string",
        },
        required: false,
        description: "number of elements per page",
      },
    ],
    responses: {
      200: {
        description: 'getting a list of action history',
      },
      400: {
        description: 'bad request',
      }
    }
  }
}
