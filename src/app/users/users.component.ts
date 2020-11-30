import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { User } from "../interfaces/user";
import { UserService } from "./user.service";



@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  title = "users";
  users: User[] = [];
  @Output() updateUser = new EventEmitter<User>();
  constructor(private service: UserService) {
    
  }

  ngOnInit() {
    this.users = this.service.getUsers();
    
  }

  onDeleteUser(user){
    this.service.deleteUser(user);
  }

  onSelectUser(user: User){
     this.updateUser.emit(user);
  }

  

}
