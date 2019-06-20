import React from 'react';
import '../App.css';
import {
  Row,
  Container,  
} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
// import { default as Stickies } from '../Composent/Stickies';
// import Footer from '../Composent/Footer';
import { Stickies } from '../Composent/index';

const mock = require('./mock');



class Note extends React.Component {
  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showTape: false,
      showOutput: false,
      showTitle: true,
      showFooter: true,
      output: '',
      colors: ['#FFFFFF'],
      showCustomColors: false,
      showMock: false
    };
    this.toggleValue = this.toggleValue.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fetchMock = this.fetchMock.bind(this);
  }

  toggleValue(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  onChange(notes) {
    this.setState({
      output: JSON.stringify(notes, null, 2),
      notes
    });
  }

  fetchMock() {
    this.setState({
      showMock: true
    }, () => {
      this.setState({
        notes: mock.default
      });
    });
  }
  render() {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: '700px',
        width: '700px',
        background: 'rgba(0, 0, 0, 0.2)',
        border: '2px solid #fff',
        overflow: 'auto',
        padding: '10px'
      };
    }
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid">
               <Row>
               <Stickies
                  notes={this.state.notes}
                  tape={this.state.showTape}
                  style={{ float: 'left' }}
                  colors={this.state.showCustomColors ? this.state.colors : undefined}
                  title={this.state.showTitle}
                  footer={this.state.showFooter}
                  onChange={this.onChange}
                  wrapperStyle={wrapperStyle}
                />
               </Row>
             </Container>
             {/* <Footer/> */}
          </div>
    </div>
    );
  }
}

export default Note;