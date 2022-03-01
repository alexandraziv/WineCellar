import { Component, OnInit } from '@angular/core';
import { WineSearchResult } from '../model/wine-search-result.model';
import { Wine } from '../model/wine.model';
import { WineService } from '../services/wine.service';

const PAGE_SIZE: number = 5;

@Component({
  selector: 'wc-wine-list',
  templateUrl: 'wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wineList: Wine[] = [];
  count: number = -1;


  // to se prosledjuje serveru 
  params: any = {
    sort: "",
    sortDirection: "",
    page: 1,
    pageSize: PAGE_SIZE,
    filter: {
      name: ""
    }
  }
  pageCount: number = -1;

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.wineService.getAll(this.params).subscribe({
      next: (response: WineSearchResult) => {
        console.log(response);
        this.wineList = response.results;
        this.count = response.count;
        this.pageCount = Math.ceil(this.count/PAGE_SIZE);
      } 
    });
  }

  onSearch(searchText: string): void {
    this.params.filter.name = searchText;
    this.ngOnInit();
  }

  changePage(newPage: number): void {
    console.log("[WineListComponent] New pagination page: ", newPage);
    this.params.page = newPage;
    this.ngOnInit();
  }

  onSortCriteriaChanged(criteria: string): void {
    if (this.params.sort == criteria) {
      this.params.sortDirection = (this.params.sortDirection == "asc")? "desc": "asc";
    } else {
      this.params.sort = criteria;
      this.params.sortDirection = "asc";
    }
    this.ngOnInit();
  }

  onWineDeleted(id: number): void {
    //asinhrono programiranje, momenat racvanja. 
    this.wineService.remove(id).subscribe({
      // novi podaci bez jednog vina
      next: (response: WineSearchResult) => {
        //ponovo ucitava tabelu , bez jednog vina
        console.log(WineSearchResult);
        
        this.ngOnInit();
      } 
    });
  }

}
