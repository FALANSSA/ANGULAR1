import { Component } from '@angular/core';
import { UserRegister } from 'src/app/domains/users/models/user.model';
import { UserService } from 'src/app/domains/users/services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  asideIndex: number = 1;
  users: UserRegister[] = this.userService.users;
  selectedUser: UserRegister | null = null;
  selectedTableRow: any = null;

  constructor(private userService: UserService) {}

  onAddUserBtn() {
    this.asideIndex = 1;
    this.selectedUser = null;
    this.selectedTableRow = null;
  }

  onUserSelect(user: any) {
    this.asideIndex = 2;
    this.selectedUser = user;
    this.selectedTableRow = user;
  }

  updateUser(updatedUser: UserRegister) {
    const index = this.users.findIndex(user => user.userId === updatedUser.userId);
    if (index !== -1) {
      this.users[index] = updatedUser;
      if (this.selectedTableRow && this.selectedTableRow.userId === updatedUser.userId) {
        this.selectedTableRow = updatedUser;
      }
    }
  }
}
