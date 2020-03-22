import React from 'react';
import styled from 'styled-components';

const Amen = styled.div`
   margin: 20px 20px 0 0;
   border-top: 1px solid #e4e4e4;
   display: flex;
   position: relative;
   flex-direction: column;
   padding: 10px 25px 16px 16px;
`;
const Item = styled.div`
   display: flex;
   padding: 10px 20px 0 0;
   font-weight: 400;
`;

class Amenity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Amen>
                <div><h3>Amenities</h3></div>
                <Item>
                    <img style={{ maxWidth: "34px", maxHeight: "34px"}} src="iron.jpg"></img>
                    <div>{this.props.room ? this.props.room.amen[0].title : null }</div>
                </Item>
                <Item>
                    <img style={{ maxWidth: "34px", maxHeight: "34px"}} src="parking.jpg"></img>
                    <div>{this.props.room ? this.props.room.amen[1].title : null }</div>
                </Item>
                <Item>
                    <img style={{ maxWidth: "34px", maxHeight: "34px"}} src="wifi.jpg"></img>
                    <div>{this.props.room ? this.props.room.amen[2].title : null }</div>
                </Item>
                <Item>
                    <img style={{ maxWidth: "34px", maxHeight: "34px"}} src="dinning.jpg"></img>
                    <div>{this.props.room ? this.props.room.amen[3].title : null }</div>
                </Item>
                {/* {console.log(props.room ? props.room.highlight[0].characteristic : null )} */}
            </Amen>
        )
    }
}

export default Amenity;