import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import * as Gantt from '../../node_modules/frappe-gantt/src/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  tasks = [{
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-12-01',
    end: '2020-12-05',
    progress: 20,
    dependencies: '',
  },
  {
    id: 'Task 2',
    name: 'Redesign website',
    start: '2020-12-05',
    end: '2020-12-08',
    progress: 10,
    dependencies: 'Task 1',
  },
  {
    id: 'Task 3',
    name: 'Redesign website',
    start: '2020-12-07',
    end: '2020-12-10',
    progress: 15,
    dependencies: 'Task 2',
  },
  {
    id: 'Task 4',
    name: 'Redesign website',
    start: '2021-01-02',
    end: '2021-01-05',
    progress: 25,
    dependencies: 'Task 3',
  }];
  gantt;

  VIEW_MODE = {
    QUARTER_DAY: 'Quarter Day',
    HALF_DAY: 'Half Day',
    DAY: 'Day',
    WEEK: 'Week',
    MONTH: 'Month',
    YEAR: 'Year'
  };

  op = {
    header_height: 80,
    column_width: 30,
    step: 24,
    view_modes: [...Object.values(this.VIEW_MODE)],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',
    date_format: 'YYYY-MM-DD',
    popup_trigger: 'click',
    custom_popup_html: null,
    language: 'en'
}

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.gantt = new Gantt.default('#gantt', this.tasks);
  }


  }

