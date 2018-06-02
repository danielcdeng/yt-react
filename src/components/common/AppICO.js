import * as types from '../../actions/actionTypes';

const ENUS_State_Obj = {
  state1a: '(TBD)',
  state1b: '',
  state2a: '',
  state2b: ''
};

const ZHTW_State_Obj = {
  state1a: '(TBD)',
  state1b: '',
  state2a: '',
  state2b: ''
};

function getDefault(locale) {
  if (locale == types.LOCALE_ENUS) {                      // enus: state1
    return Object.assign({}, ENUS_State_Obj);
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw: state1
    return Object.assign({}, ZHTW_State_Obj);
  }
}

function sameAs1a(locale) {
  switch (locale) {
    case types.LOCALE_ENUS: return 'Same as 1a.';
    case types.LOCALE_ZHTW: return '与 1a 同';
  }
}

function sameAs1b(locale) {
  switch (locale) {
    case types.LOCALE_ENUS: return 'Same as 1b.';
    case types.LOCALE_ZHTW: return '与 1b 同';
  }
}

/*
function yaoxxxx(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
  }
}

function ICxxxx(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = basexxxx(locale, ticker);
  obj.state1b = yaoxxxx(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        // yang:
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        // yin:
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
  }
  return obj;
}
*/

function IC00000(locale, ticker) {
  let obj;
  if (locale == types.LOCALE_ENUS) {                      // enus
    obj = Object.assign({}, ENUS_State_Obj);
    obj.state1a = 'Changing Image finding begins on ' + ticker.tick.name + ' (' + ticker.tick.titl + ')';
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw
    obj = Object.assign({}, ZHTW_State_Obj);
    obj.state1a += '易象起算 ' + ticker.tick.name + ' (' + ticker.tick.titl + ') ...';
  }
  return obj;
}

/***** 7241 山澤損 100011 *****/

function base7241(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'DECREASE comes with sincerity and brings about supreme good fortune, thus DECREASE comes without blame. ' +
        ticker.tick.name + ' may be persevering in this, thus, it furthers ' + ticker.tick.name + ' to undertake something. ' +
        'How is this to be carried out? ' + ticker.tick.name + ' has to seek partner(s) in order to start new chapters in business.';
    case types.LOCALE_ZHTW:
      return '(山澤損) 有孚誠信，本元吉利，無咎錯，可貞，利有攸往；曷以之用？' + ticker.tick.name + ' 要去尋找合作夥伴方能開啟新的篇章。';
  }
}

function yao7241(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) Cannot treat it as a DECREASE. On the contrary, it is a benefit, not a fault. ' +
          'Perseverance brings good fortune and it furthers ' + ticker.tick.name + ' to undertake cooperation from ' +
          'other parties in order to expand the ' + ticker.tick.name + '\'s market share and influence.';
        case 5: return;
        case 4: return;
        case 3: return;
        case 2: return;
        case 1: return;
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 不能以損視之，反而是益之无咎，貞吉，利有攸往，得臣無家，意思是雙方合作以壯大勢力版圖。';
        case 5: return;
        case 4: return;
        case 3: return;
        case 2: return;
        case 1: return;
      }
      break;
  }
}

function IC7241(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base7241(locale, ticker);
  obj.state1b = yao7241(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base8219(locale, ticker); obj.state2b = yao8219(locale, ticker, yao); break; // 100011 (7241) -> 000011 (8219)
      }
      break;
    /*
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    */
  }
  return obj;
}

/***** 7518 山風蠱 100110 *****/

function base7518(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'WORKING ON WHAT HAS BEEN SPOILED and/or DECAYED has supreme success. ' +
        'It furthers ' + ticker.tick.name + ' to cross great rivers (dangerous situations). ' +
        'The cause was rooted in the first of the last three timings (usually years), following which ' +
        'there will be another three timings of WORKING.';
    case types.LOCALE_ZHTW:
      return '(山風蠱) 本元亨通，利涉大川(危險之境地)；本因根緣於往回數三個時間點的第一個時間點 (通常為年)，隨後還有三個時間點要走 (原文：先甲三日，後甲三日)。';
  }
}

