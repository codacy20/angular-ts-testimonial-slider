import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppCard } from "../app/Card/card";
import { AppImagePanel } from "../app/Image-Panel/image-panel";
import { AppTestimony } from "../app/Testimony/testimony";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AppCard, AppImagePanel, AppTestimony],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
