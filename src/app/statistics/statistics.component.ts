import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ApexTooltip, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  selectedMonth: string = 'January';
  selectedDepartment: string = 'IT';

  public chartOptions: any;

  peopleData = [
    { name: 'สมชาย ใจดี', department: 'IT', sickLeave: 2, annualLeave: 1, specialLeave: 0, totalLeave: 3 },
    { name: 'สมหญิง รักษางาน', department: 'HR', sickLeave: 1, annualLeave: 2, specialLeave: 1, totalLeave: 4 }
  ];
  

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "ลาป่วย",
          data: [45, 0, 0],
          color: '#36A2EB'
        },
        {
          name: "ลาพักร้อน",
          data: [0, 30, 0],
          color: '#FFCD56'
        },
        {
          name: "ลากิจ",
          data: [0, 0, 25],
          color: '#FF6384'
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'สถิติการลา',
        align: 'center'
      },
      xaxis: {
        categories: ['ลาป่วย','ลาพักร้อน','ลากิจ'],
        title: {
          text: 'ประเภทการลา'
        }
      },
      yaxis: {
        title: {
          text: 'จำนวนวัน'
        }
      },
      legend: {
        position: 'top'
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    };
  }
}
