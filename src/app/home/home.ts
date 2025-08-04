import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location.model';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})


export class Home {
  // Injecting HousingService to access housing locations
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
   
}
   