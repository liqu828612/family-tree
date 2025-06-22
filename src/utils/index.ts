import { FamilyTree } from '@/models/FamilyTree'
import { Member } from '@/models/Member'
import { Gender } from '@/types/Gender'

export const isMale = (member: Member): boolean => member.gender === Gender.MALE
export const isFemale = (member: Member): boolean =>
  member.gender === Gender.FEMALE

export const getName = (member: Member): string => member.name
export const getSpouse = (member: Member): Member | null => member.spouse

export const isMemberOrSpouse =
  (name: string) =>
  (member: Member): boolean =>
    member.name === name || member.spouse?.name === name

export const setupShanFamilyTree = (): FamilyTree => {
  //1st generation
  const family = new FamilyTree('曲云汉', '刘付勤')

  // 2nd generation
  family.addMember('刘付勤', '曲庆义', Gender.MALE, 'CHILD')
  family.addMember('刘付勤', '曲庆智', Gender.MALE, 'CHILD')
  family.addMember('刘付勤', '曲庆莲', Gender.FEMALE, 'CHILD')
  family.addMember('刘付勤', '曲庆敏', Gender.MALE, 'CHILD')

  family.addMember('曲庆智', '刘旭蓝', Gender.FEMALE, 'SPOUSE')
  family.addMember('曲庆莲', '贾国庆', Gender.MALE, 'SPOUSE')
  family.addMember('曲庆敏', '杨凤梅', Gender.FEMALE, 'SPOUSE')

  // 3rd generation
  family.addMember('刘旭蓝', '管悅武', Gender.MALE, 'CHILD')
  family.addMember('刘旭蓝', '曲相丽', Gender.FEMALE, 'CHILD')

  family.addMember('贾国庆', '贾钰', Gender.FEMALE, 'CHILD')
  family.addMember('贾国庆', '贾晓龙', Gender.MALE, 'CHILD')
  family.addMember('贾国庆', '贾晓勇', Gender.MALE, 'CHILD')

  family.addMember('曲庆敏', '曲建龙', Gender.MALE, 'CHILD')
  family.addMember('曲庆敏', '曲建英', Gender.FEMALE, 'CHILD')
  family.addMember('曲庆敏', '曲建军', Gender.MALE, 'CHILD')

  family.addMember('管悅武', '曲相琳', Gender.FEMALE, 'SPOUSE')
  family.addMember('曲相丽', '刘兴龙', Gender.MALE, 'SPOUSE')
  family.addMember('贾钰', '陆纪民', Gender.MALE, 'SPOUSE')
  family.addMember('贾晓龙', '宋蕾', Gender.FEMALE, 'SPOUSE')
  family.addMember('贾晓勇', '陆楠', Gender.FEMALE, 'SPOUSE')
  family.addMember('曲建龙', '蒋玉娟', Gender.FEMALE, 'SPOUSE')
  family.addMember('曲建英', '王秦', Gender.MALE, 'SPOUSE')
  family.addMember('曲建军', '李静', Gender.FEMALE, 'SPOUSE')

  /// 4th generation
  family.addMember('曲相琳', '管玉鑫', Gender.FEMALE, 'CHILD')
  // family.addMember('曲相琳', 'driya', Gender.FEMALE, 'CHILD')
  family.addMember('陆纪民', '陆婧', Gender.FEMALE, 'CHILD')
  family.addMember('曲建龙', '曲晓衡', Gender.MALE, 'CHILD')

  // family.addMember('王秦', 'kriya', Gender.MALE, 'CHILD')
  family.addMember('李静', '曲文惠', Gender.FEMALE, 'CHILD')
  family.addMember('曲相丽', '刘沛濛', Gender.MALE, 'CHILD')
  family.addMember('贾晓龙', '贾睿涵', Gender.FEMALE, 'CHILD')
  family.addMember('贾晓勇', '贾睿澍', Gender.MALE, 'CHILD')

  family.addMember('王秦', '王永卓', Gender.MALE, 'CHILD')
  family.addMember('王秦', '王振宇', Gender.MALE, 'CHILD')

  // family.addMember('driya', 'mnu', Gender.MALE, 'SPOUSE')
  // family.addMember('陆婧', 'gru', Gender.MALE, 'SPOUSE')

  return family
}
