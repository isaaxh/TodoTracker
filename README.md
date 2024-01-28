# TodoTracker

A fullstack web application for daily task management and tracking.

## Features

- Authentication
- Add todos
- Track todos
- Categorize todos
- Pomodoro sessions

## Requirements

Make sure you have the following installed in your system:

- Node
- Nest JS
- PostgreSQL

## Getting started

Follow the steps one by one to get the project running.

Clone the repo:

```
git clone https://github.com/isaaxh/TodoTracker
```

cd into TodoTracker:

```
cd TodoTracker
```

### Setting up api

cd into api folder from the root of the entire project:

```
cd api
```

Install node modules:

```
npm install
```

Configure the .env varibles, take a look at .env.copy file to see the structure of env vars and create an `.env` file at the api root folder that has the exact env vars with exact same name with your credentials:

```
touch .env
```

Make sure you have setup your `PostgreSQL` and have a `names` database in the server.

Run the backend:

```
npm run start:dev
```


### Setting up frontend
cd into frontend folder from root of the entire project:

```
cd frontend
```

Install node modules:

```
npm install
```

run the frontend:

```
npm run dev
```
