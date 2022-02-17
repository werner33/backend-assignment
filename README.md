# Fetch

In this challenge, you will build a simple API and write some JavaScript to transform the response.

## Task 1 - Build Records API

You have access to 500 'records' from the file at `data/colors.json`. Each record looks like this: 

```json
    { 
        "id": 500, 
        "color": "blue", 
        "disposition": "closed" 
    }
```
 Each record has the following: 

- **id**: A unique integer
- **color**: One of `"red"`, `"brown"`, `"blue"`, `"yellow"`, or `"green"`
- **disposition**: Either `"open"` or `"closed"`

When calling the `/records.js` path, complete the API endpoint so that it returns a JSON response in the following format:

```json
 {
    "previousPage":null,
    "nextPage":2,
    "ids":[1,2,3,4,5,6,7,8,9,10],
    "open":[
            {"id":2,"color":"yellow","disposition":"open","isPrimary":true},
            {"id":4,"color":"brown","disposition":"open","isPrimary":false},
            {"id":6,"color":"blue","disposition":"open","isPrimary":true},
            {"id":8,"color":"green","disposition":"open","isPrimary":false},
            {"id":10,"color":"red","disposition":"open","isPrimary":true}
        ],
    "closedPrimaryCount":1
  }
```

Each response from the `/records` endpoint will have the following:

- **previousPage**: A unique integer
- **nextPage**: A unique integer 
- **ids**: ids of all the records included
- **open**: an array of objects with the disposition, "open"
- **closedPrimaryCount**: an integer count of all the objects with disposition, "closed"

A basic request URL would look like this:

```
/records
```

## Task 2 - Handle Query String

1. Get data from the `/records` endpoint, accepting the `page` parameter. Process pages of 10 records at a time. 

Examples: 
```/records?page=4```
```/records?page=6```

If page is not included, default to page 1.

2. Get data from the `/records` endpoint, accepting the `colors` parameter. Filter results by the colors passed in the query string. Results should be filtered by color before the pagination is completed.

Examples: 
```/records?colors=blue,red,yellow```
```/records?colors=pink```

 If omitted, fetch all colors.


As a combined example, to fetch the 2nd page of red and brown items from the API, `retrieve` might be called like this:

  ```js
    /records?colors=red,brown&page=2
  ```

## Additional notes

- Don't add any additional libraries or edit any files other than `routes/records.js`. You may add an addional file with helper functions if you would like.

- We've provided a suite of unit tests. Your solution should pass all tests.

## Setup

**Requirements:** NodeJS >= 10

`npm install` to install.

`npm test` to run the provided unit tests.
