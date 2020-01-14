const axios = require('axios');
const graphQlEndpoint = process.env.NETLIFY_DEV ? 'http://localhost:8004/' : process.env.CRDS_GQL_ENDPOINT;

const getAnswerById = (id, response) => {
  const answers = response.form_response.answers.filter(answer => answer.field.id === id);
  const answer = answers[0] ? answers[0] : {};

  // Since TypeForm does not have consistency between the field.type and the value key we need to set it consistently.
  // Ex: field.type = yes_no and key = boolean
  // first we need to remove type and field so we are left with the value.
  const key = Object.keys(answer).filter(key => key !== 'type' && key !== 'field')[0];

  if (!key) {
    return {};
  }

  return {
    value: answer[key].toString()
  };
};

const mergeFieldDefinitionsWithAnswers = response => {
  let fields = response.form_response.definition.fields.map(field => {
    const answer = getAnswerById(field.id, response);

    return {
      ...{
        id: field.id,
        title: field.title,
        type: field.type,
        ref: field.ref
      },
      ...answer
    };
  });

  return fields;
};

const convertResponse = response => {
  return {
    responseId: response.event_id,
    response: {
      formId: response.form_response.form_id,
      landedAt: response.form_response.landed_at,
      submittedAt: response.form_response.submitted_at,
      fields: mergeFieldDefinitionsWithAnswers(response)
    }
  };
};

const fieldMutationInput = fields => {
  return fields
    .map(field => {
      const values = [
        `id: "${field.id}"`,
        `title: "${field.title}"`,
        `type: "${field.type}"`,
        `ref: "${field.ref}"`,
        `value: "${field.value}"`
      ].join('');
      return `{${values}}`;
    })
    .join(',');
};

const logTypeFormResponse = response => {
  const convertedResponse = convertResponse(response);

  return axios({
    url: graphQlEndpoint,
    method: 'post',
    data: {
      query: `mutation {
          logTypeFormResponse(
            responseId: "${convertedResponse.responseId}"
            response: {
              formId: "${convertedResponse.response.formId}",
              landedAt: "${convertedResponse.response.landedAt}",
              submittedAt: "${convertedResponse.response.submittedAt}",
              fields: [${fieldMutationInput(convertedResponse.response.fields)}]
            }
          )
        }`
    }
  });
};

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'Test'
  });

  logTypeFormResponse(JSON.parse(event.body))
    .then(({ data }) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });
};
