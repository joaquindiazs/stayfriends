import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxsModule } from "@ngxs/store";
import { HelperService } from "libs/services/helper.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxsModule.forRoot([])],
  providers: [HelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
