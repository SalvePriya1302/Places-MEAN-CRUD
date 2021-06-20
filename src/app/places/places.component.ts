import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(public placesService:PlacesService) { }
  dataTitle = 'Places';
  place ={
    placename:'',
    city:'',
    country:''
  } ;

  places:any[] = [];

  

  ngOnInit() {
   
  }

  onAddPlace(placename, city, country){
   let place = {
      placename: placename.value,
      city: city.value,
      country: country.value
    }
    this.placesService.savePlaces(place).subscribe(
      (response) => {
        this.placesService.placesChanged.next(true);
      },
      (err)=> console.log(err)
    )
  }

 onDeletePlace(){}

  

}
