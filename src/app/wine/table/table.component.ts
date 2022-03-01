import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() wines: Wine[] = [];
  @Output() wineDeleted: EventEmitter<number> = new EventEmitter();
  @Output() sortCriteriaChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    console.log("Deleting wine " +  id);
    this.wineDeleted.emit(id);
  }
 
  onSortCriteriaChanged(criteria: string): void {
    this.sortCriteriaChanged.emit(criteria);
  }

}
