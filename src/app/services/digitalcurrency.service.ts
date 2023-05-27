import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class DigitalCurrencyService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.rout = 'cryptocurrency/';
  }
}
