export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    //logic fetch our data 
    return async dispatch => {
        const result = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c144edc0bbb543feb90d2836a20a17c5');

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
    }
}
//action
 export const toggleFavorites = url  => {
     return {
         type:TOGGLE_FAVORITES,
         payload:url
     }
 }