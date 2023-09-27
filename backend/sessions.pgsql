DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions(
    id serial PRIMARY KEY,
    volunteer_id integer,
    date date NOT NULL,
    session_type varchar(25) NOT NULL,
    session_status varchar(25) NOT NULL,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id)
);

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-01', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-01', 'evening', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-02', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-02', 'evening', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-03', 'morning', 'bagged');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-03', 'evening', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-04', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-04', 'evening', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-05', 'morning', 'bagged');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-05', 'evening', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-06', 'morning', 'bagged');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-06', 'evening', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-07', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-07', 'evening', 'bagged');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-08', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-08', 'evening', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-09', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-09', 'evening', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-10', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-10', 'evening', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-11', 'morning', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-11', 'evening', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-12', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-12', 'evening', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-13', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-13', 'evening', 'available');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-14', 'morning', 'booked');

INSERT INTO sessions(date, session_type, session_status)
    VALUES ('2023-09-14', 'evening', 'available');

SELECT
    *
FROM
    sessions;

