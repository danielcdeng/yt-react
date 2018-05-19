import React, {PropTypes} from 'react';
import * as appConstants from './AppConstants';
import wdates from '../../data/weeklyDates';

const AppTitle = () => {
    return (
      <div className="text-center">
        <h1 className="colorDarkBlue"><i>{appConstants.ENUS_TITLE}</i></h1>
        <h3>{wdates.fdate}&nbsp;-&nbsp;{wdates.tdate}</h3><br/>
      </div>
    );
};

export default AppTitle;
