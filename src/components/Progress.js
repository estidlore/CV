import {memo} from 'react';

const Progress = ({value}) => (
  <div className="progress">
    <div className="progress-bar" style={{width: `${value}%`}} />
  </div>
);

export default memo(Progress);