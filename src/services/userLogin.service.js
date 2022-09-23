import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = async (email, password) => {
  const userFound = users.find((user) => user.email === email);

  if (!userFound) {
    throw new Error("Invalid email or password");
  }

  const passwordMatch = bcrypt.compareSync(password, userFound.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { email: email, isAdm: userFound.isAdm, uuid: userFound.uuid },
    "SECRET_KEY",
    { expiresIn: "24h" }
  );

  return token;
};

export default userLoginService;
