import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-placelist',
  templateUrl: './placelist.component.html',
  styleUrls: ['./placelist.component.css']
})
export class PlacelistComponent implements OnInit {
 places:Place[]=[];
 selectedPlace:Place = {
   placename:"",
   city:"",
   country:""
 }

  constructor(private placesservice: PlacesService) { }

  ngOnInit(): void {
    this.placesservice.getPlaces().subscribe((res)=>{
      this.places = res;
        console.log("arrived places "+JSON.stringify(this.places));
    });
    this.placesservice.placesChanged.subscribe((res)=>{
      this.placesservice.getPlaces().subscribe((res)=>{
        this.places = res;
        console.log("arrived places "+JSON.stringify(this.places));
      });
    })
  }
  onDelete(id){
    this.placesservice.deletePlace(id).subscribe((res)=>{
      this.placesservice.placesChanged.next(true);
    });
  }

  onGetPlace(id) {
    this.placesservice.getPlace(id).subscribe((res)=>{
      this.selectedPlace = res[0];
      console.log("updating " +JSON.stringify(this.selectedPlace));
    })
  }

  onUpdatePlace(id,placename,city,country){
    let place={
      placename : placename,
      city :city,
      country: country
    }
    console.log("updating with "+JSON.stringify(place));
    this.placesservice.updatePlace(id, place).subscribe((res)=> {
      this.placesservice.placesChanged.next(true);
      this.selectedPlace = {
        placename:"",
        city:"",
        country:""
      }
    });
  }

  

  }
