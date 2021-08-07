
import { Component, HostListener } from "@angular/core";
import { UsersService } from './users.service';
import { TheoryService } from './theory.service';
@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(public user: UsersService, public theory: TheoryService) {}

  @HostListener('window:click')
  clicked() {
    console.log('Click');
  }


  getTheory(userId: number) {
    console.log("🚀 ~ file: app.component.ts ~ line 15 ~ AppComponent ~ getTheory ~ userId", userId)
    return this.theory.getTheory(userId)
  }
}
