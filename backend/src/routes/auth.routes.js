import express from 'express';
import {createaccount, signout, signin} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/create-account', createaccount);
router.post('/sign-in', signin);
router.post('/sign-out', signout);

export default router;