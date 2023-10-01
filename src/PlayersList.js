import React, { useState, useEffect} from "react";
import "./App.css";
import players from "./players";
import Player from "./Player";
import gsap from "gsap";

const PlayersList = () => {
    const [clickedItems, setClickedItems] = useState([]);

    const expand = (index) => {
        gsap.to(".player-item", {
            width: (i) => (i === index && !clickedItems[index] ? "calc(100% - 20px)" : "calc(33.33% - 20px)"),
            duration: 0.5,
            ease: "power3.inOut"    
        });

        const updatedClickedItems = [...clickedItems];
        updatedClickedItems[index] = !clickedItems[index];
        setClickedItems(updatedClickedItems);
    };

    useEffect(() => {
        gsap.to(".player-item", {
            width: (i) => (clickedItems[i] ? "calc(100% - 20px)" : "calc(33.33% - 20px)"),
            duration: 0.5,
            ease: "power3.inOut" 
        });

    }, [clickedItems]);



    return ( 
        <div className="player-list">
            {players.map((player, index) => (
                <div 
                   key={index} className={`player-item ${clickedItems[index] ? "expanded" : " "}`} 
                   onClick={() => expand(index)}>
                    
                    <Player {...player}/>
                </div>
            ))}
        </div>
     );
};
 
export default PlayersList;
