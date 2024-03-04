import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { Worker } from '../../models/worker.model';
import { NgFor } from '@angular/common';
import { WorkerComponent } from '../worker/worker.component';
import { CreateWorkerComponent } from '../create-worker/create-worker.component';

@Component({
  selector: 'app-worker-page',
  standalone: true,
  imports: [NgFor, WorkerComponent, CreateWorkerComponent],
  templateUrl: './worker-page.component.html',
  styleUrl: './worker-page.component.css'
})
export class WorkerPageComponent implements OnInit{
  workers: Worker[] = [];
  constructor(private workerService: WorkerService) { 

  }
  ngOnInit(): void {
    this.workerService.getWorkers().subscribe((workers: Worker[]) => {
      this.workers = workers;
    });
  }

}
