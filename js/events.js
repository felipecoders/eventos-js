// #region mudando a classe da minha box-1 pelo click
const box1 = document.getElementById('box-1');
box1.onclick = function () {
  box1.classList.toggle('red');
  box1.classList.toggle('blue');
};
// #endregion

//#region mudando a classe da minha box-2 pelo double click
const box2 = document.getElementById('box-2');
box2.ondblclick = function () {
  box2.classList.toggle('rounded');
};
//#endregion

//#region mudando a classe da minha box-3 com mouseenter e mouseleave
const box3 = document.getElementById('box-3');
// adicionando a classe com mouseenter
box3.onmouseenter = function () {
  box3.classList.add('width-x2');
};
// removendo a classe com o mouseleave
box3.onmouseleave = function () {
  box3.classList.remove('width-x2');
};
//#endregion

//#region mudando a classe da minha box-4 com mousedown e mouseup
const box4 = document.getElementById('box-4');
// adicionando a classe ao dar mousedown
box4.onmousedown = function () {
  box4.classList.add('skew');
};
// removendo a classe ao dar mouseup
box4.onmouseup = function () {
  box4.classList.remove('skew');
};

//#endregion

////////////////////////////////////////////////////////////

//#region mudando o css da minha box-r1 click
const boxR1 = document.getElementById('box-r1');
boxR1.onclick = function () {
  const corAtual = boxR1.style.background;
  if (corAtual === 'blue') {
    boxR1.style.background = 'red';
  } else {
    boxR1.style.background = 'blue';
  }
};
//#endregion

//#region mudando o css da minha box-r2 com double click
const boxR2 = document.getElementById('box-r2');
boxR2.ondblclick = function () {
  const borderRadius = window.getComputedStyle(boxR2).borderRadius;
  if (borderRadius === '50%') {
    boxR2.style.borderRadius = '0';
  } else {
    boxR2.style.borderRadius = '50%';
  }
};
//#endregion

//#region mudando o css da minha box-r3 com o mouseenter e mouseleave
const boxr3 = document.getElementById('box-r3');
boxr3.onmouseenter = function () {
  boxr3.style.width = '10rem'
};
boxr3.onmouseleave = function () {
  boxr3.style.width = '5rem'
};
//#endregion

//#region modando o css da minha box-r4 com mousedown e mouseup
const boxr4 = document.getElementById('box-r4');
boxr4.onmousedown = function () {
  boxr4.style.transform = 'skewX(10deg)'
};
boxr4.onmouseup = function () {
  boxr4.style.transform = 'skewX(0)'
};
//#endregion
