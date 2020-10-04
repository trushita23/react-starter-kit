/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SpeedCount.css';

export default function SpeedCount({ title }) {
  useStyles(s);
  const [speed, setSpeed] = useState(0);
  const speedChange = 10 / 100;
  const handleClick = speedType => {
    let count = speed;
    if (speedType === 'increase') {
      count += speedChange;
      if (count >= 2) {
        count = 2;
      }
    } else {
      count -= speedChange;
      if (count <= 0) {
        count = 0;
      }
    }

    setSpeed(count);
  };
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Current Speed {speed}</p>
        <button
          className={s.button}
          type="button"
          onClick={() => handleClick('increase')}
        >
          Increase Speed
        </button>
        <button
          className={s.button}
          type="button"
          onClick={() => handleClick('decrease')}
        >
          {' '}
          Decrease Speed
        </button>
      </div>
    </div>
  );
}

SpeedCount.propTypes = {
  title: PropTypes.string.isRequired,
};
