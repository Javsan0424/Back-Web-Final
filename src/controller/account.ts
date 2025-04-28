import { Database, Account } from "../db/fake.service";

export class AccountController{
    database = new Database();

    async verifyAccount(Usuario: string, password: string): Promise<{ 
        success: boolean; 
        data?: { 
            nombre: string; 
            num_socio: number 
        }; 
        message?: string 
    }> {
        const accounts = await this.database.db();
        const account = accounts.find(acc => 
            acc.Usuario === Usuario && acc.password === password
        );

        if (account) {
            return {
                success: true,
                data: {
                    nombre: account.nombre,
                    num_socio: account.num_socio
                }
            };
        } else {
            return {
                success: false,
                message: "Acceso no permitido: Usuario o contraseña incorrectos"
            };
        }
    }
}