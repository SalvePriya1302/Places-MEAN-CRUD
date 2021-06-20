import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Place } from './place';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url = 'http://localhost:3000/api/places/';

  constructor(private http:HttpClient) { }
  places: Place[]= [];
  placesChanged = new Subject<boolean>();

  savePlaces(place: Place){
    console.log('places are ' + JSON.stringify(place));
    return this.http.post(this.url, place)
  }

  getPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>
    (this.url);
  }

  deletePlace(id) {
    return this.http.delete(this.url + id);
  }
  getPlace(id) {
    return this.http.get<Place>
    (this.url+id);
  }
  updatePlace(id, place){
    console.log("place to replace "+JSON.stringify(place));
    return this.http.put(this.url + id, place)
  }
}
