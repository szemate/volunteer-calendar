DROP TABLE IF EXISTS volunteers CASCADE;

CREATE TABLE volunteers(
    id serial PRIMARY KEY,
    first_name varchar(60) NOT NULL,
    last_name varchar(60) NOT NULL,
    phone_number varchar(20) NOT NULL,
    email varchar(50) NOT NULL,
    photo varchar(60)
);

DROP TABLE IF EXISTS sessions CASCADE;

CREATE TABLE sessions(
    id serial PRIMARY KEY,
    date date NOT NULL,
    session_type varchar(25) NOT NULL
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings(
    id serial PRIMARY KEY,
    session_id integer,
    volunteer_id integer,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id),
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);