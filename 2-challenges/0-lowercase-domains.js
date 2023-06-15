//Write a function that loops over a list of domain names and makes them all lowercase as an output

/** 
 Function:
 ===========
 *
 * name: lowerCaseWebsite
 *
 * parameters:
 *      - NAMES: list of strings
 *
 * return type: list of strings
 */

/**
 Pseudo code:
 ============
 *
 * set LOWERLIST to an empty list
 *
 * for each string, DOMAIN, in NAMES
 *      convert DOMAIN to lowercase and add it to LOWERLIST
 *
 * return LOWERLIST
 */

/** 
Test cases:
===========
lowerCaseWebsite(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]) should be ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]
*/

/**
 *
 * @param {string} NAMES - Input array of strings containing domain names of varying cases
 * @returns array of strings - lowercase converted array of NAMES
 */
function lowerCaseWebsite(NAMES) {
  let LOWERLIST = NAMES.map((el) => el.toLowerCase());

  return LOWERLIST;
}

console.log(
  `lowerCaseWebsite(["academy.tech","GITHUB.COM","StackOverflow.com", "mOzIlLa.OrG",]):`,
  lowerCaseWebsite([
    "academy.tech",
    "GITHUB.COM",
    "StackOverflow.com",
    "mOzIlLa.OrG",
  ]),
  `should be"academy.tech",[ 'academy.tech', 'github.com', 'stackoverflow.com', 'mozilla.org']`
);
