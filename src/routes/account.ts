import express from "express";
import { AccountHttpHandler } from "../handler/account";

const router = express.Router();
const handler = new AccountHttpHandler();

router.post('/', (req, res) => handler.verifyAccount(req, res));

export default router;