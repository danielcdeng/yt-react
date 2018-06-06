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

/***** 3756 火山旅 101100 *****/

function base3756(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'TRAVELER. Success through smallness. Perseverance brings good fortune to ' + ticker.tick.name +
        ' as the traveler who has contemplation and deep thoughts/planning.';
    case types.LOCALE_ZHTW:
      return '(火山旅) 一步一腳印，由小至亨，深思計畫，吉。';
  }
}

function yao3756(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) If the traveler laughs at the bird whose nest got burned up, ' +
          'then he would also lament and weep because he also would lose his assets on a land called "Yi", misfortune. ' +
          'Meaning: The failures of other companies (or nations) with the same business could be warnings because ' +
          'they could mean that the capitals have changed the direction, rather than that other people\'s failures ' +
          'would automatically become own\'s success.';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 若旅人先嘲笑鳥因為其巢被焚，那麼而後他自己也會號咷大哭，因為他自己也在一個叫做"易"的地方丟失了資產，凶。' +
          '解釋：其他公司(或國家)的同類質生意之失敗可能是在說資本已經轉向了，而不是自我高興說別人的失敗就直接是自己的成功。';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
  }
}

/***** 4762 雷山小過 001100 *****/

function base4762(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'PREPONDERANCE OF THE SMALL. Success, favorable to have perseverance. ' +
        ticker.tick.name + ' may have small and slow rises, it must not have a sudden big rise in price. ' +
        'Like an ordinary bird which should not fly high as the big ones. ' +
        'Suitable to be in contemplation and sinking into deep thought and preparation.';
    case types.LOCALE_ZHTW:
      return '(雷山小過) 亨通，利於貞定，' + ticker.tick.name + ' 可以小小慢慢漲，不可一下子大漲。好像一般的鳥，不宜像大鵬鳥般忽地沖天高飛。宜沈潛，大吉。';
  }
}

function yao4762(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) If shooting straight up, then the long-term good fortune would leave ' + ticker.tick.name + '. ' +
          'Misfortune. This means calamity and trouble.';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 若沖天高飛，則長期好運離之，凶，是謂災眚。';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
  }
}

function IC4762(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base4762(locale, ticker);
  obj.state1b = yao4762(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base3756(locale, ticker); obj.state2b = yao3756(locale, ticker, yao); break; // 001100 (4762) -> 101100 (3756)
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
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
        case 3: return '(3rd verse) Setting right what has been left by the predecessor. There will be a little remorse, no great blame/fault.';
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
        case 3: return '(第三爻) 整治前任留下來的事業，小有悔，无大咎。';
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
    */
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base7604(locale, ticker); obj.state2b = yao7604(locale, ticker, yao); break; // 100110 -> 100010
      }
      break;
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

/***** 7604 山水蒙 100010 *****/

function base7604(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'YOUTHFUL FOLLY (like ' + ticker.tick.name + '\'s present situation) who listens to the market would have success. ' +
        'It is not the market/economy who seeks the young fool, it is the young fool who seeks the market/economy to accept him. ' +
        'At the first sign, the market did inform him. If he doesn\'t get the first point, he mey be given a second chance. ' +
        'At the third time, it only proves that he is a true folly and is importunity, then lastly the market would stop giving him further chances. ' +
        'Thus, only wisdom and perseverance may turn the tide.';
    case types.LOCALE_ZHTW:
      return '(山水蒙) 童蒙如同 ' + ticker.tick.name + ' 目前的狀況，假若他听的懂市場對他說的話，則他會成功。' +
        '不是市場要求他，而是他要求市場接受他。起初市場已經給過他第一個徵兆，若他仍然听沒懂，可能他還有第二個機會。' +
        '到第三次，這只是證明他是個真正的死纏爛打的蠢蛋，則市場會停止再給他機會。所以，智慧及決心才可扭轉情勢。';
  }
}

function yao7604(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return 'With wisdom, he turns around the fools with good fortune. ' +
          'It is like he marries a good woman who delivers son(s) to manage the house in good order.';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(第二爻) 他用智慧包蒙，吉，如同娶了一個吉婦，得子克家。';
        case 1: return '';
      }
      break;
  }
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
    case '47626':
      Obj = IC4762(locale, ticker, parseInt(ticker.door.fore.slice(4))); break;
    case '72416':
      Obj = IC7241(locale, ticker, parseInt(ticker.door.fore.slice(4))); break;
    case '75182': case '75183':
      Obj = IC7518(locale, ticker, parseInt(ticker.door.fore.slice(4))); break;
    default:
      Obj = locale == types.LOCALE_ENUS ? Object.assign({}, ENUS_State_Obj) : Object.assign({}, ZHTW_State_Obj);
      break;
  }
  return Obj;
}
