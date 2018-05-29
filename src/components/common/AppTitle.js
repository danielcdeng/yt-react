import React, {PropTypes} from 'react';
import * as appConstants from './AppConstants';
import wdates from '../../data/weeklyDates';

const AppTitle = () => {
    return (
      <i className="text-center">
        <h1 className="colorDarkBlue"><i>{appConstants.ENUS_TITLE}</i></h1>
        <h3><i>{wdates.fdate}&nbsp;-&nbsp;{wdates.tdate}&nbsp;&nbsp;Weekly</i></h3>
        <br/>
      </i>
    );
};

export default AppTitle;
