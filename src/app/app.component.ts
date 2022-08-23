import { Component, OnInit } from "@angular/core";
import { BundeslandModel } from "libs/models/bundesland.model";
import { HelperService } from "libs/services/helper.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public bundesland?: BundeslandModel;
  public iterablePersonIndexes: { name: string; count: number }[] = [];

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.bundesland = this.helperService.getBundesland();

    this.iterablePersonIndexes = Object.keys(
      this.bundesland.personIndexCounts
    ).map((key) => ({
      name: key,
      count: this.bundesland?.personIndexCounts[key],
    }));
  }
}
