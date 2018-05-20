import * as actionTypes from '../actions/actionTypes';

const initReducerState = {
    ajax: 0, // for Header.js
    cat: '', // category
    locale: actionTypes.LOCALE_ENUS, // for Locale.js
    //------------------------------------------
    source: [], // the original source portfolio
    filter: [], // working portfolio on original or category (Indices...Crypto) for filtering
    filbak: [], // backup of the above filter when working on the category
    target: [], // working portfolio on original or category (Indices...Crypto) for sorting
    tarbak: []  // backup of the above target when working on the category
};

export default initReducerState;
