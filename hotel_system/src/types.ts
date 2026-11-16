export type Room = {
  id: number
  name: string
  capacity: number
  pricePerNight: number
}

export type Reservation = {
  id: number
  roomId: number
  guestName: string
  checkIn: string
  checkOut: string
  guests: number
}


