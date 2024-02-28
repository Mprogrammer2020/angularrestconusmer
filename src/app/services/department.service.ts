import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../components/models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseURL="http://localhost:8080"
  
  constructor(private http:HttpClient) { }

  public add(department):Observable<Department> {
    return this.http.post<Department>(`${environment.endpoint.concat(this.baseURL)}/department`,department);
  }

  public delete(id:number):Observable<any> {
    return this.http.delete<Department>(`${environment.endpoint.concat(this.baseURL)}/department/${id}`);
  }

  public get(id:number):Observable<Department> {
    return this.http.get<Department>(`${environment.endpoint.concat(this.baseURL)}/department/${id}`);
  }

  public getAll():Observable<Department[]> {
    return this.http.get<Department[]>(`${environment.endpoint.concat(this.baseURL)}/department`);
  }
}
