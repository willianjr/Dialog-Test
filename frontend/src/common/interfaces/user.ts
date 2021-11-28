export default interface User {
  _id: string
  index?: number
  name: string
  email?: string
  age?: string
  eyeColor?: string
  company?: string
  phone?: string
  greeting?: string
  picture: string
  friends?: User[]
}
