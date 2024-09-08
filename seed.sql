USE TaskManager;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `users`;
TRUNCATE TABLE `user_tasks`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO TaskManager.users (email, passwd) VALUES
    ("admim@admim.com", "admim123");

SET @userId = LAST_INSERT_ID();

INSERT INTO TaskManager.user_tasks (user_id, tasks) VALUES
    (@userId, "Limpar o quarto");