# Todo List Backend

## Introduction

This repository contains all the backend code of the project.
You can watch a video demonstration of the application here: [Video Link](https://youtu.be/5ejrRWrmp8w).

## Technology Stack

- **NestJS**: Is a backend framework used in this project. 
- **Prisma**: Is a ORM, that help with the database interaction.
- **PostgreSQL**: The database used.

## Features

- **CRUD Operations**:
- **Task Management**: 
- **Database Integration**: 

## How I Did It 

I followed the basic project structure, using the concept of use cases to keep my code organized. I created the two endpoints needed for creating and updating a resource. Initially, I made a CreateUseCase for creating a resource, but in the end, I combined everything into a single SaveTaskUseCase, which was cleaner. I also used the class-validator library to control and validate the data.


## Setup and Installation

### Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository>

2. **Install dependencies**

   ```bash
   yarn install

2. **Setup the database**

  - Check the .env file for the database credentials.
  And use the commands :

   ```bash
   yarn run prisma:generate
   
   yarn run prisma:migrate:run

   yarn run prisma:seed
   ```

3. **Run the api**

  ```bash
  yarn run start:dev
  ```


