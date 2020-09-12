import { Component } from "@angular/core";
import { TestimonyService } from "../../app/testimony.service";
import { Testinmony } from "../Models/Testimony";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.scss"]
})
export class AppCard {
  title = "CodeSandbox";
  data: Testinmony[] = [];
  constructor(private testimonyService: TestimonyService) {
    this.testimonyService.getTestimony().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
