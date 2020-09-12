import { Component, Input, SimpleChange } from "@angular/core";
import { Testinmony } from "../Models/Testimony";

@Component({
  selector: "app-image-panel",
  templateUrl: "./image-panel.component.html",
  styleUrls: ["./image-panel.scss"]
})
export class AppImagePanel {
  title = "CodeSandbox";
  @Input() current: Testinmony;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    console.log("changes panel", changes);
  }
}
