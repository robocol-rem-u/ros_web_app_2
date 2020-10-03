import { Component } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent {
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-measurements',
//   templateUrl: './measurements.component.html',
//   styleUrls: ['./measurements.component.css']
// })
// export class MeasurementsComponent implements OnInit
// {
//   public chartType: string = 'line';
//
//   constructor() { }
//
//   ngOnInit() {
//     public chartDatasets: Array<any> = [
//       { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
//       { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
//     ];
//
//     public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//
//     public chartColors: Array<any> =
//     [
//       {
//         backgroundColor: 'rgba(105, 0, 132, .2)',
//         borderColor: 'rgba(200, 99, 132, .7)',
//         borderWidth: 2,
//       },
//       {
//         backgroundColor: 'rgba(0, 137, 132, .2)',
//         borderColor: 'rgba(0, 10, 130, .7)',
//         borderWidth: 2,
//       }
//     ];
//
//     public chartOptions: any = {responsive: true};
//     public chartClicked(e: any): void { }
//     public chartHovered(e: any): void { }
//   }
// }
// export class MeasurementsComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit()
//   {
//   }
//
// }
