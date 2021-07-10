import React, { Component } from 'react';

class getData extends Component {
    constructor(){
        super();
        this.state={
            data:[],
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000')
        .then((Response)=>Response.json())
        .then((findresponse)=>
        {
            this.setState({
                data:findresponse,
            });
        });
    }

    render() {
        return (
           <div>
                {
                    this.state.data.map((dynamicData)=>
                    <div>
                        <span>{dynamicData.LastName} </span>
                        <span>{dynamicData.FirstName}</span>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default getData;