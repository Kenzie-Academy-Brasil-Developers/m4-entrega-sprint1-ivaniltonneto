import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.isAdm = decoded.isAdm;
    req.uuid = decoded.uuid;

    next();
  });
};

export default verifyAuthTokenMiddleware;
