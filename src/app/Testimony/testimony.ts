import { Component, Input, SimpleChange } from "@angular/core";
import { Testinmony } from "../Models/Testimony";

@Component({
  selector: "app-testimony",
  templateUrl: "./testimony.component.html",
  styleUrls: ["./testimony.scss"]
})
export class AppTestimony {
  title = "CodeSandbox";
  @Input() current: Testinmony;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    console.log("changes testimony", changes);
  }
}
