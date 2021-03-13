import React from 'react';
import PropTypes from "prop-types";

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            나의 새롭고 멋진 {name} <br/>
            children : {children} <br/>
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'basic name'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;