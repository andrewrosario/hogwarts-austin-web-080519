import React, { Component } from 'react';


class Card extends Component {
    state = {  }

    slugify = (name) => {
        let splitName = name.split(' ')
        return splitName.join("_")
    }
    render() { 
        const {name, weight, specialty, greased} = this.props.hog
        console.log(name)
        
        return ( 
            <div className='hog-card'>
                <img alt='pig' src={require(`../hog-imgs/${this.slugify(name.toLowerCase())}.jpg`)}  ></img>
                Name: {name}
                Weight: {weight}
                Specialty: {specialty}
                Greased: {greased}
                Highest Medal Achieved: {this.props.hog['highest medal achieved']}
            </div>
         );
    }
}
 
export default Card;