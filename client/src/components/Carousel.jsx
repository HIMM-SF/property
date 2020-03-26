import React from 'react';
import styled from 'styled-components';
import{ArrowIosForwardOutline} from '@styled-icons/evaicons-outline';
import {ArrowIosBackOutline}from '@styled-icons/evaicons-outline'

// const Wrapper = styled.div`
//   position: relative;
//   width: 70%;
//   height: 100%;
//   background-color: white;
//   font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
//   margin: auto;
//   color: #484848;
//   padding-top: 20px;
//   padding-bottom: 20px;
// `;

// const Slider = styled.div`
//   display: flex;
//   position: absolute;
//   width: 100%;
//   height: auto;
//   background-color: white;
// `;

// const DS = styled.div`
//    position: relative;
//    display: inline-block;
//    width: 30%;
//    border: 1px solid #333;
//    margin-right: 26px;
//    box-sizing: border-box;
// `;

// const h4 = styled.h4`
//    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
//    font-size: 20px;
// `;

const Slider = styled.div`
     //border: 3px solid red;
    // display: flex;
    // flex-flow: row wrap;
    // //margin: auto;
    // user-select: none;
    // width: 663px;
    // height: 310px;
    // //left: 20%;
    @media (max-width: 768px) {
        width: 30%;
        height: 100%;
      }
  
   //border: 3px solid red;
   //left: 30px;
   //left: -10px;
   top: 100px;
   font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
   font-size: 15px;
   margin-top: 0px;
   padding-top: 0px;
   
   padding-bottom: 0px;
   font-weight: 320;
   width: 870px;
   text-space: wide;
   flex-wrap: nowrap;
   overflow: hidden;
   transition: transform 270ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const Wrapper = styled.div`
   display: flex;
   height: 300px;
   //overflow: hidden;
   //margin-left: 10px;
   //margin-right: auto;
   transition: transform 170ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
   float:left;
   width: 890px;
   @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    }
   border: 3px solod yellow;
   div {
       flex: 2;
       margin-right: 0px;
       width: 300px;
   }
`;

const BtnContainer = styled.div`
    width: 910px;
    height: 270px;
    left: -20px;
   // border: 3px solid yellow; 
    //margin-left: auto;
   // margin-right: auto;
    position: relative;
    display: flex;
    z-index: 0;
    justify-content: space-between;
    
`;

const LeftBTN = styled.button`
    float: left;
    left: 3px;
    heigth: 60px;
    width: 18px;
    //border: 2px solid green;
    outline: none;
    position: relative;
    background: transparent;
    top: 40%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: rgb(73, 69, 72);
    border: none;
    cursor: pointer;
`;

const RightBTN = styled.button`
    float: right;
    heigth: 60px;
    width: 20px;
    outline: none;
    //border: 2px solid pink;
    position: relative;
    background: transparent;
    top: 40%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: rgb(73, 69, 72);
    border: none;
    cursor: pointer;
`;

const EachHome = styled.div`
   width: auto;
   text-align:left;
   img {
      max-width: calc(95%);
      display: block;
      width: 96%;
      height: 190px;
      padding-right: 12px;
     // border-radius: 8px;
   }
`;

const PriceStart = styled.div`
   display: flex;
   flex-direction: row;
   flex:1;
   justify-content: flex-start;
