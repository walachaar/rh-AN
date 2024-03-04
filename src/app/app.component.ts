import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkerComponent } from './components/worker/worker.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkerPageComponent } from './components/worker-page/worker-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkerPageComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
} 