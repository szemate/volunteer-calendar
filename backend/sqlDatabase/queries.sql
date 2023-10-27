SELECT * FROM volunteers;

SELECT * FROM sessions;

   
SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day,
       session_type
    FROM sessions
    ORDER BY date;

SELECT * FROM bookings;

SELECT TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date,
       TO_CHAR(date, 'Day') AS day, s.id as session_id ,
       session_type, b.id AS booking_id, b.volunteer_id  AS volunteer_id,
       v.first_name AS volunteer_first_name, v.last_name as volunteer_last_name
      FROM sessions s LEFT JOIN bookings b ON (s.id = b.session_id)
      FULL OUTER JOIN volunteers v ON (b.volunteer_id = v.id)
      ORDER BY formatted_date, session_type desc;