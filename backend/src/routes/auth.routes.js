import express from 'express';
import {createaccount} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/create-account', createaccount);

export default router;