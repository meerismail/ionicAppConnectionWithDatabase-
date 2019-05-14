import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataProvider {
	user:any [];
	private url:string = 'http://localhost:3300/api/v1/admin/';
  constructor(public  http: Http){
  }
	callPostApi(object)
	{
		return this.http.post(this.url+object.path ,object)
		.map(this.extractData)
		.do(this.logResponse)
		.catch(this.catchError)
	}
	callPutApi(object)
	{
		return this.http.put(this.url+object.path ,object)
		.map(this.extractData)
		.do(this.logResponse)
		.catch(this.catchError)
	}
	callGetApi(object)
	{
		return this.http.get(this.url+object.path ,object)
		.map(this.extractData)
		.do(this.logResponse)
		.catch(this.catchError)
	} 
	private catchError(error: Response | any){
		console.log(error);
		return Observable.throw(error.json().error || "Server error.");
	}

	private logResponse(res: Response){
		console.log(res);
	}

	private extractData(res: Response){
		return res.json();
	}
}
