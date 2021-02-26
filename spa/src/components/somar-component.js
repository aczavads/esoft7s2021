import React from 'react';

const SomarComponent = (props) => {
    const v1 = props.v1;
    const v2 = props.v2;
    return (
        <div>
            {v1 + v2}
        </div>
    );
}

export default SomarComponent;

