import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _chartData = new BehaviorSubject<any[]>([]);
  public chartData$ = this._chartData.asObservable();

  constructor(private http: HttpClient) {}

  fetchChartData() {
    this.http.get<any[]>('https://your-backend-api.com/data')
      .pipe(
        tap(data => this._chartData.next(data))
      )
      .subscribe();
  }
}
