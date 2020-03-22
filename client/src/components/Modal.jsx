import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
    z-index: 1;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
`;

const Box = styled.div`
    display: inline-block;
    height: 500px;
    z-index: 1;
    position: relative;
    bottom: 0;
    margin: auto;
    top: 100px;
    left: 450px;
    right: 0px;  
    line-height: 1.375em;
    height: 100%;
    color: #484848;
    width: 500px;
    box-shadow: 1px 1px 20px 1px rgba(15,15,15,0.2);
    padding: 30px;
    background-color: white;
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
    div {
        padding: 7px;
    }
`;

// const Title = styled.div`
//    font-size: 16px;
// `;


class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Wrapper show={this.props.show} onClick={this.props.closeModal}>
                    <div style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"}}>
                        <Box>
                            <Button onClick={this.props.closeModal}> X </Button>
                            <div><h3>Amenities</h3></div>
                            <div><h4>Basic</h4></div>
                            <div>{this.props.room ? this.props.room.amen[0].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[1].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[2].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[3].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[4].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[5].title : null }</div>

                            <div>{this.props.room ? this.props.room.amen[6].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[7].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[8].title : null }</div>
                            <div>{this.props.room ? this.props.room.amen[9].title : null }</div>
                        </Box>
                    </div>
            </Wrapper>
        )
    }
}

export default Modal;