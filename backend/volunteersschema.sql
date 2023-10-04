DROP TABLE IF EXISTS volunteers CASCADE;

CREATE TABLE volunteers(
    id serial PRIMARY KEY,
    first_name varchar(60) NOT NULL,
    last_name varchar(60) NOT NULL,
    phone_number varchar(20) NOT NULL,
    email varchar(60) NOT NULL
);

INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Afsha', 'Purple','07111222333', 'afsha.volunteer@gooddeeds.org');

INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Junita', 'White', '07222111333', 'junita.volunteer@gooddeeds.org');

INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Saliha', 'Green', '07111333222', 'saliha.volunteer@gooddeeds.org');

INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Saqib', 'Red', '07111222999', 'saqib.volunteer@gooddeeds.org');

INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Paulina', 'Blue', '07999222333', 'paulina.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Elena', 'Gold', '07999999333', 'elena.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Shadi', 'Silver', '07999555333', 'shadi.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Anu', 'Pink', '07999111333', 'anu.volunteer@gooddeeds.org');

INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Bekir', 'Orange', '07111999333', 'bekir.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Onur', 'Black', '07999333999', 'onur.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Daniel', 'Turquoise',  '07999000999', 'daniel.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(first_name, last_name, phone_number, email)
    VALUES ('Lorentz', 'Yellow', '07999999000', 'lorentz.volunteer@gooddeeds.org');
   
SELECT
    *
FROM
    volunteers;