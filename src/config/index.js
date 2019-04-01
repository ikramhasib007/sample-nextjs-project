import config from '../../config.json';

const env = process.env.NODE_ENV || 'development';
const dev = process.env.NODE_ENV !== 'production';

var envConfig = config[env];

export const api_url = envConfig['API_URL'];
export const base_url = envConfig['SERVER_URL'];

export const reduxDevTools = dev ? (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) : undefined;

export var options = {
  headers: {
    'x-auth-token': 'dummy-token',
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
};
