import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  url = 'http://localhost:8080/worker';

  constructor(private http: HttpClient) {}
  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.url);
  }
  addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.url, worker);
  }
  updateWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(this.url, worker);
  }
  deleteWorker(id: number): Observable<Worker> {
    return this.http.delete<Worker>(`${this.url}/${id}`);
  }
  getWorker(name: string): Observable<Worker> {
    return this.http.get<Worker>(`${this.url}/name/${name}`);
  }
  getWorkerByRole(role: string): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.url}/role/${role}`);
  }
  deleteWorkerbyName(name: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/name/${name}`);
  }


}
