import React from 'react';
import '../App.css'

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = { color: 'lightgreen' };
  }
  componentDidMount() {
  
    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
    setTimeout(() => {
      this.setState({ color: 'yellow' });
    }, 2000);
  }


  render() {
    //   setTimeout(() => {
    //       this.setState({color:'red'})
    //   },2000)
    return (
      <div className="Change">
        <p
          style={{
            color: this.state.color,
            backgroundColor: 'rgba(0,0,0,0.88)',
            textAlign: 'center',
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto',
            fontSize:20
          }}
        >
          GeeksForGeeks
        </p>
  
      </div>
    );
  }
}
export default ChangeColor;