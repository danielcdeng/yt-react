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

/***** xxxx ???? xxx.xxx *****/

function basexxxx(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return '';
    case types.LOCALE_ZHTW:
      return '() ';
  }
}

function yaoxxxx(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
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
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // xxxx

/***** 0000 易象起算 *****/

function IC0000(locale, ticker) {
  let obj;
  if (locale == types.LOCALE_ENUS) {                      // enus
    obj = Object.assign({}, ENUS_State_Obj);
    obj.state1a = 'Changing Image finding begins on ' + ticker.tick.name + ' (' + ticker.tick.titl + ')';
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw
    obj = Object.assign({}, ZHTW_State_Obj);
    obj.state1a += '易象起算 ' + ticker.tick.name + ' (' + ticker.tick.titl + ') ...';
  }
  return obj;
} // 0000

/***** 1425 天雷無妄 111.001 *****/

function base1425(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'INNOCENCE. The foundation is sound and smooth. Beneficial to have further perseverance. ' +
        'If someone is not as he should be and/or not doing the right thing, he would have misfortune and ' +
        'it does not further him to undertake anything.';
    case types.LOCALE_ZHTW:
      return '(天雷无妄) 本元亨通，利於貞定；若其人不正，則會有眚，不利有攸往。';
  }
}

function yao1425(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) Use no medicine in an illness. Incurred through no fault of your own. It will pass of itself.';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) Undeserved misfortune. The cow that was tethered by someone is the wanderer\'s gain, ' +
          'but the citizen\'s loss.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) 无妄之疾，勿藥有喜。';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 无妄之災，或繫之牛，行人之得，邑人之災。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC1425(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base1425(locale, ticker);
  obj.state1b = yao1425(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        // yang:
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        // yin:
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBD)'; obj.state2b = '(TBD)'; break; // 111.001 -> 101.001
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 111.001 -> 111.101
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 1425

/***** 1733 天山遁 111.100 *****/

function base1733(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'RETREAT. Although smooth and success, only small gain there will be in the process. ' +
        'The view toward the value of ' + ticker.tick.name + ' still holds and does not change. ' +
        'Perseverance furthers.';
    case types.LOCALE_ZHTW:
      return '(天山遁) 雖然亨通，只能小利，' + ticker.tick.name + ' 的價值貞定不變。';
  }
}

function yao1733(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) During retreat, investors should be still mindful about and pay attention to ' +
          ticker.tick.name + ', although the environment is nerve-wracking and dangerous. Accumulation: good fortune.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 於 ' + ticker.tick.name + ' 撤退之中，投資者仍然要對 ' + ticker.tick.name + ' 心有牽掛，' +
          '儘管環境有疾且厲。累積：吉。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC1733(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base1733(locale, ticker);
  obj.state1b = yao1733(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base1812(locale, ticker); obj.state2b = yao1812(locale, ticker, yao); break; // 111.100 -> 111.000
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 1733

/***** 1812 天地否 111.000 *****/

function base1812(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'STANDSTILL, caused by the force of the negative side. Not favorable to the perseverance of the superior man: ' +
        'the great departs, the small approaches.';
    case types.LOCALE_ZHTW:
      return '(天地否) 否之於陰門之勢，不利君子贞：大往，小来。';
  }
}

function yao1812(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) They bear shame.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 所包容的是羞恥之事 (原文：包羞)。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC1812(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base1812(locale, ticker);
  obj.state1b = yao1812(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 1812


/***** 2349 澤火革 011.101 *****/

function base2349(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'REFORM. Good fortune will come on the year that ends with 9. ' +
        'The foundation is good and smooth. Beneficial for long-term thinking, which furthers perseverance. ' +
        'Remorse disappears.';
    case types.LOCALE_ZHTW:
      return '(澤火革) 己日乃孚 (天干己年，指的是西元年份尾數為 9 的年份)，本元亨通，利於貞定，後悔消亡。';
  }
}

function yao2349(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '(3rd verse) A revolution, not a reform, would bring misfortune. But if standing still, it would ' +
          'bring danger, too. The situation is going to be very troublesome. Only three rounds of back-and-forth talks ' +
          'and negotiations for reaching the goal of reform would bring the trust-worthy result.';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '(第三爻) 革動之征，凶，但若又貞定不動，厲！革言三就，來回協商，才能有孚。';
        case 2: return '';
        case 1: return '';
      }
      break;
  }
}

