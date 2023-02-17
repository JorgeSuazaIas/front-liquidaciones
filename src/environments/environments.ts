//mapea ambientes no productivos

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credential': 'true',
    Authorization: ''
  }
};
