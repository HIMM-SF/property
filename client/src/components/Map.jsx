import React from 'react';
import styled from 'styled-components';

const Mapdiv = styled.div`
   padding: 20px 20px 0 0;
   border-top: 1px solid #e4e4e4;
`;

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Mapdiv id="location"> 
          <img 
              style={{ maxWidth: "600px", maxHeight: "600px", imageOrientation: "from-image" }}
              src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Screen+Shot+2020-03-18+at+2.01.15+PM.jpg"
          />
      </Mapdiv>
    );
  }
}

export default Map;