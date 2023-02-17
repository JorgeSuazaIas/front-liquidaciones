//mapea ambientes productivos

export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credential': 'true',
    Authorization: ''
  }
};
