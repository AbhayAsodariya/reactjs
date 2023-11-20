import './list.css';
import { dt } from './data';
function List(){
        const fetchdata=()=>{
                {
                        let htm="";
                        dt.map((v)=>{
                                htm=htm+
                                `<div">
                                        <p">${v.name}<p/>
                                </div>`
                        });
                        document.getElementById("d").innerHTML=htm;
                }
        }
        return(
                <>
                <button onClick={fetchdata}>print</button>
                <div id='d'></div>
                </>
        )
}
export default List;