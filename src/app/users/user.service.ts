import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";

@Injectable()
export class UserService{

  users: User[] = [
    {
      nome: "Luca",
      cognome: "Rossi"
    },

    {
      nome: "Mario",
      cognome: "Rossi"
    },

    {
      nome: "Lucia",
      cognome: "Rossi"
    }
  ];

    constructor(){

  }

  getUsers(){
    return this.users;
  }

  deleteUser(user){
    let index = this.users.indexOf(user);
    if(index>=0)
    this.users.splice(index,1);
  }

}