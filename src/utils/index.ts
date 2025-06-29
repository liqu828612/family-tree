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
  const family = new FamilyTree('曲氏祖', '曲氏母', '', '', '', '', '', '')
  // 曲云汉
  // 刘付勤
  // 曲文炳 曲苏氏
  family.addMember('曲氏祖', '曲氏', Gender.MALE, 'CHILD', '', '', '', '')

  family.addMember('曲氏', '配?氏', Gender.FEMALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲氏祖', '曲氏1', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲氏1', '配?氏1', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember(
    '曲氏',
    '曲云汉',
    Gender.MALE,
    'CHILD',
    '1939-05-20',
    '南阳市老瓦店镇',
    '南阳市',
    '2006-08-18',
  )
  family.addMember(
    '曲云汉',
    '刘付勤',
    Gender.FEMALE,
    'SPOUSE',
    '1939-05-20',
    '南阳市老瓦店镇',
    '南阳市',
    '2006-08-18',
  )

  family.addMember('曲氏', '曲云忠', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲云忠', '贾桂英', Gender.FEMALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲氏1', '曲成先', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲成先', '曲氏？', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  // 2nd generation
  // 开始曲云忠
  family.addMember('曲云忠', '曲庆信', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲成先', '曲英甫', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲英甫', '米文琴', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲成先', '曲兰甫', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲兰甫', '杨玉爱', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲成先', '曲元甫', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲元甫', '李长玲', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲成先', '曲宏甫', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲宏甫', '王丽娟', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲庆信', '李信风', Gender.FEMALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲云忠', '曲玉莲', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲玉莲', '崔定贵', Gender.MALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲云忠', '曲庆云', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲庆云', '刘爱荣', Gender.FEMALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲云忠', '曲庆海', Gender.MALE, 'CHILD', '', '', '', '')

  family.addMember(
    '刘付勤',
    '曲庆义',
    Gender.MALE,
    'CHILD',
    '1939-05-20',
    '南阳市老瓦店镇',
    '南阳市',
    '2006-08-18',
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
    '2006-03-26',
  )

  // 3rd generation

  family.addMember('曲庆信', '曲志红', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲庆信', '曲志梅', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲志梅', '肖进', Gender.MALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲庆信', '曲志荣', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲志荣', '李昌洪', Gender.MALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲志红', '张守武', Gender.MALE, 'SPOUSE', '', '', '', '')
  // 崔定贵
  family.addMember('崔定贵', '崔建昱', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('崔建昱', '张景德', Gender.MALE, 'SPOUSE', '', '', '', '')
  family.addMember('崔定贵', '崔建乐', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('崔建乐', '申瑞祥', Gender.FEMALE, 'SPOUSE', '', '', '', '')
  family.addMember('崔定贵', '崔建朝', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('崔建朝', '樊爱芝', Gender.FEMALE, 'SPOUSE', '', '', '', '')
  family.addMember('曲庆云', '曲丽', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲丽', '邓长刚', Gender.MALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲英甫', '曲居峰', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲居峰', '王志宏', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲英甫', '曲银萍', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲银萍', '翟东明', Gender.MALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲英甫', '曲赤峰', Gender.MALE, 'CHILD', '', '', '', '')

  family.addMember('曲兰甫', '曲一峰', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲一峰', '赵红菊', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲兰甫', '曲晓峰', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲晓峰', '许春莲', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲兰甫', '曲耀峰', Gender.MALE, 'CHILD', '', '', '', '')
  family.addMember('曲耀峰', '张艳平', Gender.FEMALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲兰甫', '曲秋萍', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲秋萍', '胡勇', Gender.MALE, 'SPOUSE', '', '', '', '')

  family.addMember('曲元甫', '曲杨', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲元甫', '曲可', Gender.FEMALE, 'CHILD', '', '', '', '')

  family.addMember('曲宏甫', '曲芳', Gender.FEMALE, 'CHILD', '', '', '', '')
  family.addMember('曲宏甫', '曲琳', Gender.FEMALE, 'CHILD', '', '', '', '')

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

  family.addMember('曲志红', '张家琦', Gender.FEMALE, 'CHILD', '', '', '')
  family.addMember('曲志梅', '肖羽翀', Gender.FEMALE, 'CHILD', '', '', '')
  family.addMember('曲志荣', '曲木子', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('曲志荣', '李子木', Gender.FEMALE, 'CHILD', '', '', '')
  family.addMember('崔建昱', '张冰', Gender.FEMALE, 'CHILD', '', '', '')
  family.addMember('崔建昱', '张世豪', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('崔建乐', '崔振天', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('崔振天', '唐天娥', Gender.FEMALE, 'SPOUSE', '', '', '')
  family.addMember('崔建乐', '崔振江', Gender.MALE, 'CHILD', '', '', '')

  family.addMember('崔建朝', '崔振环', Gender.FEMALE, 'CHILD', '', '', '')
  family.addMember('崔振环', '刘帅', Gender.MALE, 'SPOUSE', '', '', '')
  family.addMember('崔建朝', '崔一帆', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('崔一帆', '冯春娟', Gender.FEMALE, 'SPOUSE', '', '', '')
  family.addMember('曲丽', '曲波', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('曲丽', '邓泽霖', Gender.MALE, 'CHILD', '', '', '')

  family.addMember('曲居峰', '曲擎宇', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('曲擎宇', 'Selena', Gender.FEMALE, 'SPOUSE', '', '', '')

  family.addMember('曲银萍', '翟晓宇', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('翟晓宇', '谭丹', Gender.FEMALE, 'SPOUSE', '', '', '')

  family.addMember('曲一峰', '曲培宇', Gender.MALE, 'CHILD', '', '', '')

  family.addMember('曲晓峰', '曲振宇', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('曲振宇', '刘依依', Gender.FEMALE, 'SPOUSE', '', '', '')

  family.addMember('曲耀峰', '曲兴宇', Gender.MALE, 'CHILD', '', '', '')

  family.addMember('曲秋萍', '胡阳春', Gender.FEMALE, 'CHILD', '', '', '')

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
  /// 5th generation
  family.addMember('崔振天', '崔恩沛', Gender.MALE, 'CHILD', '', '', '')
  family.addMember('崔振环', '刘佳莹', Gender.MALE, 'CHILD', '', '', '')

  family.addMember('曲擎宇', '曲融泽', Gender.MALE, 'CHILD', '', '', '')

  family.addMember('翟晓宇', '翟恒舜', Gender.MALE, 'CHILD', '', '', '')

  // family.addMember('driya', 'mnu', Gender.MALE, 'SPOUSE')
  // family.addMember('陆婧', 'gru', Gender.MALE, 'SPOUSE')

  return family
}
