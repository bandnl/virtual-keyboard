'use strict';

const layout = {
  eng: {
    reg: [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113,
      119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
      97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122,
      120, 99, 118, 98, 110, 109, 44, 46, 47],
    caps: [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
      81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92,
      65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 90, 88,
      67, 86, 66, 78, 77, 44, 46, 47],
    shift: [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,
      81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,
      65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 90, 88, 67,
      86, 66, 78, 77, 60, 62, 63],
    shiftcaps: [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,
      113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 123, 125, 124,
      97, 115, 100, 102, 103, 104, 106, 107, 108, 58, 34, 122,
      120, 99, 118, 98, 110, 109, 60, 62, 63]
  },
  ru: {
    reg: [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081,
      1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093,
      1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076,
      1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
    caps: [1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
      1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065,
      1047, 1061, 1066, 92, 1060, 1067, 1042, 1040, 1055,
      1056, 1054, 1051, 1044, 1046, 1069, 1071, 1063, 1057,
      1052, 1048, 1058, 1068, 1041, 1070, 46],
    shift: [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95,
      43, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064,
      1065, 1047, 1061, 1066, 47, 1060, 1067, 1042, 1040,
      1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071,
      1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44],
    shiftcaps: [1105, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95,
      43, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093,
      1098, 47, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076,
      1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 44]
  },
  code: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6',
    'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab',
    'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
    'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD',
    'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
    'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight',
    'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']
};
let count = 0;
let capscount = 1;
let keybordLayout = ['eng', 'reg'];
const keyPressAudio = new Audio('./assets/audio/press-key.mp3');
keyPressAudio.playbackRate = 2;

let keybordChangingLines = {
  first: `<div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>`,
  second: `<div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>
              <div class="changing-btn line__btn"></div>`,
  third: `<div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>`,
  fourth: `<div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>
            <div class="changing-btn line__btn"></div>`
};

const TEXT_CONTAINER = document.createElement('div');
const CONTAINER = document.createElement('div');
const TEXT_AREA = document.createElement('textarea');
const HELP_CONT = document.createElement('button');
const INFO_CONT = document.createElement('div');

function putLetters(lang = 'eng', lay = 'reg') {
  const curLayout = layout[lang][lay];
  document.querySelectorAll('.changing-btn').forEach((btn, ind) => {
    const button = btn;
    button.innerHTML = String.fromCharCode(curLayout[ind]);
  });
  document.querySelectorAll('.line__btn').forEach((btn, ind) => {
    btn.setAttribute('code', layout.code[ind]);
  });
  keybordLayout = [lang, lay];
}

function selectBtn(btn) {
  document.querySelectorAll('.line__btn').forEach(el => {
    if (el.getAttribute('code') === btn) el.classList.add('btn_active');
  });
}

function unselectBtn(btn) {
  document.querySelectorAll('.line__btn').forEach(el => {
    if (el.getAttribute('code') === btn) el.classList.remove('btn_active');
  });
}

function showInfo() {
  CONTAINER.append(INFO_CONT);
  HELP_CONT.classList.add('rotate');
  setTimeout(() => {
    document.body.querySelector('.info-cont').remove();
    HELP_CONT.classList.remove('rotate');
  }, 3000);
}

function addButtonAnimation(btn) {
  if (btn.classList.contains('line__btn')) {
    btn.classList.add('btn_animate');
  }
}

function removeButtonAnimation(btn) {
  if (btn.classList.contains('line__btn')) {
    btn.classList.remove('btn_animate');
  }
}

function setLocalStorage() {
  localStorage.setItem('lang', keybordLayout[0]);
  localStorage.setItem('layout', keybordLayout[1]);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    putLetters(localStorage.getItem('lang'), localStorage.getItem('layout'));
    if (localStorage.getItem('layout') === 'caps') {
      selectBtn('CapsLock');
      capscount += 1;
    }
  } else putLetters();
}

document.onclick = (event) => {
  if (event.target.classList.contains('line__btn')) document.querySelector('.input-text').focus();
};
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
document.addEventListener('keyup', (event) => {
  if (document.querySelector(`[code="${event.code}"]`)) {
    removeButtonAnimation(document.querySelector(`[code="${event.code}"]`));
  }
  if (event.key === 'Shift') {
    putLetters(count % 2 === 0 ? 'eng' : 'ru', capscount % 2 === 0 ? 'caps' : 'reg');
  }
  if (event.key !== 'CapsLock') unselectBtn(event.code);
  else if (capscount % 2 !== 0) unselectBtn(event.code);
});

