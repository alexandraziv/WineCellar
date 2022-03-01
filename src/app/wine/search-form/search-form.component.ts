import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.searchForm = this.builder.group({
      searchText: ""
    })
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit(this.searchForm.value.searchText);
  }

}
