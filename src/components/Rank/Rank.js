import React from 'react';

const Rank = ({userName, userEntries}) => {
  return(
    <div className='rank'>
      <div>
        {`${userName}, your current entry count is...`}
      
      </div>
      <div>
        {userEntries}
      </div>
    </div>
    );
}

export default Rank;