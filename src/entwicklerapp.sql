DROP TABLE IF EXISTS entwickler CASCADE;

CREATE TABLE entwickler (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    level VARCHAR(255)
);

INSERT INTO entwickler (name, email, level) VALUES ('Robert', 'robert@gmail.com', 'senior');