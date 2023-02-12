//mapea ambientes no productivos

export const environment = {
  production: false,
  apiUrl: 'http://localhost:9090/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credential': 'true',
    Authorization: ''
  }
};
