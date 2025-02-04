import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ChangeDetectionStrategy, computed, signal} from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
@Component({
  selector: 'app-ejemplos-amaterial',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule,
     MatChipsModule, MatProgressBarModule,MatCheckboxModule, FormsModule,
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ejemplos-amaterial.component.html',
  styleUrl: './ejemplos-amaterial.component.css',
  



  
})
export class EjemplosAmaterialComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  
    readonly task = signal<Task>({
      name: 'Parent task',
      completed: false,
      subtasks: [
        {name: 'Child task 1', completed: false},
        {name: 'Child task 2', completed: false},
        {name: 'Child task 3', completed: false},
      ],
    });
  
    readonly partiallyComplete = computed(() => {
      const task = this.task();
      if (!task.subtasks) {
        return false;
      }
      return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
    });
  
    update(completed: boolean, index?: number) {
      this.task.update(task => {
        if (index === undefined) {
          task.completed = completed;
          task.subtasks?.forEach(t => (t.completed = completed));
        } else {
          task.subtasks![index].completed = completed;
          task.completed = task.subtasks?.every(t => t.completed) ?? true;
        }
        return {...task};
      });
    }
  }