`;

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex : 0,
        }
        this.preRoom = this.preRoom.bind(this);
        this.nextRoom = this.nextRoom.bind(this);
    }
    preRoom() {
        this.setState({
            currentIndex : this.state.currentIndex-1,
        })
      }
      nextRoom() {
        this.setState({
            currentIndex: this.state.currentIndex+1,
        })
      }

    render() {
       // console.log(this.props.curRoom ? this.props.curRoom : null)
        return (
            <BtnContainer>
              <LeftBTN onClick={this.preRoom} disabled={this.state.currentIndex === 0}> <ArrowIosBackOutline width="20px"/> </LeftBTN>
                {/* <button onClick={this.nextRoom} disabled={this.state.currentIndex === 4}><i class="arrow right"></i></button> */}
            <Slider>
                <Wrapper style={{
                        // 'transform': this.props.curRoom ? `translateX(-${this.props.curRoom*(300)}px)` : null}}>
                        'transform': this.state.currentIndex ? `translateX(-${this.state.currentIndex*(300)}px)` : null}}>
                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/fa182a781f7ef9edbdafd2502bec4620.jpg" />
                        <div>{this.props.room[1] ? this.props.room[1].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[1] ? this.props.room[1].price : null} per night</span>
                        </PriceStart>
                    </EachHome>
                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/G9V8142_Vihervaja.jpg" />
                        <div>{this.props.room[0] ? this.props.room[0].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[2] ? this.props.room[2].price : null} per night</span>
                        </PriceStart>
                    </EachHome>

                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/top-10-most-beautiful-houses-in-the-world.jpg" />
                        <div>{this.props.room[3] ? this.props.room[3].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[3] ? this.props.room[3].price : null} per night</span>
                        </PriceStart>
                    </EachHome>
                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Modern-Static-House-with-Beautiful-Design.jpg" />
                        <div>{this.props.room[4] ? this.props.room[4].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[4] ? this.props.room[4].price : null} per night</span>
                        </PriceStart>
                    </EachHome>
                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/238C06CA00000578-0-image-25_1417092450451.jpg" />
                        <div>{this.props.room[0] ? this.props.room[0].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[0] ? this.props.room[0].price : null} per night</span>
                        </PriceStart>
                    </EachHome>
                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/beautiful-family-beach-house-with-stunning-views-1-thumb-970xauto-36619.jpg" />
                        <div>{this.props.room[2] ? this.props.room[2].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[2] ? this.props.room[2].price : null} per night</span>
                        </PriceStart>
                    </EachHome>
                    <EachHome>
                        <img src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/2d96cb7800c5e1e2149134a2582c9e2c.jpg" />
                        <div>{this.props.room[3] ? this.props.room[3].title : null}</div>
                        <PriceStart>
                            <span className="price">${this.props.room[1] ? this.props.room[1].price : null} per night</span>
                        </PriceStart>
                    </EachHome>       
                </Wrapper>  
            </Slider>
              {/* <ArrowIosForwardOutline onClick={this.nextRoom} disabled={this.state.currentIndex === 3} /> */}
              <RightBTN onClick={this.nextRoom} disabled={this.state.currentIndex === 3}><ArrowIosForwardOutline width="20px"/> </RightBTN>
            </BtnContainer>
        )
    }
}


//https://userimagexxia10296.s3.us-east-2.amazonaws.com/beautiful-family-beach-house-with-stunning-views-1-thumb-970xauto-36619.jpg
// https://userimagexxia10296.s3.us-east-2.amazonaws.com/238C06CA00000578-0-image-25_1417092450451.jpg
// https://userimagexxia10296.s3.us-east-2.amazonaws.com/2d96cb7800c5e1e2149134a2582c9e2c.jpg






//     render() {
//         console.log(this.props.room[1] ? this.props.room[1].userImg : null)
//         return (
//             <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
//                 <Wrapper>
//                    <h2>More homes you may like</h2>
//                     <Slider>
//                         <DS>        
//                             <img style={{ maxWidth: "297px", maxHeight: "230px" }}
//                             src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Ngunguru-House-by-Tennent--Brown-Architects-11.jpg"
//                             />  
//                             <h4>home 1</h4>            
//                         </DS>
//                         <DS>        
//                             <img style={{ maxWidth: "297px", maxHeight: "230px" }}
//                             src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/52-526194_luxury-house-hd-wallpaper-design-beautiful-house-with.jpg"
//                             />       
//                             <h4>home 2</h4>        
//                         </DS>
//                         <DS>        
//                             <img style={{ maxWidth: "297px", maxHeight: "230px" }}
//                             src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/beautiful-family-beach-house-with-stunning-views-1-thumb-970xauto-36619.jpg"
//                             />         
//                             <h4>home 3</h4>      
//                         </DS>
//                         <DS>        
//                             <img style={{ maxWidth: "297px", maxHeight: "230px" }}
//                             src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/top-10-most-beautiful-houses-in-the-world.jpg"
//                             />    
//                             <h4>home 4</h4>           
//                         </DS>
//                         <DS>        
//                             <img style={{ maxWidth: "297px", maxHeight: "230px" }}
//                             src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Modern-Static-House-with-Beautiful-Design.jpg"
//                             />      
//                             <h4>home 5</h4>         
//                         </DS>
//                         <DS>        
//                             <img style={{ maxWidth: "297px", maxHeight: "230px" }}
//                             src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Screen+Shot+2020-03-21+at+1.28.44+AM.jpg"
//                             />    
//                             <h4>home 6</h4>           
//                         </DS>


//                         <div>
//                             <img src={this.props.room[0] ? this.props.room[0].userImg : null} />
//                             <div>{this.props.room[0] ? this.props.room[0].title : null}</div>
//                             <div>{this.props.room[0] ? this.props.room[0].city : null}</div>
//                             <div>{this.props.room[0] ? this.props.room[0].price : null} per night</div>
//                         </div>

//                         <div>
//                             <img src={this.props.room[1] ? this.props.room[1].userImg : null} />
//                             <div>{this.props.room[1] ? this.props.room[1].title : null}</div>
//                             <div>{this.props.room[1] ? this.props.room[1].city : null}</div>
//                             <div>{this.props.room[1] ? this.props.room[1].price : null} per night</div>
//                         </div>

//                         <div>
//                             <img src={this.props.room[2] ? this.props.room[2].userImg : null} />
//                             <div>{this.props.room[2] ? this.props.room[2].title : null}</div>
//                             <div>{this.props.room[2] ? this.props.room[2].city : null}</div>
//                             <div>{this.props.room[2] ? this.props.room[2].price : null} per night</div>
//                         </div>

//                         <div>
//                             <img src={this.props.room[3] ? this.props.room[3].userImg : null} />
//                             <div>{this.props.room[3] ? this.props.room[3].title : null}</div>
//                             <div>{this.props.room[3] ? this.props.room[3].city : null}</div>
//                             <div>{this.props.room[3] ? this.props.room[3].price : null} per night</div>
//                         </div>

//                         <div>
//                             <img src={this.props.room[4] ? this.props.room[4].userImg : null} />
//                             <div>{this.props.room[4] ? this.props.room[4].title : null}</div>
//                             <div>{this.props.room[4] ? this.props.room[4].city : null}</div>
//                             <div>{this.props.room[4] ? this.props.room[4].price : null} per night</div>
//                         </div>



//                         <DS>3</DS>
//                         <DS>4</DS>
//                         <DS>5</DS>
//                         <DS>6</DS>
//                    </Slider>
//                 </Wrapper>
//             </div>
//         )
//     }
// }

export default Carousel;