import { formatDateTimeVN } from '@client/utils/date'
import React, { useEffect, useState } from 'react'

interface Props{
  time: string
}
export const TimeRender = ({time}:Props) => {
  const [timeRender, setTimeRender] = useState<string>('')
  useEffect(()=>{
    const date = Date.parse(time)
    setTimeRender(formatDateTimeVN(time))
  },[time])
  return (
    <>{timeRender}</>
  )
}
