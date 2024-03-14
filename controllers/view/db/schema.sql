DROP DATABASE IF EXISTS techTalk_db;

CREATE DATABASE techTalk_db;

CREATE TABLE techTalk_db.BlogPost (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    userId INT NOT NULL
);

INSERT INTO techTalk_db.BlogPost (title, content, created_at, updated_at, userId)
VALUES 
('Why MVC is so important', 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
('Authentication Vs. Authorization', 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed to access the system.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Object-Relational Mapping', 'I have really loved learning about ORMs. It has really simplified the way I create queries in SQL!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);


DROP TABLE IF EXISTS techTalk_db.comment;
CREATE TABLE techTalk_db.comment (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    blogPost_id INT,
    user_id INT,
    comment TEXT,
    created DATETIME,
    FOREIGN KEY (blogPost_id) REFERENCES blogPost(id), -- Updated to reference the 'id' column in the 'blogPost' table
    FOREIGN KEY (user_id) REFERENCES user(id) -- Added foreign key constraint for the 'user_id' column
);