document.addEventListener('keydown', (event) => {
  if (document.querySelector(`[code="${event.code}"]`)) {
    TEXT_AREA.focus();
    addButtonAnimation(document.querySelector(`[code="${event.code}"]`));

    if (document.querySelector(`[code="${event.code}"]`).classList.contains('changing-btn') && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      const pos = TEXT_AREA.selectionStart + 1;
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + document.querySelector(`[code="${event.code}"]`).innerHTML + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
      TEXT_AREA.selectionStart = pos;
      TEXT_AREA.selectionEnd = pos;
    }
  }
  if (event.ctrlKey && event.shiftKey) {
    putLetters(count % 2 === 0 ? 'eng' : 'ru', capscount % 2 === 0 ? 'caps' : 'reg');
    count += 1;
  }
  if (event.key === 'Shift') {
    putLetters(count % 2 === 0 ? 'eng' : 'ru', capscount % 2 === 0 ? 'shiftcaps' : 'shift');
  }
  if (event.key === 'CapsLock') {
    capscount += 1;
    putLetters(count % 2 === 0 ? 'eng' : 'ru', capscount % 2 === 0 ? 'caps' : 'reg');
  }
  if (event.key === 'Tab') {
    event.preventDefault();
    const pos = TEXT_AREA.selectionStart + 1;
    TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + '\t' + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
    TEXT_AREA.selectionStart = pos;
    TEXT_AREA.selectionEnd = pos;
  }
  if (event.key === 'Backspace') {
    if (!event.isTrusted) {
      const pos = TEXT_AREA.selectionStart;
      if (TEXT_AREA.selectionStart === TEXT_AREA.value.length) {
        TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart - 1);
        TEXT_AREA.selectionEnd = pos;
      } else if (TEXT_AREA.selectionStart !== 0) {
        TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart - 1)
         + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
        TEXT_AREA.selectionEnd = pos - 1;
      }
    }
  }
  if (event.key === 'Delete') {
    if (!event.isTrusted) {
      const pos = TEXT_AREA.selectionStart;
      if (TEXT_AREA.selectionStart !== TEXT_AREA.value.length) {
        TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart)
         + TEXT_AREA.value.slice(TEXT_AREA.selectionStart + 1);
        TEXT_AREA.selectionEnd = pos;
      }
    }
  }
  if (event.key === 'ArrowLeft' && !event.isTrusted) {
    TEXT_AREA.selectionEnd = TEXT_AREA.selectionStart > 0 ? TEXT_AREA.selectionEnd - 1 : 0;
  }
  if (event.key === 'ArrowRight' && !event.isTrusted) {
    TEXT_AREA.selectionStart += 1;
  }
  if (event.key === 'ArrowUp' && !event.isTrusted) {
    if (TEXT_AREA.selectionStart > 0) {
      const pos = TEXT_AREA.selectionStart + 1;
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + '↑' + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
      TEXT_AREA.selectionStart = pos;
      TEXT_AREA.selectionEnd = pos;
    }
  }
  if (event.key === 'ArrowDown' && !event.isTrusted) {
    const pos = TEXT_AREA.selectionStart + 1;
    TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + '↓' + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
    TEXT_AREA.selectionStart = pos;
    TEXT_AREA.selectionEnd = pos;
  }
  selectBtn(event.code);
});

TEXT_CONTAINER.classList.add('main-container');
CONTAINER.classList.add('keybord-container');
CONTAINER.innerHTML = `<div class="first-line keybord-line">
                         ${keybordChangingLines.first}
                         <div class="keyBackspace line__btn">
                           ←
                         </div>
                       </div>
                       <div class="second-line keybord-line">
                         <div class="keyTab line__btn">
                           tab
                         </div>
                         ${keybordChangingLines.second}
                         <div class="keyDel line__btn">
                          del
                         </div>
                       </div>
                       <div class="third-line keybord-line">
                         <div class="keyCapsLock line__btn">
                           caps lock
                         </div>
                         ${keybordChangingLines.third}
                         <div class="keyEnter line__btn">
                           enter ↵
                         </div>
                       </div>
                       <div class="fourth-line keybord-line">
                         <div class="keyLShift keyShift line__btn">
                           shift ↑
                         </div>
                         ${keybordChangingLines.fourth}
                         <div class="keyRShift keyShift line__btn">
                           shift ↑
                         </div>
                       </div>
                       <div class="fifth-line keybord-line">
                         <div class="keyControl keyLControl line__btn">
                           ctrl
                         </div>
                         <div class="keyWin line__btn">
                           <img src="./assets/svg/win.svg" alt="win" style="width:18px;height:18px">
                         </div>
                         <div class="keyLAlt keyAlt line__btn">
                           alt
                         </div>
                         <div class="keySpace line__btn"></div>
                         <div class="keyRAlt keyAlt line__btn">
                           alt
                         </div>
                         <div class="keyControl keyRControl line__btn">
                           ctrl
                         </div>
                         <div class="keyArrowLeft keyArrow line__btn">
                           <
                         </div>
                         <div class="keyArrowGroup">
                           <div class="keyArrowUp line__btn">
                             ˄
                           </div>
                           <div class="keyArrowDown line__btn">
                             ˅
                           </div>
                         </div>
                         <div class="keyArrowRight keyArrow line__btn">
                           >
                         </div>
                       </div>`;
