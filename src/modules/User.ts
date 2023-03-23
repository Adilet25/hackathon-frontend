export class User{
    id:number;
    username:string;
    first_name:string;
    last_name:string;
    avatar:string;
    email:string;
    phone:string;
    last_login:string;
    date_join:string;
    is_staff:boolean;
    is_verified:boolean;

    constructor(id:number,
        username:string,
        first_name:string,
        last_name:string,
        avatar:string,
        email:string,
        phone:string,
        last_login:string,
        date_join:string,
        is_staff:boolean,
        is_verified:boolean,){
        this.id=id
        this.username=username
        this.first_name=first_name
        this.last_name=last_name
        this.avatar=avatar
        this.email=email
        this.phone=phone
        this.last_login=last_login
        this.date_join=date_join
        this.is_staff=is_staff
        this.is_verified=is_verified
    }

    // "id": 19,
    // "last_login": "2023-03-21T10:23:44Z",
    // "is_superuser": false,
    // "is_staff": true,
    // "date_joined": "2023-03-21T10:23:37Z",
    // "email": "baitemir1706@gmail.com",
    // "phone": "0999889988",
    // "activation_code": "123",
    // "username": "baitemir",
    // "first_name": "Baitemir",
    // "last_name": "Asanbaev",
    // "avatar": "http://34.142.184.29/media/avatars/lagman.png",
    // "is_active": false,
    // "is_verified": true,  
    
}