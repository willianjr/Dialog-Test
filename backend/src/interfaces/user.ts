export default interface User {
  _id: string
  index?: number
  name: string
  email?: string
  age?: number
  eyeColor?: string
  company?: string
  phone?: string
  greeting?: string
  picture?: string
  friends?: [User]
}
