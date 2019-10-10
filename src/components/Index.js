import React, { Component } from 'react';
import Card from './Card'
import Filter from './Filter'

class Index extends Component {
    state = { 
        gifs: [],
        hogs: [],
        filter: "all",
        sort: "none"
     }

    componentDidMount() {
        fetch("http://api.giphy.com/v1/gifs/search?q=spongebob&api_key=3JQ9kxnambYJzuUNZuhxzNolfd0KoHoL&limit=100")
        .then(resp => resp.json())
        .then(resp => {
            let newArray = resp.data.map( (gif) => {
                return gif.images.original.url
            })
            this.setState({
                gifs: newArray
            })
        })
    }

     


     sortedHogs = (sortOption) => {
         
         if (sortOption === 'none') {
             this.setState({
                hogs: this.props.hogs
             })
         } else if(sortOption === 'name') {
             this.setState({
                 hogs: this.props.hogs.sort((hogA, hogB) => {
                    if( hogA[sortOption].toUpperCase() < hogB[sortOption].toUpperCase() ) {
                        return -1;
                    } else if (hogA[sortOption].toUpperCase() > hogB[sortOption].toUpperCase()) {
                        return 1;
                    } else {
                        return 0;
                    }
                 })
             }) 
         } else if(sortOption === 'weight') {
            this.setState({
                hogs: this.props.hogs.sort((hogA, hogB) => {
                   if( hogA[sortOption] < hogB[sortOption] ) {
                       return -1;
                   } else if (hogA[sortOption] > hogB[sortOption]) {
                       return 1;
                   } else {
                       return 0;
                   }
                })
            })
         }
         this.setState({
             sort: sortOption
         })
     }

    displayCards = () => {
    console.log('display cards', this.state.gifs)
       return this.props.hogs.map ( (hog, index) => {
           if (this.state.filter === "greased" && hog.greased) {
               return <Card hog={hog} key={index} pigPic={this.state.gifs[Math.floor(Math.random() * 100)]}/>
           } else if (this.state.filter === "ungreased" && !hog.greased) {
               return <Card hog={hog} key={index} pigPic={this.state.gifs[Math.floor(Math.random() * 100)]}/>
           } else if (this.state.filter === "all") {
            return <Card hog={hog} key={index} pigPic={this.state.gifs[Math.floor(Math.random() * 100)]}/>
           }
        })
    }

    onFilterChange = (hogFilter) => {
        this.setState({
            filter: hogFilter
        })
    }

    render() { 
        return ( 
            <div id='index' className='ui grid container'>
                <Filter onFilterChange={this.onFilterChange} sortedHogs={this.sortedHogs}/>
                {this.displayCards()}
            </div>
         );
    }
}
 
export default Index;