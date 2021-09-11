import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-entertainmentnews",
  templateUrl: "./entertainmentnews.component.html",
  styleUrls: ["./entertainmentnews.component.css"],
})
export class EntertainmentnewsComponent implements OnInit {
  entertainmentNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.busnews().subscribe(
      (res) => {
        console.log(res.articles);
        this.entertainmentNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
