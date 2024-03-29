import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/Deck';
import {Card,Button} from 'react-native-elements';
const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];
class App extends Component{

  renderCard(item){

    return (
       <Card
           key={item.id}
       title={item.text}
       image={{uri:item.uri}}
       >
           <Text style={{marginBottom:10}}>Push yourself</Text>
           <Button
           icon={{name:'code'}}
           backgroundColor="#03A9F4"
           title='View now'
           />
       </Card>
    )
    }


    renderNoMoreCards(){
      return (
          <Card
          title='All done'
          >
              <Text style={{marginBottom:10}}>There is no more content</Text>
              <Button title='Get more!'/>
          </Card>
      )
    }
    render() {
        return (
            <View  style={{marginTop:50}}>
              <Deck
              data={DATA}
              renderCard={this.renderCard}
              renderNoMoreCards={this.renderNoMoreCards}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export  default  App;