import React from 'react';


const Icon = styled

// for test
const Highlight = props => (
    <div>
        <img style={{ maxWidth: "20px", maxHeight: "20px"}} src="1.jpg"></img>
        <img style={{ maxWidth: "20px", maxHeight: "20px"}} src="2.jpg"></img>
        <img style={{ maxWidth: "20px", maxHeight: "20px"}} src="3.jpg"></img>
        <img style={{ maxWidth: "20px", maxHeight: "20px"}} src="4.jpg"></img>
        <div>{props.room ? props.room.highlight[0].characteristic : null }</div>
        <div>{props.room ? props.room.highlight[0].description : null }</div>
        <div>{props.room ? props.room.highlight[1].characteristic : null }</div>
        <div>{props.room ? props.room.highlight[1].description : null }</div>
        <div>{props.room ? props.room.highlight[2].characteristic : null }</div>
        <div>{props.room ? props.room.highlight[2].description : null }</div>
        <div>{props.room ? props.room.highlight[3].characteristic : null }</div>
        <div>{props.room ? props.room.highlight[3].description : null }</div>
        {/* {console.log(props.room ? props.room.highlight[0].characteristic : null )} */}
    </div>
)

export default Highlight;