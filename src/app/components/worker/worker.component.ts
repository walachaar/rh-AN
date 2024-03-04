import { Component, Input, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { HttpClientModule } from '@angular/common/http';
import { Worker } from '../../models/worker.model';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {
delete() {
    this.workerService.deleteWorkerbyName(this.worker.name).subscribe(() => {
      
    });
}
constructor(private workerService: WorkerService) { }
  
  @Input() worker!: Worker ;
    
  
 

  


}
