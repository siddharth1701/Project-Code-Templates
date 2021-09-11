import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-busnews",
  templateUrl: "./busnews.component.html",
  styleUrls: ["./busnews.component.css"],
})
export class BusnewsComponent implements OnInit {
  busNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.busnews().subscribe(
      (res) => {
        console.log(res.articles);
        this.busNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
