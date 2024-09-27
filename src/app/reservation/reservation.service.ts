import { Injectable, OnInit } from '@angular/core';

import { json } from 'stream/consumers';
import { Reservation } from '../models/resrevation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ReservationService {

  // constructor() {
  //   let savedReservations = localStorage.getItem("reservations")
  //   this.reservations=savedReservations ? JSON.parse(savedReservations) : [];
  //  }
  //  ngOnInit():void{
  //   let savedReservations = localStorage.getItem("reservations")
  //   this.reservations=savedReservations ? JSON.parse(savedReservations) : [];
  //  }

  //CRUD

  private apiUrl ="http://localhost:3001"

  private reservations :Reservation[] = []

  constructor(private http:HttpClient){}

  getReservations():Observable <Reservation[]>{

    return this.http.get<Reservation[]>(this.apiUrl + "/reservations")
    
  }
  getReservation(id:string):Observable< Reservation>{
    return this.http.get<Reservation>(this.apiUrl + "/reservation/"+id)
  
  }
  addReservation(reservation : Reservation):Observable<void>{
    return this.http.post<void>(this.apiUrl+"/reservation",reservation)

    //  localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
  deleteReservation(id:string):Observable<void>{
    //let index = this.reservations.findIndex(res=>res.id===id);
    //this.reservations.splice(index,1)
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.http.delete<void>(this.apiUrl + "/reservation/"+id)
  }
  updateReservation(id:string, updatedReservation:Reservation):Observable<void>{
   // let index= this.reservations.findIndex(res=>res.id===id)
    //this.reservations[index]=updateReservation
    // localStorage.setItem("reservations",JSON.stringify(this.reservations))
    return this.http.put<void>(this.apiUrl+"/reservation/" +id,updatedReservation)
  }
}
