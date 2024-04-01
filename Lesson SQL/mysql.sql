-- ! SQLZoo - SELECT Basics
-- 1) SELECT column_name FROM table_name
-- WHERE column_name = 'string_item'
-- 2) SELECT column_name1, column_name2 FROM table_name
-- WHERE column_name1 IN(column_name1, column_name2)
-- 3) SELECT column_name1, column_name2 FROM table_name WHERE column_name2 BETWEEN X AND Y
-- 4)  SELECT column_name1, column_name2
--       FROM table_name
--       WHERE column_name1 LIKE "inquiry_string%" atau "%inquiry_string"
-- 5) SELECT column_name1, length(column_name1)
-- FROM table_name
-- WHERE length(table_name) > x_number
-- 6) SELECT ROUND(column_name, round_number atau -round_number)
-- 7) SELECT column_name1, column_name2
-- FROM table_name
-- WHERE LENGTH(column_name1) = LENGTH(column_name2)
-- 8) SELECT column_name1, column_name2
-- FROM table_name
-- WHERE LEFT(column_name1, start_of_string_left) = LEFT(column_name2,start_of_string_left) AND column_name1 <> atau != column_name2
-- 9) SELECT column_name, FROM table_name WHERE column_name NOT LIKE '%%'
-- 10) SELECT column_name
-- FROM table_name
-- WHERE column_name NOT IN ('item_name1', 'item_name2')
-- 11) SELECT column_name1, column_name2
-- FROM table_name
-- WHERE column_name1, column_name2
-- ORDER BY column_name1 DESC, column_name2
-- 12) SELECT COUNT(column_name)
-- FROM table_name
-- WHERE condition;
-- 13) SELECT DISTINCT column1, column2, ...
-- FROM table_name;
-- 14) SELECT column1, column2, ...
-- FROM table_name;
-- WHERE condition (operator) ( SELECT column1, column2, ...
-- FROM table_name;
-- WHERE condition )
--
-- ! TIL
--
-- SHOW DATABASE
-- CREATE DATABASE ...
-- DROP DATABASE ...
-- USE NAMA-FOLDER
-- SELECT DATABASE
-- SELECT DATABASE()
-- CREATE TABLE NAMA-TAJUK(
--   NAME VARCHAR(255) NOT NULL
--   AGE INT DEFAULT 1
-- )
-- SHOW TABLES
-- SHOW COLUMNS FROM NAMA-TABLE
-- DESC NAMA-TABLE
--
-- ! TIL
--
-- VARCHAR()
-- INT
-- DECIMAL
-- CHAR()
-- DATE
-- TIME
-- ? INSERT INTO NAMA_TABLE (...,..., N)
-- ? VALUES (...,...) (...,...) (x,y,N)
-- SELECT PROPERTY1, PROPERTY2, PROPERTY3, ...N FROM TABLE