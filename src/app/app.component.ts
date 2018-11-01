import { Component } from '@angular/core';
import {MapsService} from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps';

  latitude: string = '';
  longitude: string = '';

  location: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {
  	this.map.getIPInfo().subscribe(data=>{
  		console.log(data);
  		this.latitude = data.latitude;
  		this.longitude = data.longitude;
  		this.title = `${data.city}, ${data.country_name}`;
  	})
  }
}
