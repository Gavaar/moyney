import { Express } from 'express';
import { admin } from '../../firestore';

export default (auth: Express) => {
  // GET
  auth.get('/me/:uid', async (req, res) => {
    try{
      const { uid } = req.params;
      const _user = await admin.auth().getUser(uid);
      if (_user) {
        res.status(200).json(_user);
      }
      else res.status(404).json({ message: 'user doesn\'t exist' });
    }
    catch (e) {
      console.error(e);
      res.status(500).json({
        error: e,
        message: 'idk what im doing',
      });
    }
  });
};
