import React, { Component } from 'react'

class New extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Maxx',
             id:'101'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({name:'Amarpal', id:'202'})
        }, 2000);
    }
    
    render() {
        // setTimeout(() => {
        //     this.setState({name:'Amarpal', id:'202'})
        // }, 2000);
        const {name, id} = this.state;
        return (
            <div className="text-center">
                <h3> Hello : {name} </h3>
                <h3> Your Id is :{id} </h3>
            </div>
        )
    }
}

export default New;

