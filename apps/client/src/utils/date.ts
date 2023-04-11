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
