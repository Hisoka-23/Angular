import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procut } from './procut';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class ProductServiceService {

  private url: any='../assets/db.json';

  constructor(private http:HttpClient) { 
    console.log('--inside the ProductService--');
    console.log('--inside the Product Service constructor--'+this.http);
    console.log("-->"+typeof(this.http.get(this.url)));
  }

  greetingMessage():string{
    return 'From Product-Service';
  }

  getData():Observable<Procut[]>{
    return this.http.get<Procut[]>(this.url);
  }
  
}
