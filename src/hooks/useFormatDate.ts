import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function useFormatDate(createdAt: Date) {
  const createdAtFormatDate = new Date(createdAt)
  const createdAtDateFormatted = format(
    createdAtFormatDate,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  )
  const createdAtDateRelativeToNow = formatDistanceToNow(createdAtFormatDate, {
    locale: ptBR,
    addSuffix: true,
  })

  return {
    createdAtFormatDate,
    createdAtDateFormatted,
    createdAtDateRelativeToNow,
  }
}
