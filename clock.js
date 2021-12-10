const hTime = document.querySelector("#time");

setInterval(() => {
  const todayDate = new Date();

  const hour =
    todayDate.getHours() < 10
      ? `0${todayDate.getHours()}`
      : todayDate.getHours();
  const minutes =
    todayDate.getMinutes() < 10
      ? `0${todayDate.getMinutes()}`
      : todayDate.getMinutes();
  const second =
    todayDate.getSeconds() < 10
      ? `0${todayDate.getSeconds()}`
      : todayDate.getSeconds();
  const getMilliseconds =
    todayDate.getMilliseconds() < 100
      ? `0${todayDate.getMilliseconds()}`
      : todayDate.getMilliseconds();

  const time = `${hour} : ${minutes} :
${second} : ${getMilliseconds}  `;
  hTime.textContent = time;
}, 100);
