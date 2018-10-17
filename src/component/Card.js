import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


  const styles = {
    card: {
        width:'100%'
    },

  };


class Cards extends Component{
    render(){
        return(


          <div >
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>


                <CardText>#태그 #태그</CardText>

              </CardBody>
            </Card>
          </div>




        );
    }

}


export default Cards;
