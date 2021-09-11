import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-topheadline",
  templateUrl: "./topheadline.component.html",
  styleUrls: ["./topheadline.component.css"],
})
export class TopheadlineComponent implements OnInit {
  constructor(private api: NewsapiService) {}

  topHeadlinesData: any = []; // display headlines data

  ngOnInit() {
    this.api.topheadlines().subscribe(
      (res) => {
        console.log(res.articles);
        this.topHeadlinesData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