function IC2349(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base2349(locale, ticker);
  obj.state1b = yao2349(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        // yang:
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        // yin:
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 2349

/***** 2417 澤雷隨 011.001 *****/

function base2417(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'FOLLOWING. ' + ticker.tick.name + ' continues to be a follower, eventually brings supreme success. ' +
        'Perseverance furthers. No blame.';
    case types.LOCALE_ZHTW:
      return '(澤雷隨) 隨之，' + ticker.tick.name + ' 繼續做個追隨者，最終會有極大的成功來到。';
  }
}

function yao2417(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '(3rd verse) The most important thing for ' + ticker.tick.name + ' is to cling to the primary ' +
          'strategic directions and let go the little ones such as "faces" issue. Through FOLLOWING, ' +
          ticker.tick.name + ' will find what it has been seeking for. During this timing, it is beneficial not to ' +
          'randomly derail from one\'s original path. One needs to remain persevering and play it cool.';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '(第三爻) 對 ' + ticker.tick.name + ' 來說，最重要的是抓住主要大戰略方向並且放掉那些小的例如面子問題，' +
          '則能在隨勢當中而有所求得；於此時機，利於不妄動而貞定泰然處之。';
        case 2: return '';
        case 1: return '';
      }
      break;
  }
}

function IC2417(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base2417(locale, ticker);
  obj.state1b = yao2417(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base2349(locale, ticker); obj.state2b = yao2349(locale, ticker, yao); break; // 011.001 -> 011.101
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 2417

/***** 3421 火雷噬嗑 101.001 *****/

function base3421(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'BITING THROUGH has success. It is favorable to let "justice" (cell block) be administered.';
    case types.LOCALE_ZHTW:
      return '(火雷噬嗑) 亨通，利用 "獄" (囚房，方塊格子)。';
  }
}

function yao3421(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) Bites on dried gristly meat. As a result, receives a metal (or gold) arrows. ' +
          'It means that ' + ticker.tick.name + ' has very good lucks which furthers it to be mindful of ' +
          'difficulties and to be persevering. Good fortune.';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) 吃乾胏肉，結果得了個金矢。這代表 ' + ticker.tick.name + ' 運氣好，利於艱難中守住貞定，吉。';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC3421(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base3421(locale, ticker);
  obj.state1b = yao3421(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 101.001 -> 100.001
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 3421

/***** 3756 火山旅 101.100 *****/

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
} // 3756

/***** 4134 雷天大壯 001.111 *****/

function base4134(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE POWER OF THE GREAT. Riding on the trend, perseverance furthers.';
    case types.LOCALE_ZHTW:
      return '(雷天大壯) 趁勢而起，利於貞定。';
  }
}

function yao4134(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) If initially the power is at the toes, then continuing would bring misfortune. This is certainly true.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) 若一開始則強壯于腳拇趾，則出征未來有凶象，這事情一定應驗。';
      }
      break;
  }
}

function IC4134(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base4134(locale, ticker);
  obj.state1b = yao4134(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 4134

/***** 4532 雷風恒 001.110 *****/

function base4532(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'DURATION. Smooth, no blame, perseverance furthers, it furthers one to have somewhere to go.';
    case types.LOCALE_ZHTW:
      return '(雷風恒) 亨通，无咎，利於貞定，利有攸往。';
  }
}

function yao4532(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) Seeking duration (big gain) too hastily at the beginning brings misfortune ' +
          'persistently. Nothing that would further.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) 若本門一開始就來個大波動(大獲利)，是為浚恒，則貞凶，无攸利。';
      }
      break;
  }
}

function IC4532(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base4532(locale, ticker);
  obj.state1b = yao4532(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base4134(locale, ticker); obj.state2b = yao4134(locale, ticker, yao); break; // 001.110 -> 001.111
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
  }
  return obj;
} // 4532

/***** 4762 雷山小過 001.100 *****/

