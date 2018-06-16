import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WikiaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApisProvider {
  wikia = 'https://starwars.wikia.com/api/v1/';
  swapi = 'https://swapi.co/api/';
  headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  // static get parameters() {
  //     return [[Http]];
  // }

  constructor(private http: Http) {
  }

  searchWiki(search_param) {
    // var url = `${this.wikia}Articles/Details/?ids=1&abstract=100&width=200&height=200`;
    // var url = `${this.wikia}Search/List/?query=${search_param}&limit=1&namespaces=0%2C14`
    var url = `${this.wikia}Search/List?query=${search_param}&limit=1&minArticleQuality=10&batch=1&namespaces=0%2C14`;
    // var url = `${this.wikia}Search/List?query=${search_param}`;
    // var url = `http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix"`
    // var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(search_param) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    var response = this.http.get(url,this.options)
      .map(res => res.json());
    return response;


  }
  getPeople(pageCount) {
    var url = `${this.swapi}people/?page=${pageCount}`;
    var response = this.http.get(url,this.options).map(res => res.json());
    return response;
  }

  getShips(pageCount) {
    var url = `${this.swapi}starships/?page=${pageCount}`;
    var response = this.http.get(url,this.options).map(res => res.json());
    return response;
  }

  getImages(id) {
    // console.log(id);
    var url = `${this.wikia}Articles/Details/?ids=${id}&abstract=100&width=200&height=200`;
    var response = this.http.get(url,this.options).map(res => res.json());
    return response;
  }

}