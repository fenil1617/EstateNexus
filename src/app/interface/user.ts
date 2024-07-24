export interface User {
    id: number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    token?:string;
}

export  const users = [
    {
        id:1,
        firstname:'test',
        lastname:'test',
        email:'test@gmail.com',
        password:'12345',
        token:'test',
    }
]
