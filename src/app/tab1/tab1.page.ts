import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const MAIN_URL = 'https://api.coingecko.com/api/v3/coins';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
result: any =[];
eresult: any =[];
dresult: any =[];
  constructor(public http: HttpClient) {}



coinInfo(result){

this.http.get('https://api.coingecko.com/api/v3/coins/bitcoin').subscribe(res => {
  this.result.push(res);
  console.log(this.result);
  [res].forEach(element => {
    console.log(element);
  });
});

return this.result;
};

coinDist(eresult){
this.http.get('https://api.coingecko.com/api/v3/coins/ethereum').subscribe(res => {
  this.eresult.push(res);
  console.log(this.eresult);
});
return this.eresult;
}

coinFinal(dresult){
this.http.get('https://api.coingecko.com/api/v3/coins/dogecoin').subscribe(res => {
  this.dresult.push(res);
  console.log(this.dresult);
});
return this.dresult;
}

}
