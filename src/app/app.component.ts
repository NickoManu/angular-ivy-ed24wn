import { Component, VERSION } from '@angular/core';
import { User } from './interfaces/user';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  userSelected : User;
  updateUser(user: User){
      this.userSelected=user;
  }
 
} 
  