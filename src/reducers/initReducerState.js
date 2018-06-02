import * as types from '../actions/actionTypes';

/*
Note that Object.assign only copies the keys and their properties values inside an object (one-level only).
For deep cloning a nested object, refer to the following example:
let obj100 = { a:0, b:{ c:0 } };
let obj200 = JSON.parse(JSON.stringify(obj100));
obj100.a = 99; obj100.b.c = 99; // No effect on obj200
*/

const initReducerState = {
  ajax:   0,                 // for Header.js
  locale: types.LOCALE_ENUS, // for Locale.js
  view: {
    cat:    '',       // referring to data category only--i.e., home and about are not data category
    filter: [],       // for customized data view
    scClicked: false, // overall state code select box clicked
    target: []        // for original data view
  },
  portfolio: null,
  indices: null,
  hightech: null,
  financial: null,
  asset: null,
  crypto: null,
  archives: null,
  stat: null          // statistical data for each archive in archives
};

export default initReducerState;
