import { Component } from '@angular/core';
import {todo} from "../model/todo"
import { CalculServiceService } from '../calcul-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  listTodo : todo[] = [
    {"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
    {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": true},
    {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
    {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}
  ];

  constructor(private calculService: CalculServiceService) {}

  numberOfItems : number = this.calculService.getNumberOf(this.listTodo, "completed", true);

  bilan: string = 'Cliquez sur le bouton "Bilan" pour afficher le bilan.';

  afficherBilan(): void {
    this.bilan = `Nombre de tâches terminées : ${this.numberOfItems} / ${this.listTodo.length}`;
  }
}
