import express from 'express';
import {createaccount, signout} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/create-account', createaccount);
router.get('/sign-out', signout)

export default router;