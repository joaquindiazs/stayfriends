import { Injectable } from "@angular/core";
import { BundeslandModel } from "libs/models/bundesland.model";

@Injectable()
export class HelperService {
  constructor() {}

  getBundesland(): BundeslandModel {
    return JSON.parse(
      JSON.stringify(require("../../src/assets/bundesland.json"))
    );
  }
}
