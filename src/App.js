import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
    // Api calls should not exceed a maximum 10 per minute
    const APP_ID = "0bbbdc06";
    const APP_KEY = "7050e6d73797175fb846204ca72674f9";

    // Here we create states
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    // Runs first time the app get mounted
    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = event => {
        setSearch(event.target.value);
    };

    const getSearchButtonClicked = event => {
        // Prevent page from refresh after submit button is clicked
        event.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        // <div className="App">
        //     <form onSubmit={getSearchButtonClicked}
        //           className="search-form">
        //         <input type="text"
        //                className="search-bar"
        //                value={search}
        //                onChange={updateSearch}
        //         />
        //         <button type="submit" className="search-btn">
        //             Search
        //         </button>
        //     </form>
        //     {recipes.map((recipe) => (
        //         <Recipe key={recipe.recipe.image}
        //                 title={recipe.recipe.label}
        //                 calories={recipe.recipe.calories}
        //                 image={recipe.recipe.image}
        //                 ingredient={recipe.recipe.ingredient}
        //         />
        //     ))}
        // </div>
        <div className="App">
            <div id="cover">
                <form onSubmit={getSearchButtonClicked}>
                    <div className="tb">
                        <div className="td">
                            <input type="text"
                                   placeholder="Search Product"
                                   onChange={updateSearch}
                                   value={search}
                                   required/>
                        </div>
                        <div className="td" id="s-cover">
                            <button type="submit">
                                <div id="s-circle"/>
                                <span/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="Products">
                {recipes.map((recipe) => (
                    <Recipe key={recipe.recipe.image}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
