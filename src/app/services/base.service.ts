import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'https://pro-api.coinmarketcap.com/v1/';

  rout: string = '';

  add(model: any): any {
    return this.http.post(this.baseUrl + this.rout + 'add', model, {});
  }

  update(model: any) {
    return this.http.post(this.baseUrl + this.rout + 'update', model, {});
  }

  delete(id: number) {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.delete(this.baseUrl + this.rout + 'delete', {params: params});
  }

  get(id: number): any {
    let params = new HttpParams().set('id', id);
    return this.http.get(this.baseUrl + this.rout + 'get', {params: params});
  }


  //for internall pagination
  getAll(sortValue: string = '', sortDir: boolean = true) {
    let params = new HttpParams();
    if (sortValue != '') {
      params = params.set('sort', sortValue);
    }
    params = sortDir ? params.set('sort_dir', 'asc') : params.set('sort_dir', 'desc');

    return this.http.get(this.baseUrl + this.rout + 'listings/latest', {params: params});
  }

  //for external pagination
  getList(start: number, limit: number, sortValue: string = '', sortDir: boolean = true) {
    let params = new HttpParams();
    params = params.set('start', start);
    params = params.set('limit', limit);
    if (sortValue != '') {
      params = params.set('sort', sortValue);
    }
    params = sortDir ? params.set('sort_dir', 'asc') : params.set('sort_dir', 'desc');
    return this.http.get(this.baseUrl + this.rout + `listings/latest`, {params: params});
  }


}