function base4762(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'PREPONDERANCE OF THE SMALL. Success, favorable to have perseverance. ' +
        ticker.tick.name + ' may have small and slow rises, it must not have a sudden big rise in price. ' +
        'Like an ordinary bird which should not fly high as the big ones. ' +
        'Suitable to be in contemplation and sinking into deep thought and preparation.';
    case types.LOCALE_ZHTW:
      return '(雷山小過) 亨通，利於貞定，' + ticker.tick.name + ' 可以小小慢慢漲，不可一下子大漲。好像一般的鳥，' +
        '不宜像大鵬鳥般忽地沖天高飛。宜沈潛，大吉。';
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
        case types.TICKER_CYCLE1: obj.state2a = base3756(locale, ticker); obj.state2b = yao3756(locale, ticker, yao); break; // 001.100 -> 101.100
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 4762

/***** 5109 風天小畜 110.111 *****/

function base5109(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE TAMING POWER OF THE SMALL. Smooth, but ' + ticker.tick.name + ' is ' +
        'still filled with worries toward the future.';
    case types.LOCALE_ZHTW:
      return '(風天小畜) 亨通，但是 ' + ticker.tick.name + ' 對未來充滿著疑雲。';
  }
}

function yao5109(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) The spokes burst out of the wagon wheels. Man and wife roll their eyes.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 車輪飛脫，夫妻反目。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC5109(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base5109(locale, ticker);
  obj.state1b = yao5109(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 5109

/***** 5261 風澤中孚 110.011 *****/

function base5261(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'INNER TRUTH. Pigs and fishes, good fortune, there are gains. ' +
        'It furthers ' + ticker.tick.name + ' to cross the great "waters". ' +
        'Perseverance furthers.';
    case types.LOCALE_ZHTW:
      return '(風澤中孚) 豚魚吉，有收穫，利涉大川，利於貞定。';
  }
}

function yao5261(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ' + ticker.tick.name + ' (he) encounters the opposing force. ' +
          'He beats the drum, then he stops. He sobs, then he sings.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ' + ticker.tick.name + ' 得敵，或鼓或罷，或泣或歌。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC5261(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base5261(locale, ticker);
  obj.state1b = yao5261(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base5109(locale, ticker); obj.state2b = yao5109(locale, ticker, yao); break; // 110.011 -> 110.111
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 100.011 -> 110.001
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 5261

/***** 7126 山天大蓄 100.111 *****/

function base7126(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE TAMING POWER OF THE GREAT. Perseverance furthers ' + ticker.tick.name +
        ' to move forward. Not eating at home (meaning to seek out for new resources and/or partners) ' +
        'brings in good fortune, which furthers ' + ticker.tick.name + ' to cross great "waters".';
    case types.LOCALE_ZHTW:
      return '(山天大畜) 利貞，不家食(意指出外尋找新資源、夥伴)，吉，利涉大"川"。';
  }
}

function yao7126(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) Initially with hardship, but the long-term trend favors ' + ticker.tick.name;
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) 始有厲，但長期大勢利於 ' + ticker.tick.name;
      }
      break;
  }
}

function IC7126(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base7126(locale, ticker);
  obj.state1b = yao7126(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base7518(locale, ticker); obj.state2b = yao7518(locale, ticker, yao); break; // 100.111 -> 100.110
      }
      break;
  }
  return obj;
} // 7126

/***** 7241 山澤損 100.011 *****/

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
        case 5: return '(5th verse) Perhaps ' + ticker.tick.name + ' gets increased with ten pairs of tortoises (values), ' +
          'cannot oppose. Supreme good fortune.';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) Favorable to have perseverance on the vertical integration of ' + ticker.tick.name +
          '\'s business domain. It would be misfortune to extend oneself to different area such as that a fashion ' +
          'company buying out a telecommunication one. In a word, not only to stop decreasing the original business, ' +
          'but to increase it.';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 不能以損視之，反而是益之无咎，貞吉，利有攸往，得臣無家，意思是雙方合作以壯大勢力版圖。';
        case 5: return '(第五爻) 或益 ' + ticker.tick.name + ' 以十朋之龜 (價值)，弗克違，元吉。';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) 利於貞定在 ' + ticker.tick.name + '\'s 本業上的垂直整合，若跨領域如服裝行業的去做通訊業，則征凶。' +
          '言而總之，大原則為不僅不去損自己的本業，還要能去益之。';
        case 1: return '(第一爻) ';
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
        case types.TICKER_CYCLE2: obj.state2a = base8219(locale, ticker); obj.state2b = yao8219(locale, ticker, yao); break; // 100.011 -> 000.011
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 100.011 -> 110.011
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 100.011 -> 110.001
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 7241

