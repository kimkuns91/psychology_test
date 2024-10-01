import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

export const dateFormat = (date: Date) => {
  return format(new Date(date), 'yyyy년 MM월 dd일 HH시 mm분 ss초', {
    locale: ko,
  })
}
