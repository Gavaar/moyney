import * as express from 'express';
import routes from './routes/routes';

const auth = express();
routes(auth);

export default auth;