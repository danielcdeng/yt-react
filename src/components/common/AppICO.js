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
        case 6: return '(6th verse) Innocent/surprising action brings misfortune. Nothing furthers.';
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
        case 6: return '(第六爻) 意外之行，有災，無所利。';
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base2417(locale, ticker); obj.state2b = yao2417(locale, ticker, yao); break; // 111.001 -> 011.001
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 111.001 -> 101.001
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
        case 6: return '(6th verse) The standstill comes to an end. First standstill, then good fortune.';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) They bear shame.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 傾否，先否後喜。';
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
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) A revolution, not a reform, would bring misfortune. But if standing still, it would ' +
          'bring danger, too. The situation is going to be very troublesome. Only three rounds of back-and-forth talks ' +
          'and negotiations for reaching the goal of reform would bring the trust-worthy result.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) Not powerful enough. Can not have great estalishment. ' +
          'Thus a good fortune if the foundation can be kept well.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 革動之征，凶，但若又貞定不動，厲！革言三就，來回協商，才能有孚。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) 力量不夠，無法有大做為，仍以鞏固基礎為吉。';
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
        case 6: return '(6th verse) Captured, then released, the King celebrates.';
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
        case 6: return '(第六爻) 先是被紂王抓來囚禁，後來才被釋放，文王在西山舉行享祀。';
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
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break; // 011.001 -> 111.001
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

/***** 2647 澤水困 011.010 *****/

function base2647(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'OPPRESSION, EXHAUSTING';
    case types.LOCALE_ZHTW:
      return '澤水困';
  }
}

function yao2647(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return 'A man is oppressed by stone and he has to lean on thorns and thistles. ' +
          'He enters his house and does not see his spouse. Misfortune.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '困于石，據于蒺蔾，入于其宮，不見其妻，凶。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC2647(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base2647(locale, ticker);
  obj.state1b = yao2647(locale, ticker, yao);
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
} // 2647

/***** 2731 澤山咸 011.100 *****/

function base2731(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'INFLUENCE, MUTUAL INFLUENCE';
    case types.LOCALE_ZHTW:
      return '澤山咸';
  }
}

function yao2731(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return 'Mutual influence on one\'s thighs. If insist on his following, going forward will bring humiliation.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) The influence only shows itself at the big toe.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '咸其股，執其隨，往吝。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) 咸其拇，咸感的力量只應在腳拇指。';
      }
      break;
  }
}

function IC2731(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base2731(locale, ticker);
  obj.state1b = yao2731(locale, ticker, yao);
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
        case types.TICKER_CYCLE1: obj.state2a = base2349(locale, ticker); obj.state2b = yao2349(locale, ticker, yao); break; // 011.100 -> 011.101
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
  }
  return obj;
} // 2731

/***** 2845 澤地萃 011.000 *****/

function base2845(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'GATHERING TOGETHER, BRINGING TOGETHER';
    case types.LOCALE_ZHTW:
      return '澤地萃';
  }
}

function yao2845(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) Lamenting and sighing, floods of tears, such a development, no mistake.';
        case 5: return '(5th verse) If in gathering together one has position, this brings no blame. ' +
          'If there are some who are not yet sincerely in the work, sublime and enduring perseverance is needed. ' +
          'Then remorse disappears.';
        case 4: return '(4th verse) ';
        case 3: return 'Gathering together but sighs will fall in, nothing furthers. ' +
          'If insists on going, although seems no fault and no blame, the end result will be slight humiliation.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 悲傷嘆息，痛哭流涕，如此地步，並無有誤。';
        case 5: return '(第五爻) 萃有位，无咎，匪孚；元永貞，悔亡。';
        case 4: return '(第四爻) ';
        case 3: return '萃如，嗟如，无攸利；若往，无咎，小吝而已。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC2845(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base2845(locale, ticker);
  obj.state1b = yao2845(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base1812(locale, ticker); obj.state2b = yao1812(locale, ticker, yao); break; // 011.000 -> 111.000
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
        case types.TICKER_CYCLE1: obj.state2a = base2731(locale, ticker); obj.state2b = yao2731(locale, ticker, yao); break; // 011.000 -> 011.100
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
} // 2845

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
        case 6: return '(6th verse) His neck is fastened in the wooden cangue, so that his ears disappear. Misfortune.';
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
        case 6: return '(第六爻) 枷鎖套到頭上，耳朵被割，凶。';
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

