import React  from 'react';
import Moment from 'react-moment';

interface MomentProps {
    time: string;
}
const MomentHelper: React.FC<MomentProps> = ({ time }) => {
    return (
        <div>
             <Moment fromNow>{time}</Moment>
        </div>
    )
}

export default MomentHelper;
