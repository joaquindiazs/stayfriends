import { Component, OnInit } from "@angular/core";
import { BundeslandModel } from "libs/models/bundesland.model";
import { HelperService } from "libs/services/helper.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  public bundesland?: BundeslandModel;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.bundesland = this.helperService.getBundesland();
  }
}
