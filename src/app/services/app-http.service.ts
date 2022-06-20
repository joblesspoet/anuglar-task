import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppHttpService implements HttpInterceptor {
  static BASE_URL: string = 'http://abc.com/api/update';

  constructor(
    protected readonly http: HttpClient
  ) { }

  intercept(request: any, next: HttpHandler): Observable<HttpEvent<any>> {
   
    if (request.method == 'PUT') {
      return of(new HttpResponse({ status: 204, body: { success: 1 } }));
    } else if (request.method == 'DELETE' || request.method == 'POST') {
      return of(new HttpResponse({ status: 200, body: {message: 'success'} }));
    }
    return next.handle(request)
  }

  post(data?: any): Observable<any> {
    return this.http.post<any>(AppHttpService.BASE_URL, data);
  }

  update(data?: any): Observable<any> {
    return this.http.put<any>(AppHttpService.BASE_URL, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<void>(AppHttpService.BASE_URL);
  }

}
