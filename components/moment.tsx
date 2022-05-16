import React from 'react';
import Moment from 'react-moment';

interface MomentProps {
  time: string;
}
const MomentHelper: React.FC<MomentProps> = ({ time }) => {
  return <Moment fromNow>{time}</Moment>;
};

export default MomentHelper;
