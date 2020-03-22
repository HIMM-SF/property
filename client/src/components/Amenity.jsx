import React from 'react';


class Amenity extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div><h3>Amenities</h3></div>
                <img style={{ maxWidth: "30px", maxHeight: "30px"}} src="iron.jpg"></img>
                <img style={{ maxWidth: "30px", maxHeight: "30px"}} src="parking.jpg"></img>
                <img style={{ maxWidth: "30px", maxHeight: "30px"}} src="wifi.jpg"></img>
                <img style={{ maxWidth: "30px", maxHeight: "30px"}} src="dinning.jpg"></img>
                <div>{this.props.room ? this.props.room.amen[0].title : null }</div>
                <div>{this.props.room ? this.props.room.amen[1].title : null }</div>
                <div>{this.props.room ? this.props.room.amen[2].title : null }</div>
                <div>{this.props.room ? this.props.room.amen[4].title : null }</div>
                {/* {console.log(props.room ? props.room.highlight[0].characteristic : null )} */}
            </div>
        )
    }
}

export default Amenity;