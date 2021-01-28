
export class User {
    private name: string;
    private email: string;
    private password: string;

    constructor(name:string,email:string,password:string){
        this.name = name,
        this.email = email,
        this.password = password
    }

    setName(name:string): void{
        this.name = name;
    }

    setEmail(email:string):void{
        this.email = email;
    }


    setPassword(password: string):void{
        this.password = password;
    }

    getName(): string{
        return this.name;
    }

    getEmail(): string{
        return this.email;
    }

    getPassword(): string{
        return this.password;
    }
}