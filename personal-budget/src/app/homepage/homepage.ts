import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Chart} from 'chart.js';

@Component({
  selector: 'pb-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

  public dataSource = {
                datasets: [
                    {
                        data: [] as number[],
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                        ]
                    }
                ],
                labels: [] as string[]
  };

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
      .subscribe((res: any) => {
        debugger;
        console.log(res);
        for (var i = 0; i < res.data.myBudget.length; i++) {
                    this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                    this.dataSource.labels[i] = res.data.myBudget[i].title;
                    this.createChart();
            }

      });
    }

    createChart() {
            var ctx = document.getElementById('myChart').getContext('2d');
            var myPieChart = new Chart(ctx, {
                type: 'pie',
                data: this.dataSource
            });
        }


}
