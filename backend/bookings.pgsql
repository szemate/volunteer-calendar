DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings(
    id serial PRIMARY KEY,
    session_id integer,
    volunteer_id integer,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id),
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (1, 5);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (2, 4);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (3, 2);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (4, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (5, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (7, 6);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (8, 5);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (9, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (10, 2);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (11, 1);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (12, 4);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (13, 3);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (14, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (15, 2);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (17, 6);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (19, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (20, 5);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (23, 2);
    
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (25, 6);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (27, 4);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (29, 4);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (30, 2);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (31, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (37, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (40, 6);
   
   
SELECT * FROM bookings;

SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day,
       session_type, b.id AS booking_id,
       v.name AS volunteer_name
      FROM sessions s LEFT JOIN bookings b ON (s.id = b.session_id)
      FULL OUTER JOIN volunteers v ON (b.volunteer_id = v.id)
      ORDER BY date;
    
