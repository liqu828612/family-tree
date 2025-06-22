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
  const family = new FamilyTree('曲云汉', '刘付勤', '1917-06-22')

  // 2nd generation
  family.addMember(
    '刘付勤',
    '曲庆义',
    Gender.MALE,
    'CHILD',
    '1939-05-20',
    '南阳市老瓦店镇',
    '南阳',
  )
  family.addMember(
    '刘付勤',
    '曲庆智',
    Gender.MALE,
    'CHILD',
    '1943-05-20',
    '南阳市老瓦店镇',
    '南阳市官庄镇',
  )
  family.addMember(
    '刘付勤',
    '曲庆莲',
    Gender.FEMALE,
    'CHILD',
    '1947-10-18',
    '南阳市宛城区老瓦店镇',
    '西安市',
  )
  family.addMember(
    '刘付勤',
    '曲庆敏',
    Gender.MALE,
    'CHILD',
    '1952-03-10',
    '南阳市宛城区老瓦店镇',
    '南阳市瓦店镇',
  )

  family.addMember(
    '曲庆智',
    '刘旭蓝',
    Gender.FEMALE,
    'SPOUSE',
    '1945-05-03',
    '南阳市陆营镇党沟',
    '南阳市官庄镇',
  )
  family.addMember(
    '曲庆莲',
    '贾国庆',
    Gender.MALE,
    'SPOUSE',
    '1947-03-10',
    '南阳市淅川县桥镇街',
    '西安市',
  )
  family.addMember(
    '曲庆敏',
    '杨凤梅',
    Gender.FEMALE,
    'SPOUSE',
    '1950-03-01',
    '南阳市宛城区瓦店镇翟庄',
    '南阳市瓦店镇',
  )

  // 3rd generation
  family.addMember(
    '刘旭蓝',
    '管悅武',
    Gender.MALE,
    'CHILD',
    '1970-04-22',
    '南阳市瓦店镇王广桥',
    '南阳市官庄镇',
  )
  family.addMember(
    '刘旭蓝',
    '曲相丽',
    Gender.FEMALE,
    'CHILD',
    '1978-10-17',
    '南阳市宛城区老瓦店镇',
    '南阳市官庄镇',
  )

  family.addMember(
    '贾国庆',
    '贾钰',
    Gender.FEMALE,
    'CHILD',
    '1972-11-03',
    '南阳市宛城区老瓦店镇',
    '西安市',
  )
  family.addMember(
    '贾国庆',
    '贾晓龙',
    Gender.MALE,
    'CHILD',
    '1977-10-15',
    '南阳市宛城区老瓦店镇',
    '西安市',
  )
  family.addMember(
    '贾国庆',
    '贾晓勇',
    Gender.MALE,
    'CHILD',
    '1980-07-26',
    '南阳市宛城区老瓦店镇',
    '西安市',
  )

  family.addMember(
    '曲庆敏',
    '曲建龙',
    Gender.MALE,
    'CHILD',
    '1978-01',
    '南阳市宛城区老瓦店镇',
    '南阳市瓦店镇',
  )
  family.addMember(
    '曲庆敏',
    '曲建英',
    Gender.FEMALE,
    'CHILD',
    '1981-10-31',
    '南阳市宛城区瓦店镇',
    '南阳市',
  )
  family.addMember(
    '曲庆敏',
    '曲建军',
    Gender.MALE,
    'CHILD',
    '1982-08-30',
    '南阳市宛城区瓦店镇',
    '上海市',
  )

  family.addMember(
    '管悅武',
    '曲相琳',
    Gender.FEMALE,
    'SPOUSE',
    '1971-10-27',
    '南阳市宛城区瓦店镇',
    '南阳市官庄镇',
  )
  family.addMember(
    '曲相丽',
    '刘兴龙',
    Gender.MALE,
    'SPOUSE',
    '1972-02',
    '南阳市瓦店镇东邓桥',
    '南阳市官庄镇',
  )
  family.addMember(
    '贾钰',
    '陆纪民',
    Gender.MALE,
    'SPOUSE',
    '1973-03-17',
    '西安市',
    '西安市',
  )
  family.addMember(
    '贾晓龙',
    '宋蕾',
    Gender.FEMALE,
    'SPOUSE',
    '1983-05-01',
    '西安市',
    '西安市',
  )
  family.addMember(
    '贾晓勇',
    '陆楠',
    Gender.FEMALE,
    'SPOUSE',
    '1988-11-03',
    '西安市',
    '西安市',
  )
  family.addMember('曲建龙', '蒋玉娟', Gender.FEMALE, 'SPOUSE')
  family.addMember(
    '曲建英',
    '王秦',
    Gender.MALE,
    'SPOUSE',
    '1978-03-05',
    '南阳市宛城区瓦店镇',
    '南阳市',
  )
  family.addMember(
    '曲建军',
    '李静',
    Gender.FEMALE,
    'SPOUSE',
    '1986-04-26',
    '河南省南阳市宛城区瓦店镇韩营',
    '上海市',
  )

  /// 4th generation
  family.addMember(
    '曲相琳',
    '管玉鑫',
    Gender.FEMALE,
    'CHILD',
    '1997-11-20',
    '南阳市官庄镇',
    '深圳市',
  )
  family.addMember(
    '曲相丽',
    '刘沛濛',
    Gender.MALE,
    'CHILD',
    '2003-05-30',
    '南阳市官庄镇',
    '南阳市官庄镇',
  )
  // family.addMember('曲相琳', 'driya', Gender.FEMALE, 'CHILD')
  family.addMember(
    '陆纪民',
    '陆婧',
    Gender.FEMALE,
    'CHILD',
    '1999-05-31',
    '西安市',
    '西安市',
  )
  family.addMember('曲建龙', '曲晓衡', Gender.MALE, 'CHILD')

  // family.addMember('王秦', 'kriya', Gender.MALE, 'CHILD')
  family.addMember(
    '李静',
    '曲文惠',
    Gender.FEMALE,
    'CHILD',
    '2012-05-28',
    '上海市',
    '上海市',
  )

  family.addMember(
    '贾晓龙',
    '贾睿涵',
    Gender.FEMALE,
    'CHILD',
    '2012-02-08',
    '西安市',
    '西安市',
  )
  family.addMember(
    '贾晓勇',
    '贾睿澍',
    Gender.MALE,
    'CHILD',
    '2019-10-01',
    '西安市',
    '西安市',
  )

  family.addMember(
    '王秦',
    '王永卓',
    Gender.MALE,
    'CHILD',
    '2007-09-08',
    '南阳市宛城区瓦店镇',
    '南阳市',
  )
  family.addMember(
    '王秦',
    '王振宇',
    Gender.MALE,
    'CHILD',
    '2009-08-31',
    '南阳市宛城区瓦店镇',
    '南阳市',
  )

  // family.addMember('driya', 'mnu', Gender.MALE, 'SPOUSE')
  // family.addMember('陆婧', 'gru', Gender.MALE, 'SPOUSE')

  return family
}
