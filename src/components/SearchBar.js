import axios from "axios";
import React, { useState, useEffect, } from "react";

const Cocktails = ({setItemsRes}) => {
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        try {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
                .then((res) => {
                    console.log(res);
                    setItemsRes(res.data.drinks);
                });
        } catch (err) {
            console.error(err);
        }
    }, [searchInput]);
    return (
            <input className="
                text-grey-text
                bg-transparent
                grow
            " type="search" placeholder="Rechercher sur alcolow.com" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
    );
}

export default Cocktails;