import { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const buttonClicked = (value) => {
    if (value=='AC') {
      setInput("");
    } else if(value=='DEL') {
      setInput(input.slice(0, -1));
    } else if (value=='=') {
      setInput(eval(input));
    } else {
      setInput(input+value); 
    }
  };
  

  return (
    <>
    <div style={{width:"100%",height:"100vh",backgroundColor:"black",display:"flex",justifyContent:"center"}}>
       <div style={{height:"600px",width:"450px",borderRadius:"10%",backgroundColor:"goldenrod",paddingLeft:"20px",paddingRight:"20px"}}>
          <div style={{backgroundColor:"white",height:"450px",width:"400px", marginTop:"70px", borderRadius:"5%"}}>
  
            <input value={input} style={{height:"10vh",width:"100%",marginTop:"30px",borderRadius:"10px",marginBottom:"20px", backgroundColor:"ghostwhite",paddingRight:"10px",display:"flex",alignContent:"center"}} type="text" />
              <div style={{alignItems:"center",alignContent:"center", paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5%"}}>
                <button  onClick={()=>buttonClicked("7")} style={{padding:"20px 40px",borderRadius:"10%",backgroundColor:"whitesmoke"}}>7</button>
                <button onClick={()=>buttonClicked("8")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>8</button>
                <button onClick={()=>buttonClicked("9")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>9</button>
                <button onClick={()=>buttonClicked("*")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>*</button>
  
              </div>
              <div style={{paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5%"}}>
                <button onClick={()=>buttonClicked("4")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>4</button>
                <button onClick={()=>buttonClicked("5")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>5</button>
                <button onClick={()=>buttonClicked("6")}style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>6</button>
                <button onClick={()=>buttonClicked("-")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>-</button>
              </div>
              <div style={{paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5%"}}>
                <button onClick={()=>buttonClicked("1")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>1</button>
                <button onClick={()=>buttonClicked("2")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>2</button>
                <button onClick={()=>buttonClicked("3")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>3</button>
                <button onClick={()=>buttonClicked("+")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>+</button>
              </div>
              <div style={{paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5%"}}>
                <button onClick={()=>buttonClicked("AC")} style={{padding:"20px 40px",backgroundColor:"greenyellow",borderRadius:"10%"}}>AC</button>
                <button onClick={()=>buttonClicked("0")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>0</button>
                <button onClick={()=>buttonClicked(".")} style={{padding:"20px 40px",backgroundColor:"whitesmoke",borderRadius:"10%"}}>.</button>
                <button onClick={()=>buttonClicked("=")} style={{padding:"20px 40px",backgroundColor:"greenyellow",borderRadius:"10%"}}>=</button>
              </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default App
