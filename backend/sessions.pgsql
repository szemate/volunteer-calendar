DROP TABLE IF EXISTS sessions CASCADE;

CREATE TABLE sessions(
    id serial PRIMARY KEY,
    date date NOT NULL,
    session_type varchar(25) NOT NULL
);

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-01', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-01', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-02', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-02', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-03', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-03', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-04', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-04', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-05', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-05', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-06', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-06', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-07', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-07', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-08', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-08', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-09', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-09', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-10', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-10', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-11', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-11', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-12', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-12', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-13', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-13', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-14', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-14', 'evening');
   
INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-15', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-15', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-16', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-16', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-17', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-17', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-18', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-18', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-19', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-19', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-20', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-20', 'evening');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-21', 'morning');

INSERT INTO sessions(date, session_type)
    VALUES ('2023-09-21', 'evening');

SELECT
    *
FROM
    sessions;
   
SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day,
       session_type
    FROM sessions
    ORDER BY formatted_date;


