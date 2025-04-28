

export interface Account {
    Usuario: string;
    password: string;
    nombre: string;
    num_socio: number;
}

const fakeAccount: Account[] = [
    { Usuario: "Javsa", password: "123", nombre:"Javier Santos", num_socio: 3001 },
    { Usuario: "Rachel", password: "456", nombre:"Racheal Garcia", num_socio: 3002},
    { Usuario: "Leon", password: "789", nombre:"Leon Castillo", num_socio: 3003 }
];

export class Database {
    async db(): Promise<Account[]> {
        return fakeAccount;
    }
}