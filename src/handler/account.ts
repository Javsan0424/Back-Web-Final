import  { Request, Response } from 'express';
import { AccountController } from "../controller/account";

export class AccountHttphHandler{
    accountController = new AccountController();

    async VerifyAccount(request: Request, response: Response){
        const account = await this.accountController.verifyAccount("Javsa", "123");
    }
}