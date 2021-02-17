import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (

        <div id="notFoundDiv">
            <span id="not-found-icon"> <FontAwesomeIcon icon={faFrown} /> </span>
            <h3 id="not-found-text">Sorry, the specified city was not found..</h3>
        </div>

    );
  };
  
  export default NotFound;