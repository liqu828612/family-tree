import { Gender } from '@/types/Gender'

export class Member {
  public name: string
  public gender: Gender
  // 生日
  public birthDate?: string
  // 出生地
  public birthPlace?: string
  public hometown?: string
  public deathDate?: string

  public spouse: Member | null
  public children: Member[]

  constructor(
    name: string,
    gender: Gender,
    birthDate?: string,
    birthPlace?: string,
    hometown?: string,
    deathDate?: string,
  ) {
    this.name = name
    this.gender = gender
    this.birthDate = birthDate
    this.birthPlace = birthPlace
    this.hometown = hometown
    this.deathDate = deathDate
    this.spouse = null
    this.children = []
  }

  public addSpouse(person: Member): void {
    this.spouse = person
    person.spouse = this
  }

  public addChild(child: Member): void {
    this.children.push(child)
    if (this.spouse) {
      this.spouse.children.push(child)
    }
  }

  public isMarried(): boolean {
    return this.spouse !== null
  }
}
