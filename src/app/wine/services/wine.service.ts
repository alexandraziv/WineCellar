import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WineSearchResult } from '../model/wine-search-result.model';

import { Wine } from '../model/wine.model';

const baseURL: string = "http://localhost:3000/api/wines"

@Injectable({
	providedIn: 'root'
})
export class WineService {

	constructor(private http: HttpClient) { }

	getAll(params?: any): Observable<WineSearchResult> {
		let queryParams: any = {};
		if (params){
			queryParams = {params : new HttpParams()
			  .set('sort', params.sort || "")
			  .set('sortDirection', params.sortDirection || "")
			  .set('page', params.page && params.page.toString() || "")
			  .set('pageSize', params.pageSize && params.pageSize.toString() || "")
			  .set('filter', params.filter && JSON.stringify(params.filter) || "")
			}
		}

		return this.http.get(baseURL, queryParams).pipe(map(
			(jsonResponse: any) => { return new WineSearchResult(jsonResponse); }
		));
	}

	get(id: number): Observable<Wine> {
		return this.http.get(baseURL + "/" + id).pipe(map(
			(jsonResponse: any) => { return new Wine(jsonResponse); }
		));
	}

	add(newWine: Wine): Observable<any> {
		return this.http.post(baseURL, newWine);
	}

	update(wine: Wine): Observable<any> {
		return this.http.put(baseURL + "/" + wine._id, wine);
	}

	// server brise vino i vraca response
	//delete , vraca novi niz vina 
	remove(id: number): Observable<any> {
		return this.http.delete(baseURL + "/" + id);
	}

}
