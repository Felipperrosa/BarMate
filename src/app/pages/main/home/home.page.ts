import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cocktails: any[] = [];
  allCocktails: any[] = [];
  searchQuery: string = '';
  currentLetter: string = 'a';
  showFilters: boolean = false;
  showPropagandaCard = false;

  constructor(private http: HttpClient, private router: Router) {}

  

  ngOnInit() {
    this.loadCocktails();
    this.checkDayOfWeek();
  }

  loadCocktails(event?: any) {
    this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.currentLetter}`)
      .subscribe(res => {
        if (res.drinks) {
          this.allCocktails = [...this.allCocktails, ...res.drinks];
          this.cocktails = [...this.allCocktails];
        }
        if (event) {
          event.target.complete();
        }
        this.updateCurrentLetter();
      });
  }

  updateCurrentLetter() {
    if (this.currentLetter === 'z') {
      this.currentLetter = 'a';
    } else {
      this.currentLetter = String.fromCharCode(this.currentLetter.charCodeAt(0) + 1);
    }
  }

  search(event: any) {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue.trim() === '') {
      this.cocktails = [...this.allCocktails];
    } else {
      this.cocktails = this.allCocktails.filter(cocktail => {
        return cocktail.strDrink.toLowerCase().includes(searchValue);
      });
    }
  }

  filterByAlcoholic(event: any) {
    const value = event.detail.value;
    this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${value}`)
      .subscribe(res => {
        this.cocktails = res.drinks || [];
      });
  }

  filterByCategory(event: any) {
    const value = event.detail.value;
    this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`)
      .subscribe(res => {
        this.cocktails = res.drinks || [];
      });
  }

  filterByGlass(event: any) {
    const value = event.detail.value;
    this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${value}`)
      .subscribe(res => {
        this.cocktails = res.drinks || [];
      });
  }

  checkDayOfWeek() {
    const today = new Date().getDay();
    if (today === 1 || today === 5) {
      this.showPropagandaCard = true;
    }
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  scrollToTop() {
    document.querySelector('ion-content')?.scrollToTop(500);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  resetFilters() {
    this.cocktails = [...this.allCocktails];
    this.showFilters = false;
  }
}
