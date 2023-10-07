DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings(
    id serial PRIMARY KEY,
    session_id integer,
    volunteer_id integer,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id),
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (1, 9);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (2, 7);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (3, 2);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (4, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (5, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (7, 6);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (8, 11);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (9, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (10, 12);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (11, 1);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (12, 8);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (13, 3);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (14, 1);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (15, 4);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (17, 5);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (19, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (20, 9);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (23, 10);
    
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (25, 6);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (27, 2);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (29, 11);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (30, 12);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (31, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (37, 7);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (40, 6);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (44, 8);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (45, 5);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (46, 2);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (47, 3);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (49, 11);

INSERT INTO bookings (session_id, volunteer_id)
    VALUES (50, 6);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (51, 5);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (53, 4);
   
INSERT INTO bookings (session_id, volunteer_id)
    VALUES (57, 7);
   
   
SELECT * FROM bookings;

SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day,
       session_type, b.id AS booking_id, b.volunteer_id  AS volunteer_id,
       v.first_name AS volunteer_first_name, v.last_name as volunteer_last_name
      FROM sessions s LEFT JOIN bookings b ON (s.id = b.session_id)
      FULL OUTER JOIN volunteers v ON (b.volunteer_id = v.id)
      ORDER BY formatted_date, session_type desc;
    
    
