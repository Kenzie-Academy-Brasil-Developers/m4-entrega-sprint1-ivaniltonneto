import express from "express";
import "dotenv/config";

import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/session.routes";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
