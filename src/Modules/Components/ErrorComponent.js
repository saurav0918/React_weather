

import React from 'react';
import styled from 'styled-components';


const Error = styled.div`
    color:${(props) => props.theme.fontColor};
    font-weight:bold;
    align-items:center;
    font-size:20px;
`

function ErrorComponent() {
  return (
    <div>
        <Error>City Not Found</Error>
    </div>
  )
}

export default ErrorComponent