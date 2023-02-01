import express, {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";

import UserService from "../services/user.service";

const router = express.Router();
const userService = UserService.getInstance();

router.get("/", <RequestHandler>async function (req, res, next) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", <RequestHandler>async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.getUser(id);
    return res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", <RequestHandler>async function (req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", <RequestHandler>async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const user = await userService.updateUser(id, req.body);
    res.json({ message: "User updated", user });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", <RequestHandler>async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    await userService.deleteUser(id);
    res.send("User deleted");
  } catch (error) {
    next(error);
  }
});

export default router;
