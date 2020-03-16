import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
      <div className="Product">
          <img id="product-img" src={image} alt={title}/>
          <h2>Titre du Plat</h2>
          <h1 id="product-title">{title}</h1>
          <h2>Nombre de Calories</h2>
          <p id="product-calories">{calories}</p>
          <h2>Les Ingrédients</h2>
          <ul>
              {ingredients.map((ing) => (
                  <li>{ing.text}</li>
              ))}
          </ul>
      </div>
    );
};

export default Recipe;
