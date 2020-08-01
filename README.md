# Series API

A web application and API service that makes archives of serialized books available to client applications.

## System dependencies

- Postgres

## Configuration

- To create the database and load the schema, run `rails db:setup`.
- To connect to the database, create a `.env` file with keys for `DATABASE_USERNAME` and `DATABASE_PASSWORD`.

## Run

- To begin the application, run `rails server`.
  - Use the `-b 0.0.0.0` option to make the server accessible to a local network.
- By default it runs on port 3000.
