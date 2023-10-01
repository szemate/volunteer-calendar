DROP TABLE IF EXISTS volunteers CASCADE;

CREATE TABLE volunteers(
    id serial PRIMARY KEY,
    name varchar(60) NOT NULL,
    phone_number varchar(20) NOT NULL,
    email varchar(60) NOT NULL
);

INSERT INTO volunteers(name, phone_number, email)
    VALUES ('Afsha', '07111222333', 'afsha.volunteer@gooddeeds.org');

INSERT INTO volunteers(name, phone_number, email)
    VALUES ('Junita', '07222111333', 'junita.volunteer@gooddeeds.org');

INSERT INTO volunteers(name, phone_number, email)
    VALUES ('Saliha', '07111333222', 'saliha.volunteer@gooddeeds.org');

INSERT INTO volunteers(name, phone_number, email)
    VALUES ('Saqib', '07111222999', 'saqib.volunteer@gooddeeds.org');

INSERT INTO volunteers(name, phone_number, email)
    VALUES ('Daniel', '07999222333', 'daniel.volunteer@gooddeeds.org');
   
INSERT INTO volunteers(name, phone_number, email)
    VALUES ('Lorentz', '07999999333', 'lorentz.volunteer@gooddeeds.org');

SELECT
    *
FROM
    volunteers;
