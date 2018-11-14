CREATE TABLE staff (
    employee_id SERIAL primary key,
    first_name VARCHAR(63) not null,
    last_name VARCHAR(63) not null,
    salary INTEGER,
    contract_length SMALLINT
);

INSERT INTO staff (first_name, last_name, salary, contract_length) VALUES ('Steven', 'King', 10000, 3);
INSERT INTO staff (first_name, last_name, salary, contract_length) VALUES ('Neena', 'Kochar', 8000, 2);
INSERT INTO staff (first_name, last_name, salary, contract_length) VALUES ('David', 'Austin', 12000, 2);
INSERT INTO staff (first_name, last_name, salary, contract_length) VALUES ('Nancy', 'Greenberg', 3000, 1);

SELECT first_name, last_name FROM staff WHERE salary > 5000 AND salary < 12000;
SELECT * FROM staff WHERE contract_length < 2;

INSERT INTO staff (first_name, last_name, salary, contract_length) VALUES ('Ronney', 'Alex', 20000, 5);
INSERT INTO staff (first_name, last_name, salary, contract_length) VALUES ('Sanchez', 'Tom', 14000, 3);

UPDATE staff SET contract_length = 3 WHERE contract_length = 1;
UPDATE staff SET salary = 8000 WHERE salary = 3000;

SELECT * FROM staff ORDER BY salary DESC;