/***** 3550 火風鼎 101.110 *****/

function base3550(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE CALDRON. Supreme good fortune. Success.';
    case types.LOCALE_ZHTW:
      return '(火風鼎) 元吉，亨通。';
  }
}

function yao3550(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) My caldron is full and filled. The oppenent is ill, but there is a disconnection ' +
          'between my caldron and the opponent (thus my caldron won\'t be touched). Good fortune.';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) 我鼎充實，雖仇有疾，但不能即鼎，故於我為吉。(原文：鼎有實，我仇有疾，不我能即，吉。)';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC3550(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base3550(locale, ticker);
  obj.state1b = yao3550(locale, ticker, yao);
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
} // 3550

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
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) The traveler comes to an inn. He has his money with him and obtains a trust-worthy servant. ' +
          'The journey can be continued.';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 若旅人先嘲笑鳥因為其巢被焚，那麼而後他自己也會號咷大哭，因為他自己也在一個叫做"易"的地方丟失了資產，凶。' +
          '解釋：注意其他公司(或國家)的同類質生意之失敗是否可能是在說資本已經轉向了，而不是自我高興說別人的失敗就是自己的成功。';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) 行旅到了旅舍，有財物帶於身，得到了值得信任的童僕，可以繼續走下去。';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC3756(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base3756(locale, ticker);
  obj.state1b = yao3756(locale, ticker, yao);
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
        case types.TICKER_CYCLE1: obj.state2a = base3550(locale, ticker); obj.state2b = yao3550(locale, ticker, yao); break; // 101.100 -> 101.110
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
} // 3756

/***** 火地晉 3835 101.000 *****/

function base3835(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'PROGRESS, PROCEEDING FORWARD';
    case types.LOCALE_ZHTW:
      return '火地晉';
  }
}

function yao3835(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return 'Progressing into the horn, no room for further progress. What is left is conquering, akthough adversity, good fortune. Being steadfast: humiliation.';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '晉勢至尖角，無法再升，維用伐邑，厲吉无咎，貞吝。';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC3835(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base3835(locale, ticker);
  obj.state1b = yao3835(locale, ticker, yao);
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
} // 3835

/***** 4134 雷天大壯 001.111 *****/

function base4134(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE POWER OF THE GREAT, GREAT STRENGTH';
    case types.LOCALE_ZHTW:
      return '雷天大壯';
  }
}

function yao4134(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) A goat butts against a hedge, it cannot go backward, it cannot go forward. ' +
          'Nothing serves to further. If one notes the difficulty, this brings good fortune.';
        case 5: return 'Lose a ram in the field, but no regret (because it will gain back in the future).';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) If initially the power is at the toes, then continuing would bring misfortune. This is certainly true.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 公羊頂撞籬笆，羊角被卡住，不能進也不能退，沒有任何好處，知艱則吉。';
        case 5: return '喪羊于易，无悔 (因為會在將來得回)。';
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
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
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

/***** 雷澤歸妹 4254 001.011 *****/

function base4254(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE MARRYING MAIDEN. Undertakings bring misfortune. Nothing that would further.';
    case types.LOCALE_ZHTW:
      return '(雷澤歸妹) 征凶，无攸利。';
  }
}

function yao4254(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) The present timing is not right.';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 目前行事時機不對。';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC4254(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base4254(locale, ticker);
  obj.state1b = yao4254(locale, ticker, yao);
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
} // 4254

/***** 4451 震為雷 001.001 *****/

function base4451(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'SHOCK brings success. Shock comes-oh, oh! Laughing words later-ha, ha! The shock terrifies for a ' +
        'hundred miles but sacrificial spoons and chalices will not be lost. ' +
        'The current timing indicates that the bitterness will come before the sweetness.';
    case types.LOCALE_ZHTW:
      return '(震為雷) 震，讓人害怕驚呼連連，但後來笑顏漸開；震，驚動百里，但祭祀器物不會喪失；目前震的時機有先苦後甘之意。';
  }
}

function yao4451(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) Shock brings ruin and terrified gazing around. Going ahead brings misfortune. ' +
          'If it has not yet touched one\'s own body but has reached one\'s neighbor first, no fault. ' +
          'One\'s comrades have something to talk about.';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) 震索索，視矍矍，征凶；若只震到鄰居則自己无咎，但別人會有討論。';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC4451(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base4451(locale, ticker);
  obj.state1b = yao4451(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base3421(locale, ticker); obj.state2b = yao3421(locale, ticker, yao); break;
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
} // 4451