TEXT_AREA.classList.add('input-text');
HELP_CONT.classList.add('help-cont');
INFO_CONT.classList.add('info-cont');
INFO_CONT.innerHTML = '<span>The keyboard was created in the Windows OS</span><span>Change language: Ctrl + Shift</span>';

document.body.prepend(CONTAINER);
document.body.prepend(TEXT_CONTAINER);
TEXT_CONTAINER.prepend(TEXT_AREA);
CONTAINER.append(HELP_CONT);

CONTAINER.addEventListener('mousedown', (ev) => {
  TEXT_AREA.focus();
  if (ev.target.getAttribute('code')) {
    keyPressAudio.play();
    selectBtn(ev.target.getAttribute('code'));
    addButtonAnimation(ev.target);
    if (ev.target.classList.contains('changing-btn')) {
      const pos = TEXT_AREA.selectionStart + 1;
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart)
        + ev.target.innerHTML + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
      TEXT_AREA.selectionStart = pos;
      TEXT_AREA.selectionEnd = pos;
    } else if (ev.target.classList.contains('keySpace')) {
      const pos = TEXT_AREA.selectionStart + 1;
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + ' ' + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
      TEXT_AREA.selectionStart = pos;
      TEXT_AREA.selectionEnd = pos;
    } else if (ev.target.classList.contains('keyEnter')) {
      TEXT_AREA.value += '\n';
    } else if (ev.target.classList.contains('keyTab')) {
      const pos = TEXT_AREA.selectionStart + 1;
      TEXT_AREA.value = TEXT_AREA.value.slice(0, TEXT_AREA.selectionStart) + '\t' + TEXT_AREA.value.slice(TEXT_AREA.selectionStart);
      TEXT_AREA.selectionStart = pos;
      TEXT_AREA.selectionEnd = pos;
    } else if (ev.target.classList.contains('keyBackspace')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Backspace'
      }));
    } else if (ev.target.classList.contains('keyDel')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Delete'
      }));
    } else if (ev.target.classList.contains('keyShift')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Shift',
        shiftKey: true
      }));
    } else if (ev.target.classList.contains('keyControl')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Control',
        ctrlKey: true
      }));
    } else if (ev.target.classList.contains('keyAlt')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Alt',
        altKey: true
      }));
    } else if (ev.target.classList.contains('keyCapsLock')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'CapsLock',
        code: 'CapsLock'
      }));
    } else if (ev.target.classList.contains('keyWin')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Meta',
        metaKey: true
      }));
    } else if (ev.target.classList.contains('keyArrowLeft')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowLeft'
      }));
    } else if (ev.target.classList.contains('keyArrowUp')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowUp'
      }));
    } else if (ev.target.classList.contains('keyArrowDown')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowDown'
      }));
    } else if (ev.target.classList.contains('keyArrowRight')) {
      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowRight'
      }));
    }
  }
});
CONTAINER.addEventListener('mouseup', (ev) => {
  if (ev.target.getAttribute('code')) {
    unselectBtn(ev.target.getAttribute('code'));
    removeButtonAnimation(ev.target);
  }
  if (ev.target.classList.contains('keyShift')) {
    document.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Shift',
      shiftKey: false
    }));
  } else if (ev.target.classList.contains('keyControl')) {
    document.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Control',
      ctrlKey: false
    }));
  } else if (ev.target.classList.contains('keyAlt')) {
    document.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Alt',
      altKey: false
    }));
  } else if (ev.target.classList.contains('keyCapsLock')) {
    document.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'CapsLock',
      code: 'CapsLock'
    }));
  } else if (ev.target.classList.contains('keyWin')) {
    document.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Meta',
      metaKey: false
    }));
  }
});
HELP_CONT.addEventListener('click', showInfo);
