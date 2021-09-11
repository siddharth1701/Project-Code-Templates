import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-sportsnews",
  templateUrl: "./sportsnews.component.html",
  styleUrls: ["./sportsnews.component.css"],
})
export class SportsnewsComponent implements OnInit {
  sportsNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.busnews().subscribe(
      (res) => {
        console.log(res.articles);
        this.sportsNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