/***** 4532 雷風恒 001.110 *****/

function base4532(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'DURATION, LONG LASTING';
    case types.LOCALE_ZHTW:
      return '雷風恒';
  }
}

function yao4532(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return 'There are no birds/animals in the field.';
        case 3: return '(3rd verse) ';
        case 2: return 'A price line of making regret vanish.';
        case 1: return 'Seeking duration (big gain) too hastily at the beginning brings misfortune ' +
          'persistently. Nothing that would further.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '田无禽。';
        case 3: return '(第三爻) ';
        case 2: return '一條可以使後悔消亡的價格線。';
        case 1: return '若本門一開始就來個大波動(大獲利)，是為浚恒，則貞凶，无攸利。';
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
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

/***** 4816 雷地豫 001.000 *****/

function base4816(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'ENTHUSIASM, DELIGHT';
    case types.LOCALE_ZHTW:
      return '雷地豫';
  }
}

function yao4816(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return 'The delight has reached the end. Make a change: no default.';
        case 5: return '(5th verse) Persistently ill, and still does not die.';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '豫樂之道已走到盡頭，成就在於改變，知變而變則无咎。';
        case 5: return '(第五爻) 貞疾，恒不死。';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC4816(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base4816(locale, ticker);
  obj.state1b = yao4816(locale, ticker, yao);
  switch (yao) {
    case 6:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base3835(locale, ticker); obj.state2b = yao3835(locale, ticker, yao); break; // 001.000 -> 101.000
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 5:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = base2845(locale, ticker); obj.state2b = yao2845(locale, ticker, yao); break; // 001.000 -> 011.000
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
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
} // 4816

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
      return 'INNER TRUTH, INNERMOST SINCERITY' +
        'Perseverance furthers.';
    case types.LOCALE_ZHTW:
      return '風澤中孚';
  }
}

function yao5261(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return 'He possesses truth, which links others together. No blame.';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ' + ticker.tick.name + ' (he) encounters the opposing force. ' +
          'He beats the drum, then he stops. He sobs, then he sings.';
        case 2: return 'A crane calling in the shade. Its young answers it: I have a good goblet, ' +
          'I will share it with you.';
        case 1: return '(1st verse) Being contemplated and prepared can bring good fortune. ' +
          'If there are secret designs and/or unexpected events, then it would be disquieting.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '有孚，攣如，无咎。';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ' + ticker.tick.name + ' 得敵，或鼓或罷，或泣或歌。';
        case 2: return '鳴鶴在陰，其子和之，我有好爵，吾與爾靡之。';
        case 1: return '(第一爻) 三思有所準備則吉，有它不燕，字面意思為遇大蛇或意外而讓人不安。';
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base7241(locale, ticker); obj.state2b = yao7241(locale, ticker, yao); break;
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base5442(locale, ticker); obj.state2b = yao5442(locale, ticker, yao); break; // 110.011 -> 110.001
      }
      break;
    case 1:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base5659(locale, ticker); obj.state2b = yao5659(locale, ticker, yao); break; // 110.011 -> 110.010
      }
      break;
  }
  return obj;
} // 5261

/***** 5442 風雷益 110.001 *****/

function base5442(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'INCREASING, BENEFITING';
    case types.LOCALE_ZHTW:
      return '風雷益';
  }
}

function yao5442(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return 'If one walks in the middle way (Dao) and reports to the prince, he will follow, ' +
          'even on the issue such as the move of the prince\'s capital.';
        case 3: return '(3rd verse) Working hard to rescue and save dangerous and unfortunate events. No blame. ' +
          ticker.tick.name + ' should keep open and honest communications in order to earn the trust from the investors.';
        case 2: return 'Someone does indeed increase him; ten pairs of tortoises (valuables) cannot oppose it. ' +
          'Constant perseverance brings good fortune. The king presents him before God. Good fortune.';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '人若中行於道，告其主公，則主公定聽從，利用為依，就算是像遷國這樣子的大事。';
        case 3: return '(第三爻) 努力救濟凶阨之事，无咎，但應秉持誠信，該做則做，並公告取信於眾投資人。(原文：益之用凶事，无咎。有孚中行，告公用圭。)';
        case 2: return '或益之十朋之龜，弗克違，永貞，吉；王用享于帝，吉。';
        case 1: return '(第一爻) ';
      }
      break;
  }
}

