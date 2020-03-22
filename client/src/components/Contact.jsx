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
    top: 40px;
    left: 400px;
    right: 0px;
    width: 650px;
    box-shadow: 1px 1px 20px 1px rgba(15,15,15,0.2);

    background-color: white;
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            page: 0,
            phoneNumber:'',
            password1: '',
            password2: '',
            password3: '',
            password4: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
        this.handleEnter = this.handleEnter.bind(this);

    }
    handleContinue(e) {
        this.setState({
            page: this.state.page + 1
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleEnter(e) {
        alert('Successfully Logged In!')
    }
    
    render() {
        if (!this.props.logged) {
            return null;
        }
        return (
            <Wrapper logged={this.props.logged}>
                <div style={{
                    transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: this.props.show ? "1" : "0"}}>
                </div>
                <Box>
                    <div>
                         {this.state.page === 0    ?
                           <div>
                               <Button onClick={this.props.closeLogIn}> X </Button> 
                               <div>Log In</div>
                               <form>
                                    <label>
                                        Country/Region:
                                        <select>
                                            <option>Uganda (+256)</option>
                                            <option>Ukraine (+380)</option>
                                            <option>United Arab Emirates (+971)</option>
                                            <option>United Kingdom (+44)</option>
                                            <option>United States (+1)</option>
                                            <option>Uzbekistan (+998)</option>
                                            <option>Vanuatu (+678)</option>
                                            <option>Vatican City (+379)</option>
                                            <option>Venezuela (+58)</option>
                                            <option>Vietnam (+84)</option>
                                            <option>Wallis and Futuna (+681)</option>
                                        </select>
                                    </label>
                                </form>
                                <label >Phone Number: 
                                   <input name="phoneNumber" value={this.state.phoneNumber} />
                                </label><br></br>
                                <button onClick={this.handleContinue}> Continue </button>
                                <br></br>
                                <h4>or</h4>
                                <button > Continue with email </button>
                                <br></br>
                                <button > Continue with Facebook</button>
                                <br></br>
                                <button > Continue with Google</button>
                                <br></br>
                                <h4>Don't have an account?</h4> <a>Sign up</a>
                           </div>
                         : 
                         <div>
                             <Button onClick={this.props.closeLogIn}> X </Button> 
                             <h3>Confirm your number</h3>
                             <input value={this.state.password1} />
                             <input value={this.state.password2} />
                             <input value={this.state.password3} />
                             <input value={this.state.password4} />
                             <div><button onClick={this.handleEnter}>Enter</button></div>
                             <br></br>
                             <div>Didn't get a text? Send again</div>
                             <div>Call me instead</div>
                             <div>Log in another way</div>
                         </div>
                           
                         }
                    </div>
                </Box>
            </Wrapper>
        )
    }
    
}



export default Contact;

{/* <form>
    <label>
        Country/Region:
        <select>
            <option>United States (+1)</option>
            <option>Uzbekistan (+998)</option>
            <option>Vanuatu (+678)</option>
            <option>Vatican City (+379)</option>
            <option>Venezuela (+58)</option>
            <option>Vietnam (+84)</option>
            <option>Wallis and Futuna (+681)</option>
        </select>
    </label>
</form> */}