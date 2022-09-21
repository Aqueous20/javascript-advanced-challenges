/**Show rating
 * given a rating display a star(*) for each full rating and a full-stop(.)for each half rating.
 * showRating(3) --> "* * *"
 * showRating(4.5) --> "* * * * ."
 * showRating(0.5) --> "."
 */
// initialise empty string
// loop through the rounded down rating
// add a star for every iteration
// if it is not the last iteration add a space
// if number is not an integer
// add a full stop
// return it

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger()) {
    ratings += " .";
  }
  return ratings;
}
console.log(showRating(3.5));

/**Sort by lowest to Highest price
 * Given an array of numbers, return the prices sorted by low to high
 * sortLowToHigh([20,40,10,30,50,10]) --> [10,10,20,30,40,50]
 * sortLowToHigh([5,10,0,-5]) --> [-5, 0, 5, 10]
 * sortLowToHigh([3,2,1,0]) --> [0,1,2,3]
 */

// using for loop
function sortLowToHigh(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let newArr = arr[i];
        arr[i] = arr[j];
        arr[j] = newArr;
      }
    }
  }
  return arr;
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

// using sort
function sortLowToHigh2(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}
console.log(sortLowToHigh2([3, 2, 1, 0]));

/**Sort by highest to lowest
 * given an array of objects return the prices sorted by high to low
 * sortHighToLow([{id: 1, price: 50}
 *                {id: 2, price: 30}
 *                {id: 3, price: 60}
 *                {id: 4, price: 10}
 *              ])
 *              -->([{id: 3, price: 60}
 *                   {id: 1, price: 50}
 *                   {id: 2, price: 30}
 *                   {id: 4, price: 10}
 *              ])
 */

function sortHighToLow(arr) {
    return arr.sort((a , b) => b.price - a.price)
}
console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

/**Promises
 * on youtube watch:
 * "the Async Await Episode i Promised" --> fireship
 * "Async Await JavaScript ES7" --> TechSith (1.5 speed)
 * "Async Js Crash Course - Callbacks, promises, Async Await" --> Traversy Media (1.5x speed)
 * 
 * Actual Question 
 * Call this Api "hhtps://jsonplaceHolder.typicode.com/posts" and return all the posts by any given user id
*/

async function postsByUser(userId){
    const response = await fetch('https://jsonplaceHolder.typicode.com/posts')
    const data = await response.json()
    const posts = data.filter(element => element.userId === userId)
    console.log(posts)
}
postsByUser(4)

/**First 6 incomplete Todos
 * call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todos from the result
*/

async function firstSixIncomplete(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const Todos = data.filter(element => element.completed === false).slice(0,6)
    console.log(Todos)   
}
firstSixIncomplete()