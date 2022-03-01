import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
	@Input() pageCount: number = -1;	
  @Output() onPageSelected: EventEmitter<number> = new EventEmitter();
	pages: number[] = [];
  activePage: number = 1;

  	constructor() { }

  	ngOnInit() {
    }

    ngOnChanges(): void {
      this.pages = [];
      for (let it = 1; it <= this.pageCount; it++){
  			this.pages.push(it);
  		}
    }

    pageSelected(newPage :number){
      this.activePage = newPage;
      this.onPageSelected.emit(this.activePage);
      console.log("Active page set to: ", this.activePage);  
    }
}
