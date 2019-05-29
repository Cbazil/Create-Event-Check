import React from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends React.Component {
//   state:any;
//   timerID:any;
//   constructor(props:any) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   componentDidMount(){
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }
//   tick(){
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     ); 
//   }
// }

class CheckBox extends React.Component {
  state:any;
	constructor(props:any) {
		super(props);
		this.state = {
			checked: true
		}	
	}
	
	handleChecked = () => {
		console.log('getting here');
	this.setState({
			checked: !this.state.checked
		})
	}
	
	render() {
		let msg = "";
		if(this.state.checked){
			msg = 'checked'
		} else {
				msg = "unchecked"
		}
    return (
        <div>
					<input
						type="checkbox"
						onChange={this.handleChecked}
						defaultChecked={this.state.checked}
					/>
				
         	<h3>Checked is {msg}</h3>
        </div>
    )
  }	
}

export default CheckBox;