function yao7518(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(2nd verse) Setting right on the process that the other business (or country) has been aiding/fostering ' +
          ticker.tick.name + ' to reach the success and prosperity so far. ' + ticker.tick.name + ' must not be too persevering and ' +
          'even needs to bend to the "setting-right" if necessary.';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(第二爻) 對於 ' + ticker.tick.name + ' 能夠達到目前的成功及繁榮，有另外一個商業(或國家)在給予助力及孕育，如今這個過程要被整治了。' +
          ticker.tick.name + ' 不可不理或堅持己見，必要時甚至必須對"整治"弯腰。';
        case 1: return '';
      }
      break;
  }
}

function IC7518(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base7518(locale, ticker);
  obj.state1b = yao7518(locale, ticker, yao);
  switch (yao) {
    /*
    case 6:
      switch (ticker.door.type) {
        // yang:
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        // yin:
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    */
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base7752(locale, ticker); obj.state2b = yao7752(locale, ticker, yao); break; // 100110 -> 100100
      }
      break;
    /*
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ???; obj.state2b = ???; break;
        case types.TICKER_CYCLE2: obj.state2a = ???; obj.state2b = ???; break;
      }
      break;
    */
  }
  return obj;
}

/***** 7752 艮為山 100100 *****/

function base7752(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'KEEPING STILL. ' + ticker.tick.name + ' is searching the next right business/direction. Currently, ' + ticker.tick.name + ' is dangling on the past old business/direction. No blame. ' +
        '(Original: Keeping his back still, he no longer feels his body. He goes into his courtyard and does not see his people. No blame.)';
    case types.LOCALE_ZHTW:
      return '(艮為山) ' + ticker.tick.name + ' 在尋找下一個對的商業或方向，目前 ' + ticker.tick.name + ' 在原來的商業或方向上面懸了，這是無咎的 (原文：艮其背，不獲其身，行其庭，不見其人，无咎)。';
  }
}

function yao7752(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(2nd verse) Keeping his calves still. He cannot rescue him whom he follows. His heart is not glad.';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(第二爻) 看自己的小腿步法，看到時已經來不及救自己的誤判，心中相當不快。';
        case 1: return '';
      }
      break;
  }
}

/***** 8219 地澤臨 000011 *****/

function base8219(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'APPROACH has supreme success. Perseverance furthers. When the eighth month of the Chinese Farmer Calendar ' +
        'approaches (i.e., a month in Autumn, timing for harvest), watch for any precursors leading to the misfortune.';
    case types.LOCALE_ZHTW:
      return '(地澤臨) 本元亨通，利於貞定，當臨近于農曆八月，注意凶之前兆。';
  }
}

function yao8219(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) Great hearted approach, good fortune. Danger gets turned away, no blame.';
        case 5: return;
        case 4: return;
        case 3: return;
        case 2: return;
        case 1: return;
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 敦臨，吉，轉危為安，沒有咎害。';
        case 5: return;
        case 4: return;
        case 3: return;
        case 2: return;
        case 1: return;
      }
      break;
  }
}

/********************************************************************/

// Get the I-Ching Object:
export function getICO(locale, ticker) {
  let Obj;
  switch (ticker.door.fore) {
    case '00000': Obj = IC00000(locale, ticker); break;
    case '72416': Obj = IC7241(locale, ticker, parseInt(ticker.door.fore.slice(4))); break;
    case '75182': Obj = IC7518(locale, ticker, parseInt(ticker.door.fore.slice(4))); break;
    default:
      Obj = locale == types.LOCALE_ENUS ? Object.assign({}, ENUS_State_Obj) : Object.assign({}, ZHTW_State_Obj);
      break;
  }
  return Obj;
}