function IC5442(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base5442(locale, ticker);
  obj.state1b = yao5442(locale, ticker, yao);
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
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
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
} // 5442

/***** 5659 風水渙 110.010 *****/

function base5659(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'DISPERSION. Success. The King arrives at his temple. It furthers one to cross the great water. ' +
        'Perseverance furthers.';
    case types.LOCALE_ZHTW:
      return '(風水渙) 亨，王至於廟，利涉大川，利貞。';
  }
}

function yao5659(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return '(1st verse) He brings help with the strength of a horse. Good fortune.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '(第一爻) 以強壯的馬來拯救，吉。';
      }
      break;
  }
}

function IC5659(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base5659(locale, ticker);
  obj.state1b = yao5659(locale, ticker, yao);
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
} // 5659

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
      return 'DECREASING, LOSING';
    case types.LOCALE_ZHTW:
      return '山澤損';
  }
}

function yao7241(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) Cannot treat it as a DECREASE. On the contrary, it is a benefit, not a fault. ' +
          'Perseverance brings good fortune and it furthers ' + ticker.tick.name + ' to undertake cooperation from ' +
          'other parties in order to expand the ' + ticker.tick.name + '\'s market share and influence.';
        case 5: return 'Perhaps ' + ticker.tick.name + ' gets increased with ten pairs of tortoises (values), ' +
          'cannot oppose. Supreme good fortune.';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) When three people journey together, their number increases by one. ' +
          'When one man journeys alone, he finds a companion.';
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
        case 5: return '或益之十朋之龜，弗克違，元吉。';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) 三人行，則損一人，一人行，則得其友。';
        case 2: return '(第二爻) 利貞 (跨非本業則凶)，不被損而會被益之。';
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
    case 4:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
    case 3:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
      }
      break;
    case 2:
      switch (ticker.door.type) {
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base8546(locale, ticker); obj.state2b = yao8546(locale, ticker, yao); break; // 100.110 -> 000.110
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
      return 'YOUTHFUL FOLLY, CHILDHOOD';
    case types.LOCALE_ZHTW:
      return '山水蒙';
  }
}

function yao7604(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return 'Punishing the ignorant. Not favorable to treat like a foe. Favorable to actively prevent further mischief.';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return 'Take not such a maiden: If she sees a man of gold and would lose possession of herself, ' +
          'then she has nothing furthers.';
        case 2: return '(2nd verse) With wisdom, he turns around the fools with good fortune. ' +
          'It is like he marries a good woman who delivers son(s) to manage the house in good order.';
        case 1: return '(1st verse) ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '應該走出無知蒙昧，為了打破童蒙的無知，一切應化為主動。';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '勿用取女：若見金夫變得不有躬，則此女无攸利。';
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = base8607(locale, ticker); obj.state2b = yao8607(locale, ticker, yao); break; // 100.010 -> 000.010
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

/***** 地天泰 8111 000.111 *****/

function base8111(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'PEACE, ADVANCE';
    case types.LOCALE_ZHTW:
      return '地天泰';
  }
}

function yao8111(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return '(6th verse) ';
        case 5: return '(5th verse) ';
        case 4: return '(4th verse) ';
        case 3: return '(3rd verse) ';
        case 2: return '(2nd verse) ';
        case 1: return 'When ribbon grass is pulled up, the sod comes with it. Each according to his kind. ' +
          'Undertakings bring good fortune.';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '(第六爻) ';
        case 5: return '(第五爻) ';
        case 4: return '(第四爻) ';
        case 3: return '(第三爻) ';
        case 2: return '(第二爻) ';
        case 1: return '拔茅草的根，一拔就一整串的牽連而出，象徵出征大吉。';
      }
      break;
  }
}

function IC8111(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base8111(locale, ticker);
  obj.state1b = yao8111(locale, ticker, yao);
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
        case types.TICKER_CYCLE1: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
        case types.TICKER_CYCLE2: obj.state2a = '(TBA)'; obj.state2b = '(TBA)'; break;
      }
      break;
  }
  return obj;
} // 8111

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
      return 'PUSHING UPWARD, RISING';
    case types.LOCALE_ZHTW:
      return '地風升';
  }
}

