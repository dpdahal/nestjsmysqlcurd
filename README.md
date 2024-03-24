# Nestjs MySql TypeORM CRUD Example

## System Requirements
- Node.js
- npm
- MySQL Server
- Nestjs CLI
- Visual Studio Code
- Postman
- Git

## Install Process
* npm install -g @nestjs/cli
* nest new nestjs-mysql-typeorm-crud-example
* cd nestjs-mysql-typeorm-crud-example
### Add Additional Dependencies
* npm install @nestjs/typeorm typeorm mysql2

## Create Database
* Open MySQL Workbench
* Create a new database named `nestjsmysqlcrud`

## Configuration
* Open `src/app.module.ts` file
* Update the database connection details

```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username
    password
    database
    entities
    synchronize
})
```

