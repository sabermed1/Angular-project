import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/core/models/Residence';
import { ResidenceService } from 'src/app/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  newResidence: Residence = { id: 0, name: '', address: '', image: '', status: '' };

  constructor(private residenceService: ResidenceService, private router: Router) {}

  addResidence() {
    const newID = this.residenceService.getResidences().length > 0
      ? Math.max(...this.residenceService.getResidences().map(r => r.id)) + 1
      : 1;
      
    this.residenceService.addResidence({ ...this.newResidence, id: newID });
    
    // Redirection vers la liste des résidences
    this.router.navigate(['/residence']);
  }

  resetForm() {
    this.newResidence = { id: 0, name: '', address: '', image: '', status: '' };
  }
}