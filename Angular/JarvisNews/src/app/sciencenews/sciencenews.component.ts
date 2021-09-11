import { Component, OnInit } from "@angular/core";
import { NewsapiService } from "../service/newsapi.service";

@Component({
  selector: "app-sciencenews",
  templateUrl: "./sciencenews.component.html",
  styleUrls: ["./sciencenews.component.css"],
})
export class SciencenewsComponent implements OnInit {
  scienceNewsData: any = [];

  constructor(private api: NewsapiService) {}

  ngOnInit() {
    this.api.busnews().subscribe(
      (res) => {
        console.log(res.articles);
        this.scienceNewsData = res.articles;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
