import React from "react";


function App(){
    let curDate = new Date(2022,8,2,7);
    curDate =curDate.getHours();
    let greeting = "";
    const cssStyle = {};
    
    if(curDate >=1 && curDate <12){
      greeting = 'Good Morning';
      cssStyle.color = "green";
    }else if(curDate>=12 && curDate <18){
      greeting = 'Good AfterNoon';
      cssStyle.color = "Orange";
    }else {
      greeting = 'Good Night';
      cssStyle.color = "Yellow";
    }
     
    return(
        <>
        <div>
        <h1>Hello Sir, <span style={cssStyle}> { greeting }   </span>  
        </h1>
        </div>
        </>
    )

}
export default App;