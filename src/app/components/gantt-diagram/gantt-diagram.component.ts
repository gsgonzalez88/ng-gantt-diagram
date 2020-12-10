import { AfterViewInit, Component, ElementRef, } from '@angular/core';
import * as Gantt from '../../../../node_modules/frappe-gantt/src/index';


@Component({
  selector: 'app-gantt-diagram',
  templateUrl: './gantt-diagram.component.html',
  styleUrls: ['./gantt-diagram.component.css']
})

export class GanttDiagramComponent implements AfterViewInit {
  tasks = [{
    id: 'Task 1',
    name: 'Redesign website',
    start: '2020-12-01',
    end: '2020-12-04',
    progress: 100,
    dependencies: '',
  },
  {
    id: 'Task 2',
    name: 'Version upgrade',
    start: '2020-12-07',
    end: '2020-12-11',
    progress: 75,
    dependencies: 'Task 1',
  },
  {
    id: 'Task 3',
    name: 'Translate texts',
    start: '2020-12-04',
    end: '2020-12-10',
    progress: 50,
    dependencies: '',
  },
  {
    id: 'Task 4',
    name: 'Auth0 integration',
    start: '2020-12-12',
    end: '2020-12-18',
    progress: 0,
    dependencies: 'Task 2',
  },
  {
    id: 'Task 5',
    name: 'Bug Fixing',
    start: '2020-12-14',
    end: '2020-12-23',
    progress: 0,
    dependencies: 'Task 4',
  },
  {
    id: 'Task 6',
    name: 'Deployment',
    start: '2021-01-04',
    end: '2021-01-05',
    progress: 0,
    dependencies: 'Task 5',
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
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: [...Object.values(this.VIEW_MODE)],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Week',
    date_format: 'YYYY-MM-DD',
    popup_trigger: 'click',
    custom_popup_html: null,
    language: 'en'
}

  constructor() {}

  ngAfterViewInit(): void {
    this.gantt = new Gantt.default('#gantt', this.tasks, this.op);
  }


  }

