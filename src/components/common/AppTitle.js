import React, {PropTypes} from 'react';
import * as appConstants from './AppConstants';

const AppTitle = () => {
    return (
      <div>
        <h1 className="text-center colorDarkBlue">
          <i>{appConstants.ENUS_TITLE}</i><br/>
          {/*<span className="fontSize28px">{appConstants.ZHTW_TITLE}</span>*/}
        </h1>
      </div>
    );
};

export default AppTitle;
