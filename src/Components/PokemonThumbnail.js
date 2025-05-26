import React, { useState } from "react";
import Description from "./Description";
import "./PokemonThumbnail.css";
import { useEffect } from "react";

const typeIcons = {
  fire: require("../assets/types/fire.png"),
  water: require("../assets/types/water.png"),
  grass: require("../assets/types/grass.png"),
  electric: require("../assets/types/electric.png"),
  psychic: require("../assets/types/psychic.png"),
  ice: require("../assets/types/ice.png"),
  ground: require("../assets/types/ground.png"),
  rock: require("../assets/types/rock.png"),
  fairy: require("../assets/types/fairy.png"),
  poison: require("../assets/types/poison.png"),
  bug: require("../assets/types/bug.png"),
  flying: require("../assets/types/flying.png"),
  fighting: require("../assets/types/fighting.png"),
  normal: require("../assets/types/normal.png"),
  ghost: require("../assets/types/ghost.png"),
  dragon: require("../assets/types/dragon.png"),
  dark: require("../assets/types/dark.png"),
  steel: require("../assets/types/steel.png"),
};

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
  onClick,
}) => {
  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [show]);

  return (
    <div className={style} onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img className="pokemon-img" src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <div className="type-icon">
          <img src={typeIcons[type]} alt={type} title={type} />
        </div>
      </div>
      {show && (
        <div className="modal-overlay" onClick={() => setShow(false)}>
          <div
            className={`modal-content ${type}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setShow(false)}>
              X
            </button>
            <Description
              id={id}
              name={name}
              image={image}
              weightpok={weight}
              heightpok={height}
              pokstat1={stat1}
              pokstat2={stat2}
              pokstat3={stat3}
              pokstat4={stat4}
              pokstat5={stat5}
              pokstat6={stat6}
              posbs1={bs1}
              posbs2={bs2}
              posbs3={bs3}
              posbs4={bs4}
              posbs5={bs5}
              posbs6={bs6}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonThumbnail;
