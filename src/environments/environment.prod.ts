import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://ezaj0xp87l.execute-api.eu-central-1.amazonaws.com',
    bff: 'https://7442y4zpc6.execute-api.eu-central-1.amazonaws.com',
    cart: 'http://mikita94-cart-api-development.eu-central-1.elasticbeanstalk.com',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
};
