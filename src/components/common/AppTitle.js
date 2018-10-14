import React from 'react';
import PropTypes from 'prop-types';
import * as appConstants from './AppConstants';
import wdates from '../../data/weeklyDates';

const AppTitle = () => {
    return (
      <i className="text-center">
        <h1 className="colorDarkBlue"><i>{appConstants.ENUS_TITLE}</i></h1>
        <h3><i>Computed up to {wdates.tdate}</i></h3>
        {/*<h3><i>{wdates.fdate}&nbsp;-&nbsp;{wdates.tdate}&nbsp;&nbsp;Weekly</i></h3>*/}
      </i>
    );
};

export default AppTitle;
