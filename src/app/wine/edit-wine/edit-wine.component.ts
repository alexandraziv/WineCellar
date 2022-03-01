import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { Wine } from '../model/wine.model';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'wc-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {
  wine: Wine = new Wine();
  wineForm: FormGroup;

  constructor(private fb: FormBuilder, private wineService: WineService, private router: Router, 
      private route: ActivatedRoute) {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      year: ["", [Validators.required]],
      grapes: ["", [Validators.required]],
      country: ["", [Validators.required]],
      region: ["", [Validators.required]],
      description: ["", [Validators.required]]
    });
  }

  ngOnInit() {
    let id: number = Number(this.route.snapshot.params['id']);
    console.log('id: ', id);
    if (id) {
      this.wineService.get(id).subscribe({
        next: (response: Wine) => {
          console.log(response);
          this.wine = response;
          this.wineForm.patchValue(this.wine);
        } 
      });
    }
  }

  onSubmit(): void {
    this.wine = new Wine(this.wineForm.value);
    console.log(this.wine);

    let id: number = Number(this.route.snapshot.params['id']);
    if (id) {
      this.wine._id = id;
      this.wineService.update(this.wine).subscribe({
        next: (response: any) => {
          this.wineForm.reset();
          this.router.navigate(['wines']);
        }
      });
    } else {
      this.wineService.add(this.wine).subscribe({
        next: (response: any) => {
          this.wineForm.reset();
          this.router.navigate(['wines']);
        }
      });
    }
  }

}
