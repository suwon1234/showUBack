import express from 'express';
import passport from 'passport';
import { UpgradeAllData } from '../../controller/admin/adminController.js';

const adminRouter = express.Router();

adminRouter.get("/all-data", passport.authenticate('jwt', { session: false }), UpgradeAllData)

export default adminRouter;