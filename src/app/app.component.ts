import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-amaterial';
}

@Component({
  selector: 'app-ejemplos-amaterial',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './ejemplos-amaterial.component.html',
  styleUrl: './ejemplos-amaterial.component.css'
})
export class EjemplosAmaterialComponent {
}
