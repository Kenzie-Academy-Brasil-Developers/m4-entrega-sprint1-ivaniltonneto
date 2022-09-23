import { Router } from "express";

import { userLoginController } from "../controllers/controllerUsers.controller"; 

const loginRoutes = Router();

loginRoutes.post("", userLoginController);

export default loginRoutes;
