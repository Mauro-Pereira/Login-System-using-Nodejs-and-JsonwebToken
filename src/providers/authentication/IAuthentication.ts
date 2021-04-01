
export interface IAuthentication{

    GenerateToken(params:{}): any;
    userAuthentication(user: any): any;
}