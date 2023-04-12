import { greetingMessage } from '@client/utils/date'
import { useEffect, useState } from 'react'

export const GreetingMessage = () => {
  const [message, setMessage] = useState<string>('')
  useEffect(()=>{
    const date = new Date()
    setMessage(greetingMessage(date))
  },[])
  return (
    <>{message}</>
  )
}
