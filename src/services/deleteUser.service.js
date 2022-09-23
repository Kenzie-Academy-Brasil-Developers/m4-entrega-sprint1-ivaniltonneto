import users from "../database";

const deleteUserService = (reqUuid, uuid, isAdm) => {
  const userIndex = users.find((user) => user.uuid === uuid);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  if (!isAdm && users[userIndex].uuid !== reqUuid) {
    throw new Error(
      "You can only delete your profile, unless you are an admin"
    );
  }

  users.splice(userIndex, 1);

  return { message: "User deleted with success" };
};

export default deleteUserService;
