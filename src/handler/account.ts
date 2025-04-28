import { Request, Response } from 'express';
import { AccountController } from "../controller/account";

export class AccountHttpHandler {
    private accountController = new AccountController();

    public async verifyAccount(req: Request, res: Response): Promise<void> {
        try {
            const { Usuario, password } = req.body;
            
            if (!Usuario || !password) {
                res.status(400).json({
                    success: false,
                    message: "Usuario and password are required"
                });
                return;
            }

            const result = await this.accountController.verifyAccount(Usuario, password);
            res.status(result.success ? 200 : 401).json(result);
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }
}