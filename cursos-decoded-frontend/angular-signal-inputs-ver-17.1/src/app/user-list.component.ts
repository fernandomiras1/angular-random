import {
  Component,
  Input,
  computed,
  signal,
  input,
  effect,
} from '@angular/core';
import { User, ModifiedUser } from './models';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <input (input)="updateQuery($event)" placeholder="Start typing..." />
    <ul>
      @for (user of filteredUsers(); track user.id) {
      <li>{{ user.displayName }}</li>
      }
    </ul>
  `,
})
export class UserListComponent {
  // @Input() users: User[] = [];

  usersList = input.required<ModifiedUser[], User[]>({
    alias: 'users',
    transform: concatUserNames,
  });

  constructor() {
    // ngOnChanges => Se cambia por effect con Signal.
    effect(() => {
      console.log(
        '%c New input value is:',
        'background: #222; color: #bada55',
        this.usersList()
      );
    });
  }

  protected filteredUsers = computed(() =>
    this.usersList().filter(({ displayName }) =>
      displayName.startsWith(this.query())
    )
  );

  private query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }
}

function concatUserNames(users: User[]): ModifiedUser[] {
  return users.map(({ name, lastName, ...user }) => ({
    ...user,
    displayName: `${name} ${lastName}`,
  }));
}
