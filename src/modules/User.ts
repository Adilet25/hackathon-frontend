import axios from "axios";

export class User{
    private id!: number;
    private username!: string;

    
    private setId(id : number) {
        this.id = id;
    }
    private setUsername(username : string) {
        this.username = username;
    }
    public getId() {
        return this.id;
    }
    public getUsername() {
        return this.username;
    }

    public fetchUser(key:number){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            
            const newUser = res.data[key]; 
            this.setId(newUser.id);
            this.setUsername(newUser.username);
            console.log(newUser);
            
            
        })
        .catch(e=>console.error(e, key))
        .finally(()=>console.log("succes"))
    }
    
}