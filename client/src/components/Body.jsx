import React from 'react';
import styled from 'styled-components';

const ReadHide = styled.h4`
  cursor: pointer;
`;

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.readMore = this.readMore.bind(this);
    }
    handleClick() {
        this.setState({
            expanded: !this.state.expanded
        });
    };
    readMore () {
        if (this.props.room) {
            var myText = this.props.room.listingBody;
            //console.log(myText)
        } else {
            return null;
        }
        if(this.state.expanded) {
            return myText;
        } else {
            return myText.substring(0, 600);
        };
    };
    render() {
        var expandedDiv = this.readMore();
        return (
            <div>
                <h3>The Space</h3>
                { expandedDiv }
                {this.state.expanded ? 
                <div>
                    <ReadHide onClick={this.handleClick}>Hide</ReadHide>
                </div>
                :  
                <div>
                    <span><ReadHide onClick={this.handleClick}>Read more about the space<img style={{ paddingTop: "15px", marginLeft: "13px", maxWidth: "15px", maxHeight: "15px"}} src="arrowDown.svg"/></ReadHide></span>
                </div>
                }
           </div>
        );
    };
};

export default Body;


// class Body extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.room ? this.props.room.listingBody : null}
//             </div>
//         )
//     }
// }

// export default Body;


// render() {
//     return (
//       <div>
//         {this.props.room ? this.props.room.listingBody : null &&  this.props.room.listingBody.length > 200 ?
//           (
//             <div>
//               {`${text.substring(0, 200)}...`}<h5 >Read more</h5>
//             </div>
//           ) :
//           <p>{this.props.room ? this.props.room.listingBody : null}</p>
//         }
//       </div>
//     );
// }