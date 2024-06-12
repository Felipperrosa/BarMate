import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  constructor(private http: HttpClient) { }

  getCocktailsByLetter(letter: string): Observable<any> {
    const url = `${this.apiUrl}?f=${letter}`;
    return this.http.get(url);
  }
}
