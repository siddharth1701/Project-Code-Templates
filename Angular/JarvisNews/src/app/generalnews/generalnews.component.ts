import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-generalnews",
  templateUrl: "./generalnews.component.html",
  styleUrls: ["./generalnews.component.css"],
})
export class GeneralnewsComponent implements OnInit {
  generalNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.busnews().subscribe(
      (res) => {
        console.log(res.articles);
        this.generalNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
