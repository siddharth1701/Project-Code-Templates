import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsapiService {
  API_KEY = "7254fbe49ef64a42ba040515200bf7fa";
  countryCode = "in";
  // Possible options for country:   Note: you can't mix this param with the  sources  param.
  //   ae  ar  at  au  be  bg  br  ca  ch  cn  co  cu  cz  de  eg  fr  gb  gr  hk  hu  id  ie  il  in  it  jp  kr  lt  lv  ma  mx  my  ng  nl  no  nz  ph  pl  pt  ro  rs  ru  sa  se  sg  si  sk  th  tr  tw  ua  us  ve  za .

  category = "technology";
  category_business = "business";
  // Possible options: business entertainment general health science sports technology. Note: you can't mix this param with the sources param.

  constructor(private http: HttpClient) {}

  // topheadlines API URL
  // topHeadlinesNews='https://newsapi.org/v2/everything?q=tesla&from=2021-09-10&sortBy=publishedAt&apiKey=7254fbe49ef64a42ba040515200bf7fa'
  topHeadlinesNewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&apiKey=${this.API_KEY}`;

  topheadlines(): Observable<any> {
    return this.http.get(this.topHeadlinesNewsUrl);
  }

  // Top technology headlines API URL
  technewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=${this.category}&apiKey=${this.API_KEY}`;
  technews(): Observable<any> {
    return this.http.get(this.technewsUrl);
  }

  // Top business headlines API URL
  busnewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=${this.category_business}&apiKey=${this.API_KEY}`;
  busnews(): Observable<any> {
    return this.http.get(this.busnewsUrl);
  }

  // Top entertainment headlines API URL
  entertainmentnewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=entertainment&apiKey=${this.API_KEY}`;
  entnews(): Observable<any> {
    return this.http.get(this.entertainmentnewsUrl);
  }

  // Top general headlines API URL
  generalnewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=general&apiKey=${this.API_KEY}`;
  generalnews(): Observable<any> {
    return this.http.get(this.generalnewsUrl);
  }

  // Top health headlines API URL
  healthnewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=health&apiKey=${this.API_KEY}`;
  healthnews(): Observable<any> {
    return this.http.get(this.healthnewsUrl);
  }

  // Top science headlines API URL
  sciencenewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=science&apiKey=${this.API_KEY}`;
  sciencenews(): Observable<any> {
    return this.http.get(this.sciencenewsUrl);
  }

  // Top sports headlines API URL
  sportsnewsUrl = `https://newsapi.org/v2/top-headlines?country=${this.countryCode}&category=sports&apiKey=${this.API_KEY}`;
  sportsnews(): Observable<any> {
    return this.http.get(this.sportsnewsUrl);
  }
}
