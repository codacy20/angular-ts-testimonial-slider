import { Component } from "@angular/core";
import { TestimonyService } from "../../app/testimony.service";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.scss"]
})
export class AppCard {
  title = "CodeSandbox";
  constructor(testimonyService: TestimonyService) {}
}
