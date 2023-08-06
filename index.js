const HandleClick = () => {
    document.querySelector('.audio').load();
    document.querySelector('.audio').play();
  const movieX = Math.floor(Math.random() * (90 - 10)) + 10;
  const movieY = Math.floor(Math.random() * (90 - 10)) + 10;
  document.getElementById("no").style.top = `${movieY}vh`;
  document.getElementById("no").style.left =  `${movieX}vw`;
};
