'use strict';
/*
 *Події клавіатури. keypress, keydown, keyup
 */
//https://www.toptal.com/developers/keycode/for/a

const KeyBoardPress = event => {
  console.log(event.key);
  console.log(event.code);
};
document.addEventListener('keydown', KeyBoardPress);
