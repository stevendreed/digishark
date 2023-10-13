// app.js

console.log(`Hello world!`);

// initialize array of objects
initLS();

/*
   concatQuerPar function = concatenate a query parameter from a series of
   search terms
   function combines strings together into a way that is understandable by
   a server API. Intended use is alongside a fetch function
*/

// ['game=fallout','tag=shooter']
const concatQuerPar = function(arrayOfParams)
{
    let finalQuery = `?`;
    // craft a query of concatenated query parameters
    for (let i = 0; i < arrayOfParams.length; i++)
    {
        if (i > 0)
        {
            finalQuery += `&`; // add an ampersand if/f more items to loop
                               // thru AND query isn't a singleton
        } // end if
        finalQuery += arrayOfParams[i]; // add the ith param to our query
    } // end for
    console.log(finalQuery); // test output for finalQuery
} // end concatQuerPar


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TESTING
// comb document for element to append a button to, for testing

const searchBtnEl = document.getElementById(`testing-form`);

searchBtnEl.addEventListener(`submit`, function(event)
{
    console.log(`submitted!`);
    event.preventDefault(); // stop page from automatically refreshing
    
    // get data entered in input element
    // let inputData = document.getElementById(`input-field`).formdata
    let inputData = document.getElementById(`data`).value;

    // console.log(inputData);
    // pass data as fetch query
    // rawgFetch(concatQuerPar(inputData), RAWG_URL);
    //console.log(rawgFetch(inputData, RAWG_URL, RAWG_KEY));
    console.log(getGameByName(inputData));
} // end function
); // end searchBtnEl

const scrShotBtnEl = document.getElementById(`ss-form`)

scrShotBtnEl.addEventListener(`submit`, function(event)
{
    console.log(`looking for a screenshot`);
    event.preventDefault();

    let inputData = document.getElementById(`find-ss`).value;

    console.log(getScrShotByName(inputData));
}// end function
); // end addEventListener

// find body element
const bodyEl = document.getElementsByTagName(`body`); // find body element

// append a child button to the last child of body

// give the button an id that we can target

// set the button as a variable

// add an event listener to the button that will fetch when clicked

// END TESTING
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++