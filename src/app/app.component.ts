import { Component } from '@angular/core';
import {MapsService} from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps';

  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {
  	this.map.getLocation().subscribe(data=>{
  		console.log(data);
  		this.lat = data.latitude;
  		this.lng = data.longitude;
  		this.title = `${data.city}, ${data.country_name}`;
  	})
  }
}
