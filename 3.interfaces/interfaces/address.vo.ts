
import { Geo } from "./geo.vo"
import { TextShort } from "./semantic.type"

export interface Address {
    street: TextShort
    suite: string
    city: string
    zipcode: string
    geo: Geo
}