import createUserService from "../services/createUser.service";
import listUsersService from "../services/listUsers.service";
import deleteUserService from "../services/deleteUser.service";
import userLoginService from "../services/userLogin.service";
import listUserProfileService from "../services/listUserProfile.service";
import updateUserProfileService from "../services/updateUserProfile.service";

export const createUserController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  const createdUser = await createUserService(name, email, password, isAdm);

  return res.status(201).json(createdUser);
};

export const listUsersController = (req, res) => {
  const usersList = listUsersService();

  return res.json(usersList);
};

export const deleteUserController = (req, res) => {
  try {
    const reqUuid = req.uuid;
    const { uuid } = req.params;
    const isAdm = req.isAdm;
    const deletedUser = deleteUserService(reqUuid, uuid, isAdm);
    return res.json(deletedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userLoginService(email, password);
    return res.json({ token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export const listUserProfileController = (req, res) => {
  const uuid = req.uuid;

  const user = listUserProfileService(uuid);

  return res.json(user);
};

export const updateUserProfileController = (req, res) => {
  try {
    const reqUuid = req.uuid;
    const { uuid } = req.params;
    const isAdm = req.isAdm;
    const user = req.body;
    const updatedUser = updateUserProfileService(reqUuid, uuid, isAdm, user);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

