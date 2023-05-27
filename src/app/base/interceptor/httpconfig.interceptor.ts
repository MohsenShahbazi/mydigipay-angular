import {Injectable, isDevMode} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError, TimeoutError} from 'rxjs';
import {map, catchError, timeout} from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  token: string = '';

  constructor() {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiKey = '810cf36f-043c-4268-8567-2cfb6bca003d';
    request = request.clone({headers: request.headers.set('X-CMC_PRO_API_KEY', apiKey)});



    return next.handle(request).pipe(
      timeout(60000),
      catchError((error: HttpErrorResponse) => {
       /* switch (error.status) {
          case 400 : {
            this.commonService.showErrorMessage(this.translate.instant('badRequestMessage').toString(), error.status.toString());
            break;
          }
          case 401 : {
            if (!(error.url.match('logout') || error.url.match('user'))) {
              this.commonService.showErrorMessage(this.translate.instant('unAuthorizeMessage').toString(), error.status.toString());
            }
            //this.authService.logout();
            break;
          }
          case 403 : {
            this.commonService.showErrorMessage(this.translate.instant('forbidenMessage').toString(), error.status.toString());
            break;
          }
          case 404 : {
            if (error.url.match('logout')) {
              console.error('logout');
            } else {
              this.commonService.showErrorMessage(this.translate.instant('notFoundMessage').toString(), error.status.toString());
            }
            break;
          }
          case 500 : {
            this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), error.status.toString());
            this.authService.getUser(true);
            break;
          }
          case 503 : {
            this.commonService.showMessage(this.translate.instant('methodNotAllowedMessage').toString(), error.status.toString());
            break;
          }
          case 555 : {
            this.commonService.showMessage(error.error.message.desc, error.status.toString());
            break;
          }
          case 302 : {
            this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), error.status.toString());
            this.authService.getUser(true);
            break;
          }
          case 0 : {
            if (error.error.message != undefined && error.error.message.invalids != undefined) {
              return throwError(error.error.message.invalids);
            } else {
              if (error.url.match('logout')) {
                console.error('logout');
              } else {
                this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), null);
                this.authService.getUser(true);
              }
            }
            break;
          }
          default : {
            let timeoutError: TimeoutError = error;
            if (timeoutError.name == 'TimeoutError') {
              this.commonService.showMessage('پاسخی از سمت سرور دریافت نشد', null);
            } else if (error.url.match('logout')) {
              console.error('logout');
            } else {
              this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), error.status.toString());
            }
            break;
          }
        }*/
        return throwError(error);
      }));
  }
}
