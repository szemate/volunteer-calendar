DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions(
    id serial,
    volunteer_id integer,
    date date NOT NULL,
    slot_type integer NOT NULL,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id),
    CONSTRAINT sessions_key PRIMARY KEY (id, volunteer_id)
);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-01', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-01', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-02', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-02', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-03', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-03', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-04', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-04', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-05', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-05', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-06', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-06', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-07', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-07', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-08', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-08', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-09', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-09', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-10', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-10', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-11', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-11', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-12', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-12', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-13', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-13', 1);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-14', 0);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-14', 1);

SELECT
    *
FROM
    sessions;

