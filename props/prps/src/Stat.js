import React from "react";

class Statt extends React.Component{
        state =
        {
                num:1,
                strg:"Abhay",
                arr:[1,2,3],
                obj:{nm:"abhay"}
                
        }

        up = ()=>{
                this.setState({
                        num:this.state.num+1,
                        strg:"Nakum",
                        arr:[4,5,6,"AAA"],
                        obj:{nm:"maulik"}
                        
                })  
        }
        render(){
                return(

                        <>
                        <button onClick={this.up}>Click</button>
                        {/* <p id="d"></p> */}
                        <p><b>Number : </b>{this.state.num}</p>
                        <p><b>String : </b>{this.state.strg}</p>
                        <p><b>Array : </b>{this.state.arr}</p>
                        <p><b>Object : </b>{this.state.obj.nm}</p>
                        </>
                )
        }
}

export default Statt;