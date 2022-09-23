const verifyUserIsAdminMiddleware = (req, res, next) => {
  const isAdm = req.isAdm;

  if (!isAdm) {
    return res.status(401).json({ message: "Not authorized" });
  }

  next();
};

export default verifyUserIsAdminMiddleware;
