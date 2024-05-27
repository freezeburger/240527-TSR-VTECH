import { Address } from "./address.vo"
import { Company } from "./company.vo"
import { InternationalPhoneNumber, TextShort, UniqueId, Username, ValtechEmail } from "./semantic.type"
import { WithID } from "./system.types"

export interface User extends WithID {
    name: TextShort
    username: Username
    email: ValtechEmail
    address: Address
    phone: InternationalPhoneNumber
    website: URL
    company: Company
}




