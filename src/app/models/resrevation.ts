export interface Reservation {
[x: string]: any;
    id:string,
    checkInDate: Date,
    checkOutDate: Date,
    guestName: string,
    guestEmail: string,
    roomNumber:number
}
