import { formatDateVNLocalTimeStamp } from '@client/utils/date';
import React, { useEffect, useState } from 'react';

interface Props {
  time: string;
}
export const RenderDateVNLocalTimeStamp = ({ time }: Props) => {
  const [timeRender, setTimeRender] = useState<string>('');
  useEffect(() => {
    const date = new Date(time);
    setTimeRender(formatDateVNLocalTimeStamp(date));
  }, [time]);
  return <>{timeRender}</>;
};
