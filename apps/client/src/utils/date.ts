import { format, parseISO } from 'date-fns';

export const formatDateVN = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy');
};

export const formatDateVNLocal = (date: Date) => {
  return format(date, 'dd/MM/yyyy');
};

export const formatDateVNLocalTimeStamp = (date: Date) => {
  return format(date, 'dd/MM/yyyy hh:mm');
};

export const formatHourMinuteVN = (date: string) => {
  return format(parseISO(date), 'hh:mm');
};

export const formatDateTimeVN = (date: string) => {
  return format(parseISO(date), 'hh:mm:ss dd/MM/yyyy');
};

export const greetingMessage = () => {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr >= 0 && curHr < 6) {
    return 'Chúc ngủ ngon';
  } else if (curHr >= 6 && curHr < 12) {
    return 'Chào buổi sáng';
  } else if (curHr >= 12 && curHr < 17) {
    return 'Buổi chiều vui vẻ';
  } else {
    return 'Buổi tối vui vẻ';
  }
};
