import { Component } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http'; // inestance
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any;
  usersPost: any;
  constructor(private http: HttpClient /*inechalize*/) {}

  ngOnInit() {
    // var headers = new HttpHeaders({ myTestKey: 'myTestValue' }); //1
    var headers = { myTestKey: 'myTestValue' }; //2

    let myParams = new HttpParams().set('myId', 1);
    myParams = myParams.append('myUser', 'any');

    const options = {
      headers: { myTestKey: 'myTestValue', token: 'myToken' },
      params: myParams,
    };
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/todos')
    //   .toPromise()
    //   .then((result) => {
    //     this.users = result;
    //   })
    //   .catch((e: HttpErrorResponse) => {
    //     console.log('error', e);
    //   });

    this.http
      .get('https://jsonplaceholder.typicode.com/todos', options)
      .subscribe(
        (result: any) => {
          this.users = result;
        },
        (error: HttpErrorResponse) => {
          console.log('error', error);
        }
      );

    this.post();
  }

  post() {
    var url = 'https://jsonplaceholder.typicode.com/posts';
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    this.http.post(url, body).subscribe(
      (result: any) => {
        this.usersPost = result;
        console.log(this.usersPost);
      },
      (error: HttpErrorResponse) => {
        console.log('error', error);
      }
    );
  }
}
