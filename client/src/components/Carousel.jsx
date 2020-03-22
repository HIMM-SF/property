import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  background-color: red;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  margin: auto;
  color: #484848;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Slider = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  background-color: yellow;
`;

const DS = styled.div`
   position: relative;
   display: inline-block;
   width: 30%;
   border: 1px solid #333;
   margin-right: 26px;
   box-sizing: border-box;
`;

const h4 = styled.h4`
   font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
   font-size: 20px;
`;


class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Wrapper>
                   <h2>More homes you may like</h2>
                    <Slider>
                        <DS>        
                            <img style={{ maxWidth: "297px", maxHeight: "230px" }}
                            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Ngunguru-House-by-Tennent--Brown-Architects-11.jpg"
                            />  
                            <h4>home 1</h4>            
                        </DS>
                        <DS>        
                            <img style={{ maxWidth: "297px", maxHeight: "230px" }}
                            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/52-526194_luxury-house-hd-wallpaper-design-beautiful-house-with.jpg"
                            />       
                            <h4>home 2</h4>        
                        </DS>
                        <DS>        
                            <img style={{ maxWidth: "297px", maxHeight: "230px" }}
                            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/beautiful-family-beach-house-with-stunning-views-1-thumb-970xauto-36619.jpg"
                            />         
                            <h4>home 3</h4>      
                        </DS>
                        <DS>        
                            <img style={{ maxWidth: "297px", maxHeight: "230px" }}
                            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/top-10-most-beautiful-houses-in-the-world.jpg"
                            />    
                            <h4>home 4</h4>           
                        </DS>
                        <DS>        
                            <img style={{ maxWidth: "297px", maxHeight: "230px" }}
                            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Modern-Static-House-with-Beautiful-Design.jpg"
                            />      
                            <h4>home 5</h4>         
                        </DS>
                        <DS>        
                            <img style={{ maxWidth: "297px", maxHeight: "230px" }}
                            src="https://userimagexxia10296.s3.us-east-2.amazonaws.com/Screen+Shot+2020-03-21+at+1.28.44+AM.jpg"
                            />    
                            <h4>home 6</h4>           
                        </DS>

                        


                        <DS>2</DS>
                        <DS>3</DS>
                        <DS>4</DS>
                        <DS>5</DS>
                        <DS>6</DS>
                   </Slider>
                </Wrapper>
            </div>
        )
    }
}

export default Carousel;