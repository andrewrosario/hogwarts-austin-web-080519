import React, { Component } from 'react';
import Card from './Card'
import Filter from './Filter'

class Index extends Component {
    state = { 
        hogs: [],
        filter: "all",
        sort: "none"
     }

     sortedHogs = (sortOption) => {
         if (sortOption === 'none') {
             this.setState({
                hogs: this.props.hogs
             })
         } else {
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
         }
         this.setState({
             sort: sortOption
         })
     }

    displayCards = () => {
        console.log(">>>>>>>>", this.state.filter)
       return this.props.hogs.map ( (hog, index) => {
           if (this.state.filter === "greased" && hog.greased) {
               console.log("greased")
               return <Card hog={hog} key={index}/>
           } else if (this.state.filter === "ungreased" && !hog.greased) {
               console.log("ungreased")
               return <Card hog={hog} key={index}/>
           } else if (this.state.filter === "all") {
               console.log("all")
            return <Card hog={hog} key={index}/>
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
            <div id='index'>
                <Filter onFilterChange={this.onFilterChange} sortedHogs={this.sortedHogs}/>
                {this.displayCards()}
            </div>
         );
    }
}
 
export default Index;