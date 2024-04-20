# Authentication service

This app is designed as a portable authentication service to be used in a larger
containeized app.

## Requirements

- authenticate user via third party and issue JWT
- validate JWT in a request
- use supabase as auth provider
- deploy as a Docker container

## Endpoints

- GET `/login` - login UI

- POST `/login` - login user and store JWT cookie

- GET `/register` - registration UI

- POST `/register` - register user with email and password

- POST `/logout` - logout user and clear JWT cookie

- POST `/authorize` - validate JWT
