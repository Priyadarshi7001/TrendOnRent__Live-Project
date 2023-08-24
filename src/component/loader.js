import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
const Spinner = () => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <div className="spinner" >
       <BeatLoader css={override} size={15} color={'#d9534f'} /> 
    </div>
  );
};

export default Spinner;
