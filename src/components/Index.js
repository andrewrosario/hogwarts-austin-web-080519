import React, { Component } from 'react';
import Card from './Card'
import Filter from './Filter'

class Index extends Component {
    state = {  }

    displayCards = () => {
       return this.props.hogs.map ( (hog, index) => {
            console.log(hog)
            return <Card hog={hog} key={index}/>
        })
    }
    render() { 
        console.log(this.props.hogs)
        return ( 
            <div id='index'>
                <Filter />
                {this.displayCards()}
            </div>
         );
    }
}
 
export default Index;