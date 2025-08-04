import {Component, input} from '@angular/core';
import { HousingLocationInfo } from '../housing-location.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.scss'
})
export class HousingLocation {
    housingLocation = input.required<HousingLocationInfo>();
}