/***** 7518 山風蠱 100.110 *****/

function base7518(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'WORKING ON WHAT HAS BEEN SPOILED and/or DECAYED has supreme success. ' +
        'It furthers ' + ticker.tick.name + ' to cross great rivers (dangerous situations). ' +
        'The cause was rooted in the first of the last three timings (usually years or quarters), ' +
        'following which there will be another three timings of WORKING.';
    case types.LOCALE_ZHTW:
      return '(山風蠱) 本元亨通，利涉大川(危險之境地)；本因根緣於往回數三個時間點的第一個時間點 (通常為年或季)，隨後還有三個時間點要走 ' +
        '(原文：先甲三日，後甲三日)。';
  }
}

function yao7518(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) The CEO/President of ' + ticker.tick.name + ' does not work for major ' +
          'investors/special-interest-groups. He is setting himself with higher goals.';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) Setting right what has been left by the predecessor. There will be a little remorse, ' +
          'no great blame/fault.';
        case 2: return '(2nd verse) Setting right on the process that the other business (or country) has been ' +
          'aiding/fostering ' + ticker.tick.name + ' to reach the success and prosperity so far. ' + ticker.tick.name +
          ' must not be too persevering and even needs to bend to the "setting-right" if necessary.';
        case 1: return '(1st verse) Setting right and/or resolving the issues left from the predecessor(s). ' +
          'Fortunately a talent/capable successor he is. Initially with hardship, but eventually with good fortune.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 此位 CEO/領導人 並不是為著主要投資人/特殊利益團體而工作。他給自己訂下了更高的目標。' +
          '(原文：不事王侯，高尚其事。)';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 整治前任留下來的事業，小有悔，无大咎。';
        case 2: return '(第二爻) 對於 ' + ticker.tick.name + ' 能夠達到目前的成功及繁榮，有另外一個商業(或國家)在給予助力及孕育，' +
          '如今這個過程要被整治了。' + ticker.tick.name + ' 不可不理或堅持己見，必要時甚至必須對"整治"弯腰。';
        case 1: return '(第一爻) 整治前任留下來的事業，幸賴有位能幹的繼承人，始厲，但最終為吉。';
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
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base7604(locale, ticker); obj.state2b = yao7604(locale, ticker, yao); break; // 100.110 -> 100.010
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base7752(locale, ticker); obj.state2b = yao7752(locale, ticker, yao); break; // 100.110 -> 100.100
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 100.110 -> 100.111
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
  }
  return obj;
}

/***** 7604 山水蒙 100.010 *****/

function base7604(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'YOUTHFUL FOLLY (like ' + ticker.tick.name + '\'s present situation) who listens to the market would have ' +
        'success. It is not the market/economy who seeks the young fool, it is the young fool who seeks the market/economy ' +
        'to accept him. At the first sign, the market did inform him. If he doesn\'t get the first point, he mey be given ' +
        'a second chance. At the third time, it only proves that he is a true folly and is importunity, then lastly the ' +
        'market would stop giving him further chances. Thus, only wisdom and perseverance may turn the tide.';
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
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) Take not a maiden who, when she sees a man of gold, would lose possession of herself. ' +
          'Nothing furthers.';
        case 2: return '(2nd verse) With wisdom, he turns around the fools with good fortune. ' +
          'It is like he marries a good woman who delivers son(s) to manage the house in good order.';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 勿用取女，見金夫，不有躬，无攸利。';
        case 2: return '(第二爻) 他用智慧包蒙，吉，如同娶了一個吉婦，得子克家。';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC7604(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base7604(locale, ticker);
  obj.state1b = yao7604(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 100.010 -> 100.110
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 7604

/***** 7752 艮為山 100.100 *****/

function base7752(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'KEEPING STILL. ' + ticker.tick.name + ' is searching the next right business/direction. Currently, ' +
        ticker.tick.name + ' is dangling on the past old business/direction. No blame. (Original: Keeping his back ' +
        'still, he no longer feels his body. He goes into his courtyard and does not see his people. No blame.)';
    case types.LOCALE_ZHTW:
      return '(艮為山) ' + ticker.tick.name + ' 在尋找下一個對的商業或方向，目前 ' + ticker.tick.name + ' 在原來的商業或方向' +
        '上面懸了，這是無咎的 (原文：艮其背，不獲其身，行其庭，不見其人，无咎)。';
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
        case 1: return '(第一爻) ';
      }
      break;
  }
}

