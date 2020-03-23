import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    height: 700px;
    position: relative;
    float: left;
    top: 10px;
    left: 0px;
    right: 0px;
    width: 400px;

    overflow-wrap:break-word;
    div:nth-child(1) {
      overflow-wrap: break-word;
      font-size: 32px;
      letter-spacing: wide;
      font-weight: 620;
      padding-top: 20pm;
      padding-bottom: 10px;
      rgb(72, 72, 72);
    }
    div:nth-child(2) {
      font-size: 17px;
      font-weight: 400;
      padding-top: 8pm;
      padding-bottom: 20px;
      line-height: 1.275em;
      rgb(72, 72, 72);
    }
`;

const Spec = styled.div`
   padding-bottom: 10px;
   position: relative;
   font-size: 17px;
   font-weight: 400;
   line-height: 1.275em;
   box-sizing:border-box;
   -webkit-font-smoothing:antialiased;
   text-size-adjust:100%;
   span:nth-child(1) {
     padding-right: 15px;
   }
   span:nth-child(2) {
    padding-right: 15px;
  }
  span:nth-child(3) {
    padding-right: 15px;
  }
  span:nth-child(4) {
    padding-right: 15px;
  }
`;

const Wrapper = styled.div`
   top: 1px;
   bottom: 1px;

   position: relative;
   float: right;
   left: 25%;
   display: flex;
   justify-content: flex-end;
   flex-direction: column;
   
   div:nth-child(1) {
    flex: 5;
    display: flex;
    vertical-align: middle
    flex-direction: column;
    margin-top: 2px;

  }
  div:nth-child(2) {
     flex: 5;
     display: flex;
     flex-direction: column;
     text-align:center;
 }
`;
 
const Front = styled.div`
   width: 500px;
   height: 100px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box>
        <Front>
            <div>{this.props.room ? this.props.room.title : null}</div>
            <div><a href="#location">{this.props.room ? this.props.room.city : null}</a></div>
            <Wrapper>
                <div><img style={{ height: "70px", width: "70px" }} src="cutepig.png"/></div>
                <div>{this.props.room ? this.props.room.userName : null}</div>
            </Wrapper>
        </Front>
        <Spec>
          <span>{this.props.room ? this.props.room.numberOfMaxGuest : null} guests  </span>
          <span>{this.props.room ? this.props.room.numberOfBedrooms : null} bedrooms  </span>  
          <span>{this.props.room ? this.props.room.numberOfBeds : null} beds  </span>
          <span>{this.props.room ? this.props.room.numberOfBaths : null} baths </span>

        </Spec>

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