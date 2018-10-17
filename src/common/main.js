import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container, Row, Col } from 'reactstrap';
import Card from '../component/Card';


const styles = {
  maincontainer: {

  },
  center: {
    textAlign: 'center'
  },
  rightNav: {
  },
  row: {
        paddingTop: '20px'
  },
};


class Main extends Component{
    render(){
        return(
        <div>
          <Container  >
          <Row style={styles.row}>
            <Col><Card/></Col>
            <Col><Card/></Col>
            <Col><Card/></Col>
          </Row>
          <Row style={styles.row}>
            <Col><Card/></Col>
            <Col><Card/></Col>
            <Col><Card/></Col>
          </Row>
          <Row style={styles.row}>
            <Col><Card/></Col>
            <Col><Card/></Col>
            <Col><Card/></Col>
          </Row>


           </Container>

        </div>
        );
    }

}


export default Main;
