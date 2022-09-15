export {}

declare global {
  interface Auth {
    _id: string
    name: string
    surname: string
    phone?: string
    email: string
    role: string
    locations: string[]
    __v: number
    mainLocation?: string
  }
}
