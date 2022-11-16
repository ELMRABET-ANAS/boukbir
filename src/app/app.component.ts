import { Component } from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userApp';
  familyName:any;
  firstName:any;
  users:User[]=[];

  save() {
    if (!this.familyName || !this.firstName)
      return alert("Veuillez remplir tous les champs !")
    else if (this.users.length >= 5)
      return alert("Vous ne pouvez pas ajouter un utilisateur !")

      let user = new User()
      user.firstName = this.firstName
      user.lastName = this.familyName
      this.users.push(user)
  }

  deleteUser(id:number) {
      this.users.splice(id, 1);
  }
}
