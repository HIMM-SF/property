import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="location"> 
          <img 
              style={{ maxWidth: "600px", maxHeight: "600px", imageOrientation: "from-image" }}
              src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Screen+Shot+2020-03-18+at+2.01.15+PM.jpg"
          />
      </div>
    );
  }
}

export default Map;