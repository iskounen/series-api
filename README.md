# Series API

A web application and API service that makes archives of serialized books available to client applications.

## System dependencies

- Postgres

## Configuration

- To create the database and load the schema, run `rails db:setup`.
- To connect to the database, create a `.env` file with keys for `DATABASE_USERNAME` and `DATABASE_PASSWORD`.

### Create a database user

To create a user that the application can use to connect to the database, run `psql` followed by the following commands:

```
# CREATE USER [username] WITH PASSWORD '[password]'; 
# ALTER ROLE [username] SUPERUSER CREATEROLE CREATEDB REPLICATION; 
```

## Run

- To begin the application, run `rails server`.
- By default it runs on port 3000.
