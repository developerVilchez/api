# API in node with express

### Abstract

This project aims to use public data of [football-data API](https://football-data.org), and use this data to create an API.

### Assumptions

- Data obtained from the **football-data.org** programmatic API is considered the **source of truth**
- As per https://www.football-data.org/'s terms ["if you are using a free key your requests are limits"](https://www.football-data.org/coverage)
- Get free api key takes 10 mins

### Limitations & Unknowns

- With a free api-key you can calls
  Free: 12 competitions with results/fixtures/tables and made 10 calls/minute


### Data structures

#### Sample [football-data API](https://www.football-data.org/documentation/quickstart)


#### Endpoints 

- If you are using the [football-data API](https://football-data.org) you can use these endpoints

```
- /competitions
- /competitions/<competition_id>
```

If you are using local-json with data from [football-data API](https://football-data.org)
you can use these endpoints


```
- /competitions-json
- /competitions-json/<competition_id> 
- /team-json 
- /team-json/<team_id> 
- /players-json
```
#### Installation

```bash

> git clone git@github.com:developerVilchez/api.git
> npm install
> node server.js

```

