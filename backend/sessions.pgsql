DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions(
    id serial PRIMARY KEY,
    volunteer_id integer,
    date date NOT NULL,
    session_type varchar(25) NOT null,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id)
);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-01', 'morning', 5);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-01', 'evening', 4);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-02', 'morning', 2);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-02', 'evening', 3);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-03', 'morning', 1);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-03', 'evening', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-04', 'morning', 6);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-04', 'evening', 5);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-05', 'morning', 1);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-05', 'evening', 2);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-06', 'morning', 1);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-06', 'evening', 4);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-07', 'morning', 3);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-07', 'evening', 1);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-08', 'morning', 2);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-08', 'evening', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-09', 'morning', 6);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-09', 'evening', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-10', 'morning', 3);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-10', 'evening', 5);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-11', 'morning', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-11', 'evening', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-12', 'morning', 2);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-12', 'evening', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-13', 'morning', 6);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-13', 'evening', null);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-14', 'morning', 4);

INSERT INTO sessions(date, session_type, volunteer_id)
    VALUES ('2023-09-14', 'evening', null);

SELECT
    *
FROM
    sessions;
   
SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day,
       session_type,
       volunteers.name AS name
    FROM sessions
    LEFT OUTER JOIN volunteers ON (sessions.volunteer_id = volunteers.id)
    ORDER BY date;


