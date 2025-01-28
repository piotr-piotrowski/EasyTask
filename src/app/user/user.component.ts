import { Component, Input, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) id!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  @Output() select = new EventEmitter();

  imagePath = (() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
