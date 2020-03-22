import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Header from './Header.jsx';
import Highlight from './Highlight.jsx';
import Body from './Body.jsx';
import Image from './Image.jsx';
import Map from './Map.jsx';
import Amenity from './Amenity.jsx';
import Modal from './Modal.jsx';
import Contact from './Contact.jsx';
import Carousel from './Carousel.jsx';


//const FullBackdrop = 

const Wrapper = styled.div`
  display: flex;
  margin: 0px 200px 0px 190px;
  padding: 0px 24px 0px 24px;
  height: 100%;
  color: #484848;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const MainBodyLeft = styled.div`
  width: 600px;
`;

const Heading = styled.div`
  display: flex;
  height: 180px;
  color: #484848;
  padding: 0px 0px 0px 0px;
`;

const Highlights = styled.div`
  color: #484848;
  padding: 30px 0px 0px 0px;
  
`;

const ImageBody = styled.div`
  color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 201px;
`;
const ShowAll = styled.h3`
  cursor: pointer;
  text-decoration:underline;
`;

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: [],
            showModal: false,
            logIn: false
        };
        // bind here
        this.get = this.get.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openLogIn = this.openLogIn.bind(this);
        this.closeLogIn = this.closeLogIn.bind(this);
    };

    openModal() {
        this.setState({showModal: true})
    };

    closeModal() {
        this.setState({showModal: false})
    }

    componentDidMount() {
        this.get();
    };

    openLogIn() {
        this.setState({logIn : true})
    };

    closeLogIn() {
        this.setState({logIn: false})
    };

    get() {
        axios.get('/api/rooms')
          .then((result) => {
            //   for(var i = 0; i < result.data.length; i++) {
            //       console.log(result.data[i].title)
            //   }
              //console.log(result.data)
              this.setState({rooms: result.data});
          })
          .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <MainBodyLeft>
                        <Heading>
                        <Header room={this.state.rooms[0]} />
                        {/* <Image /> */}
                        </Heading>
                        <Highlights>
                        <Highlight room={this.state.rooms[0]} />
                        </Highlights>
                        <Body room={this.state.rooms[0]} />
                        <ShowAll onClick={this.openLogIn}>Contact host</ShowAll>
                        <Contact logged={this.state.logIn} closeLogIn={this.closeLogIn}>Contact host</Contact>
                        <Amenity room={this.state.rooms[0]} />
                        <ShowAll onClick={this.openModal}>Show All 10 Amenities</ShowAll>
                        <Map />
                    </MainBodyLeft>
                </Wrapper> 
                <Modal room={this.state.rooms[0]} show={this.state.showModal} closeModal={this.closeModal} />
                
                <Carousel />
            </div>
                
            

            

        )
    }
}

export default App;
