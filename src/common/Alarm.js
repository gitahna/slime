import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container, Row, Col } from 'reactstrap';
import AlarmCard from '../component/AlarmCard';



class Main extends Component{
    render(){
        return(
          <Container>
               <Row>
                 <Col><AlarmCard/></Col>
                 <Col><AlarmCard/></Col>
                 <Col><AlarmCard/></Col>
               </Row>
           </Container>
        );
    }

}


export default Main;
