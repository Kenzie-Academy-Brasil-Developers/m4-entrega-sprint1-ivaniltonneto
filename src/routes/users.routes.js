import { Router } from "express";

import { createUserController, deleteUserController, listUsersController, listUserProfileController, updateUserProfileController } from "../controllers/controllerUsers.controller";

import verifyAuthTokenMiddleware from "../middleware/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailability.middlewares";
import verifyUserIsAdminMiddleware from "../middleware/verifyUserIsAdmin.middleware";

const routers = Router()

routers.get("",verifyAuthTokenMiddleware, verifyUserIsAdminMiddleware, listUsersController)//Lista todos os usuários
routers.get("/profile",verifyAuthTokenMiddleware, listUserProfileController)//Profile token
routers.post("",verifyEmailAvailabilityMiddleware, createUserController)//criação de usuario
routers.delete("/:uuid",verifyAuthTokenMiddleware, deleteUserController)//Deletar Users
routers.patch("/:uuid", verifyAuthTokenMiddleware, updateUserProfileController)

export default routers