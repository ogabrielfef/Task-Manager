DROP DATABASE IF EXISTS TaskManager;

CREATE DATABASE TaskManager;

USE TaskManager;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE user_tasks (
    user_id INT NOT NULL,
    tasks JSON NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
