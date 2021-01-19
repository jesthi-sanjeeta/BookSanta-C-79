import React,{Component} from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends Component{
    render(){
        return(
            <LottieView
            source={require('../assets/13015-santa-claus.json')}
            style ={{width:"50%"}}
            autoPlay loop/>
        )
    }
}