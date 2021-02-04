import {uuid} from 'uuidv4';

export class User {
    private readonly id: string;
    private name: string;
    private email: string;
    private password: string;

    constructor(name:string,email:string,password:string, id?:string){
        this.name = name,
        this.email = email,
        this.password = password
        
        if(!id){
           this.id = uuid();
        }
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

    getId():string{
        return this.id;
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