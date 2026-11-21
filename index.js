const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// Middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// EJS Configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "new_delta",
    password: "Radha Krishna",
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});


// ==========================================
// 1. HOME ROUTE (READ)
// ==========================================

app.get("/", (req, res) => {

    let q = "SELECT COUNT(*) AS count FROM user";

    connection.query(q, (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        let count = result[0].count;

        res.render("home.ejs", { count });

    });

});


// ==========================================
// 2. SHOW ALL USERS (READ)
// ==========================================

app.get("/user", (req, res) => {

    let q = "SELECT * FROM user";

    connection.query(q, (err, users) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        res.render("showusers.ejs", { users });

    });

});


// ==========================================
// 3. NEW USER FORM (CREATE - GET)
// ==========================================

app.get("/user/new", (req, res) => {

    res.render("new.ejs");

});


// ==========================================
// 4. CREATE NEW USER (CREATE - POST)
// ==========================================

app.post("/user", (req, res) => {

    let { username, email, password } = req.body;

    let userId = faker.string.uuid();

    let q = `INSERT INTO user (userId, username, email, password)
             VALUES (?, ?, ?, ?)`;

    let user = [userId, username, email, password];

    connection.query(q, user, (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        console.log("New User Added Successfully!");

        res.redirect("/user");

    });

});


// ==========================================
// 5. EDIT USER FORM (UPDATE - GET)
// ==========================================

app.get("/user/:userId/edit", (req, res) => {

    let { userId } = req.params;

    let q = "SELECT * FROM user WHERE userId = ?";

    connection.query(q, [userId], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        let user = result[0];

        if (!user) {
            return res.send("User not found");
        }

        res.render("edit.ejs", { user });

    });

});


// ==========================================
// 6. UPDATE USER (UPDATE - PATCH)
// ==========================================

app.patch("/user/:id", (req, res) => {

    let { id } = req.params;

    let { password: formPass, username: newUsername } = req.body;

    // Find user
    let q = "SELECT * FROM user WHERE userId = ?";

    connection.query(q, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        let user = result[0];

        if (!user) {
            return res.send("User not found");
        }

        // Verify password
        if (formPass !== user.password) {
            return res.send("WRONG password");
        }

        // Update username
        let q2 = "UPDATE user SET username = ? WHERE userId = ?";

        connection.query(q2, [newUsername, id], (err, result) => {

            if (err) {
                console.log(err);
                return res.send("Some error in DB");
            }

            console.log("Username Updated Successfully!");

            res.redirect("/user");

        });

    });

});


// ==========================================
// 7. DELETE USER (DELETE)
// ==========================================

app.delete("/user/:id", (req, res) => {

    let { id } = req.params;

    let q = "DELETE FROM user WHERE userId = ?";

    connection.query(q, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        if (result.affectedRows === 0) {
            return res.send("User not found");
        }

        console.log("User Deleted Successfully!");

        res.redirect("/user");

    });

});


// ==========================================
// START SERVER
// ==========================================

app.listen(8080, () => {

      console.log("Server is running on port 8080");

}); 