# 🚀 Node.js MySQL User Management System

A User Management System developed using **Node.js, Express.js, MySQL and EJS** as part of my Web Development Learning Journey.

This project focuses on backend development, database connectivity and implementing CRUD (Create, Read, Update, Delete) operations using MySQL.

## 🛠️ Technologies Used

- Node.js
- Express.js
- MySQL
- MySQL2
- EJS (Embedded JavaScript Templates)
- HTML
- CSS
- JavaScript
- Faker.js
- Method Override

## 📚 Features

- Display the total number of registered users.
- View all users from the MySQL database.
- Add new users.
- Edit existing user information.
- Update usernames with password verification.
- Delete users.
- Generate unique user IDs using Faker.js.
- Dynamic data rendering using EJS.
- Database connectivity using MySQL2.
- Handle database errors.

## 📂 Project Structure

```text
NodeJS-MySQL-CRUD-Operations/
│
├── public/
│   └── style.css
│
├── views/
│   ├── home.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── showusers.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── schema.sql
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd 11.NodeWithSQL
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup MySQL Database

- Make sure MySQL Server is installed and running.
- Create the database named `new_delta`.
- Import the provided `schema.sql` file.
- Ensure the `user` table is available in the database.

### 5. Configure Database Connection

Configure your MySQL credentials using environment variables in a `.env` file.

### 6. Run the Application

```bash
node index.js
```

### 7. Open in Browser

```text
http://localhost:8080
```

## 🗄️ Database Information

- Database: MySQL
- Database Name: `new_delta`
- Node.js Driver: MySQL2
- Table: `user`

## 🔄 CRUD Operations

| Operation | HTTP Method | Route | Description |
|---|---|---|---|
| Create | POST | `/user` | Add a new user |
| Read | GET | `/user` | Display all users |
| Read | GET | `/` | Display total user count |
| Read | GET | `/user/new` | Show new user form |
| Update | PATCH | `/user/:id` | Update username |
| Update | GET | `/user/:userId/edit` | Show edit form |
| Delete | DELETE | `/user/:id` | Delete a user |

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Understanding relational databases.
- Connecting Node.js with MySQL.
- Writing SQL queries using MySQL2.
- Performing CRUD operations.
- Implementing Express.js routes.
- Handling HTTP methods (GET, POST, PATCH and DELETE).
- Working with dynamic EJS templates.
- Using Faker.js to generate unique IDs.
- Implementing password verification.
- Handling database errors.

## 👨‍💻 Author

**Rony Adhikary**

Aspiring Software Engineer | AI/ML Enthusiast | Web Developer

---

⭐ If you find this project interesting, feel free to explore my repository!
