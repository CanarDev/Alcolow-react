import axios from "axios";
import React  from "react";

const Cocktails = () => {
    try {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            .then((resCategory) => {
                console.log(resCategory);
                const categories = resCategory.data.drinks
            });
    } catch (err) {
        console.error(err);
    }


    return (
        <div className="cocktails">
            {/* TODO show categories */}
            <h1></h1>
        </div>
    );
}

export default Cocktails;