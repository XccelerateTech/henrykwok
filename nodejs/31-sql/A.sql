CREATE TABLE stock (
    id SERIAL primary key,
    fruit_name VARCHAR(63) not null,
    description_text CHARACTER[(255)],
    quantity_on_stock INTEGER,
    price SMALLINT
);

DROP TABLE stock;