/***** 8219 地澤臨 000.011 *****/

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
        case 1: return '(第一爻) ';
      }
      break;
  }
}

/***** 8336 地火明夷 000.101 *****/

function base8336(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'DARKENING OF THE LIGHT. In adversity (negative), if ' + ticker.tick.name + ' could still hold the perseverance, ' +
        'it would be beneficial.';
    case types.LOCALE_ZHTW:
      return '(地火明夷) 艱難中若 ' + ticker.tick.name + ' 仍能有貞定，則利。';
  }
}

function yao8336(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(2nd verse) ' + ticker.tick.name + ' gets injuried on the "left thigh", thus it cannot continue ' +
          'to march forward. Pay attention to its recovery speed. If it is quick, then good fortune.';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '(第二爻) ' + ticker.tick.name + ' 被傷到了"左大腿"，以至於它不能繼續往前邁進。此時注意其復原速度，若甚快，吉。';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC8336(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base8336(locale, ticker);
  obj.state1b = yao8336(locale, ticker, yao);
  switch (yao) {
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 000.101 -> 000.111
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = ''; obj.state2b = ''; break;
        case types.TICKER_CYCLE2: obj.state2a = ''; obj.state2b = ''; break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 8336

/***** 8546 地風升 000.110 *****/

function base8546(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'PUSHING UPWARD has supreme success because the foundation is smooth and good. ' +
        'However, is ' + ticker.tick.name + ' being managed by a great CEO (company) or President (country)? ' +
        'If yes, then fear not, ' + ticker.tick.name + ' should departure or march toward the ' +
        'south where there is good fortune (i.e., "south" means to further draw down the product price and make ' +
        'it more affordable).';
    case types.LOCALE_ZHTW:
      return '(地風升) 本元亨通，雖然如此，目前 ' + ticker.tick.name + ' 是否被一位大人所掌管？若是，對於目前局勢，勿恤，' +
        '南征吉 ("南"指的是降低商品售價，使其更加平價近人)。';
  }
}

function yao8546(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) Pushing upward in darkness (or darkness is being pushed upward). ' +
          'It prompts one to be unremittingly cautious, disciplinary and/or persevering the right way of investment.';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 冥升，利于不息之貞。註：貞字在此處有 小心，紀律，堅持投資正道的意義。';
        case 5: return '';
        case 4: return '';
        case 3: return '';
        case 2: return '';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC8546(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base8546(locale, ticker);
  obj.state1b = yao8546(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base7518(locale, ticker); obj.state2b = yao7518(locale, ticker, yao); break;
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 000.101 -> 000.111
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 8546

/********************************************************************/

export function getICO(locale, ticker) {
  let Obj;
  const yao = parseInt(ticker.door.fore.slice(4));
  switch (ticker.door.fore.slice(0,4)) {
    case'0000': Obj = IC0000(locale, ticker); break;
    //
    case'1425': Obj = IC1425(locale, ticker, yao); break;
    case'1733': Obj = IC1733(locale, ticker, yao); break;
    //
    case'2417': Obj = IC2417(locale, ticker, yao); break;
    //
    case'3421': Obj = IC3421(locale, ticker, yao); break;
    //
    case'4532': Obj = IC4532(locale, ticker, yao); break;
    case'4762': Obj = IC4762(locale, ticker, yao); break;
    //
    case'5261': Obj = IC5261(locale, ticker, yao); break;
    //
    case'7126': Obj = IC7126(locale, ticker, yao); break;
    case'7241': Obj = IC7241(locale, ticker, yao); break;
    case'7518': Obj = IC7518(locale, ticker, yao); break;
    case'7604': Obj = IC7604(locale, ticker, yao); break;
    //
    case'8336': Obj = IC8336(locale, ticker, yao); break;
    case'8546': Obj = IC8546(locale, ticker, yao); break;
    //
    default: Obj = locale == types.LOCALE_ENUS ? Object.assign({},ENUS_State_Obj) : Object.assign({},ZHTW_State_Obj); break;
  }
  return Obj;
}
