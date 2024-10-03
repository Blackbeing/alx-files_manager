// Inside the folder routes, create a file index.js that contains all endpoints of our API:
//
// GET /status => AppController.getStatus
// GET /stats => AppController.getStats
//
//

import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router();

router.get('/stats', AppController.getStats);
router.get('/status', AppController.getStatus);

module.exports = router;
