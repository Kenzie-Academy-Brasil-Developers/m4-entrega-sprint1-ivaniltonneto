import users from "../database";

import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const date = new Date();

  const formatedDate = date.toLocaleDateString();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: formatedDate,
    updatedOn: formatedDate,
    uuid: uuidv4(),
  };

  users.push(newUser);

  return {
    ...newUser,
    password: undefined,
  };
};

export default createUserService;
