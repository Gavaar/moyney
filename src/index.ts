import { functions } from './firestore';
import * as express from 'express';
import _auth from './auth';

const cors = require('cors');
const bodyParser = require('body-parser');

function interceptor(_e: express.Express): express.Express {
  _e.use(cors({ origin: ['http://localhost:4200', 'https://moyney.web.app']}));
  _e.use(bodyParser.json());

  return _e;
}

export const auth = functions.https.onRequest(interceptor(_auth));
