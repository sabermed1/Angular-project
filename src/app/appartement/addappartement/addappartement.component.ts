import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addappartement',
  templateUrl: './addappartement.component.html',
  styleUrls: ['./addappartement.component.css']
})
export class AddappartementComponent {

  AddAppart=new FormGroup({
    appartNum:new FormControl('', Validators.required),
    floorNum:new FormControl('', [Validators.required,Validators.min(2)]),
    surface:new FormControl(''),
    terrace:new FormControl('yes'),
    price:new FormControl(''),
    description:new FormControl(''),
    category:new FormControl(''),
    ResidenceId:new FormControl(''),
  })

}
