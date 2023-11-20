import React from "react";

class Incre extends React.Component{

        //create state
        state ={num:0}

        inc = ()=>{
                // increment number
                this.setState({num:this.state.num+1})  
        }
        dec = ()=>{
                // decrement number
                this.setState({num:this.state.num-1})  
        }
        res = ()=>{
                // Reset number
                this.setState({num:0})  
        }
        render(){
                return(

                        <>

                        {/* call icrement function in button click and increment your number*/}
                        <button onClick={this.inc}>Increment</button>

                        {/* call decrement function in button click and decrement your number*/}
                        <button onClick={this.dec}>Decrement</button>

                        {/* call Reset function in button click and Reset your number*/}
                        <button onClick={this.res}>Reset</button>

                        {/* print state value */}
                        <h1>{this.state.num}</h1>
                        </>
                )
        }
}

export default Incre;