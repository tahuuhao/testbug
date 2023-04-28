import { formatDateTimeVN } from '@client/utils/date';
import React, { useEffect, useState } from 'react';

interface Props {
  time: string;
}
export const RenderDateTimeVN = ({ time }: Props) => {
  const [timeRender, setTimeRender] = useState<string>('');
  useEffect(() => {
    const date = new Date(time).toISOString();
    setTimeRender(formatDateTimeVN(date));
  }, [time]);
  return <>{timeRender}</>;
};
