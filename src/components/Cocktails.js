import axios from "axios";
import React, { useState, useEffect, } from "react";

const useCocktails = () => {
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        try {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then((res) => {
                console.log(res);
                setItems(res.data.drinks);
            });
        } catch (err) {
            console.error(err);
        }
    }, [searchInput]);
    return (
        <div className="cocktails">
            <input
                placeholder="search cocktails..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="input"
            />
        </div>
    );
}

export default useCocktails;