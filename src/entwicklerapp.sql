DROP TABLE IF EXISTS entwickler CASCADE;

CREATE TABLE entwickler (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    level BOOLEAN NOT NULL
);

INSERT INTO entwickler (name, email, level) VALUES ('Robert', 'robert@gmail.com', true);