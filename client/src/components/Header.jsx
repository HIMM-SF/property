import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    height: 200px;
    position: relative;
    bottom: px;
    top: 10px;
    left: 0px;
    right: 0px;
    width: 600px;
    border-bottom: 1px solid #e4e4e4;
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const Title = styled.h1`
   font-size: 32px;
   font-weight: 670;
   line-height: 1.125em;
   margin: 0px;
   padding-top: 6pm;
   padding-bottom: 6px;
   rgb(72, 72, 72);
`;

const Local = styled.h4`
   font-size: 16px;
   font-weight: 400;
   line-height: 1.275em;
   margin: 0px;
   padding-top: 0;
   rgb(72, 72, 72)
`;



class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box>
          <Title>{this.props.room ? this.props.room.title : null}</Title>
        {/* {console.log(props.room ? props.room.title : null)} */}
        <img
            style={{ height: "90px", width: "90px", borderRadius: "50%",  float: "right" }}
            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/IMG_3372.jpg"
        />
        <Local>
          <a href="#location">{this.props.room ? this.props.room.city : null}</a>
          <div>{this.props.room ? this.props.room.userName : null}</div>
          <div>{this.props.room ? this.props.room.numberOfMaxGuest : null} guests  {this.props.room ? this.props.room.numberOfBedrooms : null} bedrooms    {this.props.room ? this.props.room.numberOfBeds : null} beds  {this.props.room ? this.props.room.numberOfBaths : null} baths </div>
        
        </Local>
      </Box>
    )
  }
}


// for running Enzyme test only
// const Header = ({rooms} ) => (
//     <div>
//         <h1>hello from header.jsx</h1>
//         <h1>{rooms.title}</h1>
//         <h1>{rooms.location}</h1>
//         <h4>{rooms.numberOfMaxGuest} guests  {rooms.numberOfBedrooms} bedrooms  {rooms.numberOfBeds} beds  {rooms.numberOfBaths} baths </h4>
//         <img src={rooms.imageUrl}  />
//     </div>
// )

export default Header;