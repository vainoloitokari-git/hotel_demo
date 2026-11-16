import type { Reservation, Room } from './types'

export const rooms: Room[] = [
  { id: 1, name: 'Standard Room', capacity: 2, pricePerNight: 89 },
  { id: 2, name: 'Family Room', capacity: 4, pricePerNight: 139 },
]

export const reservations: Reservation[] = [
  {
    id: 1,
    roomId: 1,
    guestName: 'Alex Example',
    checkIn: '2026-07-10',
    checkOut: '2026-07-12',
    guests: 2,
  },
]
