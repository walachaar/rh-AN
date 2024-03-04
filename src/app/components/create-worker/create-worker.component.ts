import { Component } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { WorkerService } from '../../services/worker.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-worker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-worker.component.html',
  styleUrl: './create-worker.component.css'
})
export class CreateWorkerComponent {
  workerInput: Worker = new Worker('', '', '', '', '');
  constructor(private workerService:WorkerService) {}
  handleSubmit(event: Event) {
    event.preventDefault();
    this.workerService.addWorker(this.workerInput).subscribe(() => {
    });
    this.workerInput = new Worker('', '', '', '', '');
  }


}
