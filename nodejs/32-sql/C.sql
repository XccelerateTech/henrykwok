BEGIN;

SELECT * FROM citrus LEFT OUTER JOIN stock ON citrus.id = stock.id;
UPDATE stock SET quantity = quantity + 20 WHERE id = 1;
UPDATE stock SET quantity = quantity + 40 WHERE id = 2;
UPDATE stock SET quantity = quantity + 40 WHERE id = 3;
UPDATE stock SET quantity = quantity + 40 WHERE id = 4;

COMMIT;

BEGIN;

SELECT * FROM citrus LEFT OUTER JOIN stock ON citrus.id = stock.id;
SELECT quantity FROM stock RIGHT OUTER JOIN citrus ON stock.id = citrus.id;
UPDATE stock SET quantity = quantity - 30 FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = "lemon";
UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = "orange";
UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = "lime";
UPDATE stock SET quantity = quantity - 20 FROM citrus WHERE stock.citrus_id = citrus.id AND citrus.name = "grapefruit";

COMMIT;