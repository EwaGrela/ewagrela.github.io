# demo
## Basic Flask app : https://level-up-basic.herokuapp.com/
1. go to https://level-up-basic.herokuapp.com/counter to see how many visits there were
2. go to https://level-up-basic.herokuapp.com/now to see the current time
3. go to https://level-up-basic.herokuapp.com/user-agent to see your user agent

## Flask app to test logging in using a cookie and REST services: https://something-fishy.herokuapp.com/
1. use RESTer (for Firefox) or POSTman services for POST requests and log in on https://something-fishy.herokuapp.com/login using POST method (username and password in app.py file)
2. once logged in, you can see list of all fish on https://something-fishy.herokuapp.com/fishes using GET
3. using POST you can add a fish
4. using RESTer or POSTman, you can GET, PATCH, PUT and DELETE a single fish https://something-fishy.herokuapp.com/fishes/<fish_id>

## Flask app using SQLite https://geocities-kinda-like.herokuapp.com/
1. using GET (in your browser, RESTer, POSTman) you get the list of all cities in the database listed alphabetically https://geocities-kinda-like.herokuapp.com/cities
2. using GET you get the list of sorted cities in one country (here, Poland, but works for any country): 
https://geocities-kinda-like.herokuapp.com/cities?country_name=Poland
3. you can limit the results, works whether you want them for specific country or not: https://geocities-kinda-like.herokuapp.com/cities?country_name=Poland&per_page=10&page=2 or 
https://geocities-kinda-like.herokuapp.com/cities?per_page=10&page=2
4. using POST (RESTer or POSTman) you can POST a new record, provided the country_id you use is in the database:

{
    "country_id": 76,
    "city_name": "Warszawa",
}

will return the JSON with cities data as a result, will throw an error if no such country_id
5. using GET you can check the number of roles in each language https://geocities-kinda-like.herokuapp.com/lang_roles

## Flask app using postgreSQL https://we-built-this-city.herokuapp.com/
1. using GET (in your browser, RESTer, POSTman) you get the list of all cities in the database listed alphabetically https://we-built-this-city.herokuapp.com/cities
2. using GET you get the list of sorted cities in one country (here, Poland, but works for any country): 
https://we-built-this-city.herokuapp.com/cities?country_name=Poland
3. you can limit the results, works whether you want them for specific country or not: https://we-built-this-city.herokuapp.com/cities?country_name=Poland&per_page=10&page=2 or 
https://we-built-this-city.herokuapp.com/cities?per_page=10&page=2
4. using POST (RESTer or POSTman) you can POST a new record, provided the country_id you use is in the database:

{
    "country_id": 76,
    "city_name": "Warszawa",
}

 will return the JSON with cities data as a result, will throw an error if no such country_id

