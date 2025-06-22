import { Gender } from './Gender'

export interface IMember {
  name: string
  birthDate?: string
  birthPlace?: string
  hometown?: string
  gender: Gender
  spouse: IMember | null
  children: IMember[]
}
