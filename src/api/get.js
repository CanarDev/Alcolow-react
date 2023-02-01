import axios from "axios";

export default axios.create({
  API_URL:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`,
});