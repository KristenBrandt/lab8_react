import React from "react";

import "./game.css"

class Board extends React.Component{
    createCard(){
        return <>
                <Card1/> 
                <Card2/>
                <Card3/>
                <Card4/> 
                <Card5/>
                <Card6/>
                <Card7/> 
                <Card8/>

                </>
    }
    render(){
        const turn = "Turno: "
        return <>
        <div className="font-white-xl">Juego de memoria de Kristen</div>
        <div className="font-white-xl">Cartas hechas por Mark Brandt</div>
        <div className="turn">{turn}</div>

        <div className="csscontainer">
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
            <Card6/>
            <Card7/>
            <Card8/>
            <Card8/>
            <Card7/>
            <Card6/>
            <Card5/>
            <Card4/>
            <Card3/>
            <Card2/>
            <Card1/>
            
            

        </div>
        
        </>
    }
}

class Card1 extends React.Component{
    
    state = {
        fliper : false
    }


    render(){
        return <>
            <div className="card" onClick={flipCard}>
                <div className= "front-face" >
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta1.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}

class Card2 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta2.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}
class Card3 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta3.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}
class Card4 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta4.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}
class Card5 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta5.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}
class Card6 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta6.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}
class Card7 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src = "./components/tarjeta7.png"></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}
class Card8 extends React.Component{
    render(){
        return <>
            <div className="card">
                <div className= "front-face">
                    <img id= "image1" width="150px" height="150px" src ="./components/tarjeta8.png" ></img>
                </div>
                <div className="back-face">
                    <img id= "imageback" width="150px" height="150px" src="./components/tarjeta9.png"></img>
                </div>
                
            </div>
        </>

    }
}





function flipCard() {
    const carton = document.querySelectorAll('.card');
    //console.log("FLIP ACTIVATED");
    carton.classList.toggle('flip');
    console.log("FLIP ACTIVATED");
    carton.forEach(x => x.classList.toggle('flip'))
    carton.forEach(x => carton.addEventListener('click', flipCard()));
    

}





export default Board;
