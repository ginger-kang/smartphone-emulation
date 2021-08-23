export const getTime = isClock => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = isClock ? date.getHours() : date.getHours() - 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (isClock) {
    return `${year}년 ${month}월 ${day}일 ${
      hours < 10 ? `0${hours}` : hours
    }시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${
      seconds < 10 ? `0${seconds}` : seconds
    }초`;
  } else {
    return `${hours < 10 ? `0${hours}` : hours}시 ${
      minutes < 10 ? `0${minutes}` : minutes
    }분`;
  }
};
