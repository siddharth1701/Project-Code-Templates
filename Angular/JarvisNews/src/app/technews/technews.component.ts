import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-technews",
  templateUrl: "./technews.component.html",
  styleUrls: ["./technews.component.css"],
})
export class TechnewsComponent implements OnInit {
  techNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.technews().subscribe(
      (res) => {
        console.log(res.articles);
        this.techNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
