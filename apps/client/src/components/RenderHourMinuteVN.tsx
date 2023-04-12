import { formatHourMinuteVN } from '@client/utils/date'
import React, { useEffect, useState } from 'react'

interface Props{
  time: string
}
export const RenderHourMinuteVN = ({time}:Props) => {
  const [timeRender, setTimeRender] = useState<string>('')
  useEffect(()=>{
    const date = new Date(time).toISOString()
    setTimeRender(formatHourMinuteVN(date))
  },[time])
  return (
    <>{timeRender}</>
  )
}

