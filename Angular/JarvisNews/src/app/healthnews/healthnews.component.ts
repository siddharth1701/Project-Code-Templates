import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-healthnews",
  templateUrl: "./healthnews.component.html",
  styleUrls: ["./healthnews.component.css"],
})
export class HealthnewsComponent implements OnInit {
  healthNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.technews().subscribe(
      (res) => {
        console.log(res.articles);
        this.healthNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
