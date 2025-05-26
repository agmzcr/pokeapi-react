import React from "react";
import "./Description.css";

const Description = ({
  id,
  name,
  image,
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}) => {
  return (
    <div className="desc">
      <div className="desc-header">
        <span className="desc-id">#{id}</span>
        <img className="desc-img" src={image} alt={name} />
        <h2 className="desc-name">{name}</h2>
      </div>
      <div className="desc-info">
        <div>
          <b>Height:</b> {heightpok * 10} cm
        </div>
        <div>
          <b>Weight:</b> {(weightpok * 0.1).toFixed(1)} kg
        </div>
      </div>
      <h3 className="desc-stats-title">Stats</h3>
      <table className="desc-stats-table">
        <tbody>
          <tr>
            <td>{pokstat1}</td>
            <td>{posbs1}</td>
          </tr>
          <tr>
            <td>{pokstat2}</td>
            <td>{posbs2}</td>
          </tr>
          <tr>
            <td>{pokstat3}</td>
            <td>{posbs3}</td>
          </tr>
          <tr>
            <td>{pokstat4}</td>
            <td>{posbs4}</td>
          </tr>
          <tr>
            <td>{pokstat5}</td>
            <td>{posbs5}</td>
          </tr>
          <tr>
            <td>{pokstat6}</td>
            <td>{posbs6}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Description;
