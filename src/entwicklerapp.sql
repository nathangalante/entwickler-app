DROP TABLE IF EXISTS entwickler CASCADE;

CREATE TABLE entwickler (
    id SERIAL primary key,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    level int CHECK(level BETWEEN 0 AND 1)
);

INSERT INTO entwickler (name, email, level) VALUES ('Robert', 'robert@gmail.com', 1);
INSERT INTO entwickler (name, email, level) VALUES ('James', 'james@gmail.com', 0);
INSERT INTO entwickler (name, email, level) VALUES ('Rebeca', 'robert@gmail.com', 1);
INSERT INTO entwickler (name, email, level) VALUES ('Thomas', 'robert@gmail.com', 1);