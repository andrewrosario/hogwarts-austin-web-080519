import React, { Component } from 'react';

class Card extends Component {
    state = { 
        showDetails: false
     }

    slugify = (name) => {
        let splitName = name.split(' ')
        return splitName.join("_")
    }

    handleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    // src={this.props.pigPic.images.original.url }
    render() { 
        console.log(this.props.pigPic) 
        const pigs = this.props.pigPic
        const {name, weight, specialty, greased} = this.props.hog
        return ( 
            <div onClick={this.handleClick} className='hog-card ui card four wide column'>
                <div className='image'>
                    <img alt='pig' src={this.props.pigPic}   ></img>
                </div>
                <br></br>
                <h3>{name}</h3>
                {this.state.showDetails &&
                <div className="hog-details content">
                    Weight: {weight}
                    <br></br>
                    Specialty: {specialty}
                    <br></br>
                    Highest Medal Achieved: {this.props.hog['highest medal achieved']}  
                    <br></br>
                </div>
                }
                <br></br>
            </div>
         );
    }
}
 
export default Card;

// require(`../hog-imgs/${this.slugify(name.toLowerCase())}.jpg`)