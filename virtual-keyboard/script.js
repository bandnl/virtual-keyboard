const layout = {
  'eng': [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113,
          119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
          97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122,
          120, 99, 118, 98, 110, 109, 44, 46, 47],
  'capsEng': [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
               81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92,
               65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 90, 88,
               67, 86, 66, 78, 77, 44, 46, 47],
  'shiftEng': [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,
               81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,
               65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 90, 88, 67,
               86, 66, 78, 77, 60, 62, 63],
  'ru': [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081,
         1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093,
         1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076,
         1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
  'capsRu': [1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
              1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065,
              1047, 1061, 1066, 92, 1060, 1067, 1042, 1040, 1055,
              1056, 1054, 1051, 1044, 1046, 1069, 1071, 1063, 1057,
              1052, 1048, 1058, 1068, 1041, 1070, 46],
  'shiftRu': [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95,
              43, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064,
              1065, 1047, 1061, 1066, 47, 1060, 1067, 1042, 1040,
              1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071,
              1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44]
};
let curLang = 'eng';

let keybordChangingLines = {
  'first': `<div class="changing-btn line__btn"></div>
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
  'second': `<div class="changing-btn line__btn"></div>
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
  'third': `<div class="changing-btn line__btn"></div>
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
  'fourth': `<div class="changing-btn line__btn"></div>
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
}

document.addEventListener('beforeunload', setLocalStorage);
document.addEventListener('load', getLocalStorage);
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey) {
    console.dir(window)
  }
  console.log(window.navigator)
});

function setLocalStorage() {
  localStorage.setItem('layout', curLang);
  console.log(2)
}

function getLocalStorage() {
  localStorage.getItem('layout');
  console.log(localStorage.getItem('layout'))
}

const container = document.createElement('div');
container.classList.add('keybord-container');
container.innerHTML = `<div class="first-line keybord-line">
                         ${keybordChangingLines.first}
                         <div class="keyBackspace line__btn">
                           ←
                         </div>
                       </div>
                       <div class="second-line keybord-line">
                         <div class="keyTab line__btn">
                           tab
                         </div>
                         ${keybordChangingLines.first}
                       </div>
                       <div class="third-line keybord-line">
                         <div class="keyCapsLock line__btn">
                           caps lock
                         </div>
                         ${keybordChangingLines.first}
                         <div class="keyEnter line__btn">
                           enter ↵
                         </div>
                       </div>
                       <div class="fourth-line keybord-line">
                         <div class="keyLShift line__btn">
                           shift ↑
                         </div>
                         ${keybordChangingLines.first}
                         <div class="keyRShift line__btn">
                           shift ↑
                         </div>
                       </div>
                       <div class="fifth-line keybord-line">
                         <div class="keyControl keyLControl line__btn">
                           ctrl
                         </div>
                         <div class="keyWin line__btn">
                           win
                         </div>
                         <div class="keyLAlt keyAltline__btn  line__btn">
                           alt
                         </div>
                         <div class="keySpace line__btn"></div>
                         <div class="keyRAlt keyAltline__btn  line__btn">
                           alt
                         </div>
                         <div class="keyControl keyRControl line__btn">
                           ctrl
                         </div>
                         <div class="keyArrowLeft keyArrow line__btn">
                           <
                         </div>
                         <div class="keyArrowGroup">
                           <div class="keyArrowTop line__btn">
                             ˄
                           </div>
                           <div class="keyArrowBottom line__btn">
                             ˅
                           </div>
                         </div>
                         <div class="keyArrowRight keyArrow line__btn">
                           >
                         </div>
                       </div>`;

document.body.prepend(container);