function yao8546(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return 'Pushing upward in darkness (or darkness is being pushed upward). ' +
          'It prompts one to be unremittingly cautious, disciplinary and/or persevering the right way of investment.';
        case 5: return '';
        case 4: return 'The king offers him at the sacred Mount Ch\'i. Good fortune. No blame.';
        case 3: return '';
        case 2: return '';
        case 1: return '';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '冥升，利于不息之貞。註：貞字在此處有 小心，紀律，堅持投資正道的意義。';
        case 5: return '';
        case 4: return '王用亨于岐山，吉，无咎。';
        case 3: return '';
        case 2: return '';
        case 1: return '';
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
        case types.TICKER_CYCLE1: obj.state2a = base4532(locale, ticker); obj.state2b = yao4532(locale, ticker, yao); break; // 000.110 -> 001.110
        case types.TICKER_CYCLE2: obj.state2a = sameAs1a(locale); obj.state2b = sameAs1b(locale); break;
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

/***** 8607 地水師 000.010 *****/

function base8607(locale, ticker) {
  switch (locale) {
    case types.LOCALE_ENUS:
      return 'THE ARMY, MULTITUDE';
    case types.LOCALE_ZHTW:
      return '地水師';
  }
}

function yao8607(locale, ticker, yao) {
  switch (locale) {
    case types.LOCALE_ENUS:
      switch (yao) {
        case 6: return 'The great King issues commands: Founds states, vests families with fiefs, ' +
          'inferior people should not be employed.';
        case 5: return ' ';
        case 4: return ' ';
        case 3: return ' ';
        case 2: return ' ';
        case 1: return ' ';
      }
      break;
    case types.LOCALE_ZHTW:
      switch (yao) {
        case 6: return '大君有命，開國承家，小人勿用。';
        case 5: return ' ';
        case 4: return ' ';
        case 3: return ' ';
        case 2: return ' ';
        case 1: return ' ';
      }
      break;
  }
}

function IC8607(locale, ticker, yao) {
  let obj;
  obj = getDefault(locale);
  obj.state1a = base8607(locale, ticker);
  obj.state1b = yao8607(locale, ticker, yao);
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
} // 8607

/********************************************************************/

export function getICO(locale, ticker) {
  let Obj;
  const yao = parseInt(ticker.door.fore.slice(4));
  switch (ticker.door.fore.slice(0,4)) {
    case '0000': Obj = IC0000(locale, ticker); break;
    //
    case '1425': Obj = IC1425(locale, ticker, yao); break;
    case '1733': Obj = IC1733(locale, ticker, yao); break;
    //
    case '2417': Obj = IC2417(locale, ticker, yao); break;
    case '2647': Obj = IC2647(locale, ticker, yao); break;
    case '2731': Obj = IC2731(locale, ticker, yao); break;
    case '2845': Obj = IC2845(locale, ticker, yao); break;
    //
    case '3421': Obj = IC3421(locale, ticker, yao); break;
    case '3756': Obj = IC3756(locale, ticker, yao); break;
    case '3835': Obj = IC3835(locale, ticker, yao); break;
    //
    case '4134': Obj = IC4134(locale, ticker, yao); break;
    case '4254': Obj = IC4254(locale, ticker, yao); break;
    case '4451': Obj = IC4451(locale, ticker, yao); break;
    case '4532': Obj = IC4532(locale, ticker, yao); break;
    case '4762': Obj = IC4762(locale, ticker, yao); break;
    case '4816': Obj = IC4816(locale, ticker, yao); break;
    //
    case '5261': Obj = IC5261(locale, ticker, yao); break;
    case '5442': Obj = IC5442(locale, ticker, yao); break;
    //
    case '7126': Obj = IC7126(locale, ticker, yao); break;
    case '7241': Obj = IC7241(locale, ticker, yao); break;
    case '7518': Obj = IC7518(locale, ticker, yao); break;
    case '7604': Obj = IC7604(locale, ticker, yao); break;
    //
    case '8111': Obj = IC8111(locale, ticker, yao); break;
    case '8336': Obj = IC8336(locale, ticker, yao); break;
    case '8546': Obj = IC8546(locale, ticker, yao); break;
    //
    default: Obj = locale == types.LOCALE_ENUS ? Object.assign({},ENUS_State_Obj) : Object.assign({},ZHTW_State_Obj); break;
  }
  return Obj;
}
