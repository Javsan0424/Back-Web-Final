

export interface Account {
    mail: string;
    password: string;
}

const fakeAccount: Account[] = [
    { mail: "Javsa@hotmail.com", password: "123" },
    { mail: "Rachel@hotmail.com", password: "456" },
    { mail: "Leon@hotmail.com", password: "789" }
];

export class Database {
    async db(): Promise<Account[]> {
        return fakeAccount;
    }
}