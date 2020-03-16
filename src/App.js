import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
    const APP_ID = "0bbbdc06";
    const APP_KEY = "7050e6d73797175fb846204ca72674f9";

    const [recipes, setRecipes] = useState([]);

    // Runs first time the app get mounted
    useEffect(() => {
        getRecipes();
    }, []);

    async function getRecipes(mc) {
        const response = await fetch(
            `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="App">
            <form className="search-form">
                <input type="text" className="search-bar"/>
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>
        </div>
    );
};

export default App;
