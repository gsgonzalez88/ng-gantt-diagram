import { ThemeService } from "ng2-charts";
import { TasksService } from "./../../services/tasks.service";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as Gantt from "../../../../node_modules/frappe-gantt/src/index";

@Component({
  selector: "app-gantt-diagram",
  templateUrl: "./gantt-diagram.component.html",
  styleUrls: ["./gantt-diagram.component.css"],
})
export class GanttDiagramComponent implements AfterViewInit, OnInit {
  task: any;

  VIEW_MODE = {
    QUARTER_DAY: "Quarter Day",
    HALF_DAY: "Half Day",
    DAY: "Day",
    WEEK: "Week",
    MONTH: "Month",
    YEAR: "Year",
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
    view_mode: "Week",
    date_format: "YYYY-MM-DD",
    popup_trigger: "click",
    custom_popup_html: null,
    language: "en",
  };

  constructor(private tasks: TasksService) {}

  ngOnInit(): void {
    this.task = this.tasks.getTasks();
  }

  ngAfterViewInit(): void {
    new Gantt.default("#gantt", this.task, this.op);
  }
}
