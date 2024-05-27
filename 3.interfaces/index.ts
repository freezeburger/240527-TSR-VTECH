import { InternationalPhoneNumber, TextShort, UniqueId, Username, ValtechEmail } from "./semantic.type"


export interface User {
    id: UniqueId
    name: TextShort
    username: Username
    email: ValtechEmail
    address: Address
    phone: InternationalPhoneNumber
    website: URL
    company: Company
}

export interface UUser {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}
