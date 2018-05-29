import * as types from '../../actions/actionTypes';

const ENUS_State_Obj = {
  state1: 'State.1a: ',
  inner1: 'Inner.1b: ',
  state2: 'State.2a: ',
  inner2: 'Inner.2b: '
};

const ZHTW_State_Obj = {
  state1: '狀態.1a: ',
  inner1: '內部.1b: ',
  state2: '狀態.2a: ',
  inner2: '內部.2b: '
};

// The ICxxxxx function template:
function ICxxxxx(locale, ticker) {
  let obj;
  //
  if (locale == types.LOCALE_ENUS) {                      // enus: state1
    obj = Object.assign({}, ENUS_State_Obj);
    obj.state1 += '';
    obj.inner1 += '';
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw: state1
    obj = Object.assign({}, ZHTW_State_Obj);
    obj.state1 += '';
    obj.inner1 += '';
  }
  //
  if (locale == types.LOCALE_ENUS) {                      // enus: state2
    obj = Object.assign({}, ENUS_State_Obj);
    if (ticker.door.type == types.TICKER_CYCLE1) {        // yang
      obj.state2 += '';
      obj.inner2 += '';
    } else if (ticker.door.type == types.TICKER_CYCLE2) { // yin
      obj.state2 += '';
      obj.inner2 += '';
    }
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw: state2
    obj = Object.assign({}, ZHTW_State_Obj);
    if (ticker.door.type == types.TICKER_CYCLE1) {        // yang
      obj.state2 += '';
      obj.inner2 += '';
    } else if (ticker.door.type == types.TICKER_CYCLE2) { // yin
      obj.state2 += '';
      obj.inner2 += '';
    }
  }
}

function IC00000(locale, ticker) {
  let obj;
  if (locale == types.LOCALE_ENUS) {                      // enus
    obj = Object.assign({}, ENUS_State_Obj);
    if (ticker.door.type == types.TICKER_CYCLE1) {        // yang
      obj.state1 += 'Beginning to compute ' + ticker.tick.name + ' (' + ticker.tick.titl + ') ...';
    } else if (ticker.door.type == types.TICKER_CYCLE2) { // yin
      obj.state1 += 'Beginning to compute ' + ticker.tick.name + ' (' + ticker.tick.titl + ') ...';
    }
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw
    obj = Object.assign({}, ZHTW_State_Obj);
    if (ticker.door.type == types.TICKER_CYCLE1) {        // yang
      obj.state1 += '起算易象 ' + ticker.tick.name + ' (' + ticker.tick.titl + ') ...';
    } else if (ticker.door.type == types.TICKER_CYCLE2) { // yin
      obj.state1 += '起算易象 ' + ticker.tick.name + ' (' + ticker.tick.titl + ') ...';
    }
  }
}

function IC72416(locale, ticker) {
  let obj;
  //
  if (locale == types.LOCALE_ENUS) {                      // enus: state1
    obj = Object.assign({}, ENUS_State_Obj);
    obj.state1 += 'DECREASE comes with sincerity. ' +
      'Brings about supreme good fortune, thus DECREASE comes without blame. ' +
      ticker.tick.name + ' may be persevering in this, thus, it furthers ' + ticker.tick.name + ' to undertake something. ' +
      'How is this to be carried out? ' + ticker.tick.name + ' (one) may become two (= 1 + 1) start a good beginning.';
    obj.inner1 += '(6th verse) Cannot regard it as a DECREASE, on the contrary, it is a benefit, not a fault. ' +
      'Perseverance brings good fortune. It furthers ' + ticker.tick.name + ' to undertake something. ' +
      ticker.tick.name + ' will obtain cooperation from another party in order to expand the market together.';
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw: state1
    obj = Object.assign({}, ZHTW_State_Obj);
    obj.state1 += '(山澤損) 有孚誠信，本元吉利，無咎錯，可貞，利有攸往；曷以之用，要成一對才可視為好的開始。';
    obj.inner1 += '(第六爻) 不能以損視之，反而是益之无咎，貞吉，利有攸往，得臣無家，意思是雙方合作以壯大勢力版圖。';
  }
  //
  if (locale == types.LOCALE_ENUS) {                      // enus: state2
    obj = Object.assign({}, ENUS_State_Obj);
    if (ticker.door.type == types.TICKER_CYCLE1) {        // yang
      obj.state2 += 'Same as 1a.';
      obj.inner2 += 'Same as 1b.';
    } else if (ticker.door.type == types.TICKER_CYCLE2) { // yin
      obj.state2 += 'APPROACH has supreme success. ' +
        'Perseverance furthers. ' +
        'When the eighth month of the Chinese Farmer Calendar comes (i.e., a month in Autumn, timing for crops harvesting), ' +
        'there will be misfortune.';
      obj.inner2 += '(6th verse) Great hearted approach. Good-hearted approach. Good fortune. No blame.';
    }
  } else if (locale == types.LOCALE_ZHTW) {               // zhtw: state2
    obj = Object.assign({}, ZHTW_State_Obj);
    if (ticker.door.type == types.TICKER_CYCLE1) {        // yang
      obj.state2 += '與 1a 同';
      obj.inner2 += '與 1b 同';
    } else if (ticker.door.type == types.TICKER_CYCLE2) { // yin
      obj.state2 += '(地澤臨) 本元亨通，利於貞定，當臨至于農曆八月，有凶。';
      obj.inner2 += '(第六爻) 敦臨，吉，沒有咎害。';
    }
  }
  return obj;
}

// Get the I-Ching Object:
export function getICO(locale, ticker) {
  let Obj;
  switch (ticker.door.fore) {
    case '00000': Obj = IC00000(locale, ticker); break;
    case '72416': Obj = IC72416(locale, ticker); break;
  }
  return Obj;
}
