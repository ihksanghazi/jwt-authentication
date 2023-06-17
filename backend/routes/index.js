import express from "express";
import { getUsers, login, logout, Register } from "../controllers/Users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

export default router;
