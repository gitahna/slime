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
  verticalLine: {
  },
};


class Main extends Component{
    render(){
        return(
          <Container  style={styles.maincontainer}>
               <Row>
                 <Col><Card/></Col>
                 <Col><Card/></Col>
                 <Col><Card/></Col>

               </Row>
           </Container>
        );
    }

}


export default Main;
