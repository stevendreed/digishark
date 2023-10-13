/* game-ops.js
   Steven Reed
   09/19/2023

   this file contains fetch functions which call on the RAWG API

   [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
   link to the api:
   https://rawg.io/apidocs
   [++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++]
   
*/

// API CONSTANTS
const RAWG_KEY = `?token&key=aaadbe900b0f429ea88c22d1c7f9badf`;    // key for SDR
const RAWG_URL = `https://rawg.io/api/`;

/*
   rawgFetch function = fetch a json response based on search param
   accepts a query parameter, the url to push the parameter to, and the key
   returns the json response from the server
*/
const rawgFetch = async function(queryParam, url, key)
{
    // log fetch for testing purposes
    console.log(url+queryParam+key);
    fetch(url+queryParam+key)
    .then(function(response)
    {
        if (response.ok)
        {
            return response.json();
        } // end if
        else 
        {
            console.log(`Error: ` + response.statusText);
        } // else
    }// end function
    ) // end then
    .catch(function(errorOut)
    {
        console.log(`Unable to connect to ` + url);
    } // end catch
    ); // end then
} // end rawgFetch

/*
   getGameByName function = fetch request to the RAWG API which passes argument
   as a query parameter to the server.
   accepts a game name argument - function error handles for empty, erroneous spaces,
   and unacceptable special characters (out of ASCII range, endl, tabs, etc)
   returns a JSON of the request from the RAWG server
*/
const getGameByName = async function(gameToFind)
{
    // TESTING COMMENT
    console.log(`getByName envoked`);

    // create a query parameter based on input game
    let qp = `games?search=${gameToFind}`;
    rawgFetch(qp, RAWG_URL, RAWG_KEY)
    .then(result)
    {
        return result;
    } // end then
} // end getGameByName

const getScrShotByName = async function(queryParam)
{
    // set index we are interested in displaying: 0 is first
    let index = 0;

    // test console log
    console.log(`getScrShotByName envoked!`);
    let returnUrl = ``;
    // get a json of a game to find a screenshot for
    const searObj = new Promise((myResolve, myReject) =>
    {
        const searObj = getGameByName(queryParam);
        
        if (typeof searObj === `object`)
        {
            myResolve(console.log(`found a screenshot!`));
            let qp = `games?${searObj.slug}/screenshots`;
            returnUrl = rawgFetch(qp, RAWG_URL, RAWG_KEY)[index].background_image;
        } // end if
        else
        {
            myReject(console.log(`we couldn't find a screenshot`));
            // return generic penguin
            returnUrl = `https://www.clipartmax.com/middle/m2i8H7i8b1K9H7m2_confused-penguin-by-hotketchup-linux/`
        }
    }) // end Promise
    return returnUrl;
} // end getScrShotByName