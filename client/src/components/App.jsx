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
  overflow-wrap: break-word;
  padding: 0px 22px 0px 24px;
  line-height: 1.375em;
  height: 100%;
  
  color: #484848;
  letter-spacing: wide;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const MainBodyLeft = styled.div`
  width: 600px;
  
`;

const Heading = styled.div`
  display: flex;
  height: 160px;
  padding: 10px 10px 0px 0px;
  position: relative;
  border-bottom: 1px solid #e4e4e4;
  
`;

const Highlights = styled.div`
  //height: auto;
  position: relative;
  padding: 10px 10px 0px 0px;
  border-bottom: 1px solid #e4e4e4;
`;

const ShowAll = styled.h3`
  cursor: pointer;
  color: #008489;
  font-weight: 400;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
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

    get(rooms, id) {
        axios.get('/api/rooms/', { params: { id: id } })
          .then((result) => {
            //   for(var i = 0; i < result.data.length; i++) {
            //       console.log(result.data[i].title)
            //   }
              //console.log(result.data[0])

              //console.log(result.data[13].highlight[0])
              this.setState({rooms: result.data});
          })
          .catch((err) => console.log(err));
    }

    render() {
      const randomIndex = Math.floor(Math.random() * 15)
      console.log(randomIndex)
        return (
            <div>
                <Wrapper>
                    <MainBodyLeft>
                        <Heading>
                        <Header room={this.state.rooms[randomIndex]} />
                        {/* <Image /> */}
                        </Heading>
                        <Highlights>
                        <Highlight room={this.state.rooms[randomIndex]} />
                        </Highlights>
                        <Body room={this.state.rooms[randomIndex]} />
                        <ShowAll onClick={this.openLogIn}>Contact host</ShowAll>
                        <Contact logged={this.state.logIn} closeLogIn={this.closeLogIn}>Contact host</Contact>
                        <Amenity room={this.state.rooms[randomIndex]} />
                        <ShowAll onClick={this.openModal}>Show All 10 Amenities</ShowAll>
                        <Map />
                    </MainBodyLeft>
                </Wrapper> 
                <Modal room={this.state.rooms[randomIndex]} show={this.state.showModal} closeModal={this.closeModal} />
                
                <Carousel />
            </div>
        )
    }
}

export default App;
