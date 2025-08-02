-- This script contains demo code for Module 2 of the SQL course


-- Section 1 Sort results using the ORDER BY clause

-- ORDER BY
SELECT Name, ListPrice
FROM SalesLT.Product;

-- Sort by column
SELECT Name, ListPrice FROM SalesLT.Product
ORDER BY Name;

SELECT Name, ListPrice
FROM SalesLT.Product
ORDER BY ListPrice DESC;

-- Sort and subsort
SELECT 
	ListPrice, 
	Name
FROM SalesLT.Product
ORDER BY ListPrice DESC, Name ASC;

-- Descending
SELECT 
	AddressLine1, 
    City, 
    PostalCode
FROM SalesLT.Address
ORDER BY City ASC, PostalCode DESC;



-- Sec


-- Top records


SELECT Name, ListPrice
FROM SalesLT.Product
LIMIT 10;


SELECT Name, ListPrice
FROM SalesLT.Product
ORDER BY ListPrice DESC
LIMIT 20;





-- Section 3 Retrieve pages of results with OFFSET and FETCH

-- First 10 rows
SELECT Name, ListPrice
FROM SalesLT.Product
ORDER BY Name
LIMIT 10 OFFSET 0;

-- Next page
SELECT Name, ListPrice
FROM SalesLT.Product
ORDER BY Name
LIMIT 10 OFFSET 10;


-- Section 4 Use ALL and DISTINCT

-- Implicit all
SELECT 
	Color
FROM SalesLT.Product;

-- Explicit all
SELECT 
	ALL Color
FROM SalesLT.Product;


-- Distinct
SELECT 
	DISTINCT Color
FROM SalesLT.Product;


-- Distinct combination
SELECT 
	DISTINCT Color, Size
FROM SalesLT.Product;

SELECT 
	DISTINCT Color, Size
FROM SalesLT.Product
WHERE Color IS NOT NULL AND Size IS NOT NULL;


-- Section 5: Filter results with the WHERE clause
-- WHERE CLAUSE


-- Simple filter
SELECT 
	Name, 
    Color, 
    Size,
    ProductModelID
FROM SalesLT.Product
WHERE ProductModelID <> 6
ORDER BY Name;

SELECT Name, Color, Size, ProductModelID
FROM SalesLT.Product
WHERE ProductModelID <> 6
ORDER BY Name;

SELECT Name, ListPrice, ProductModelID
FROM SalesLT.Product
WHERE ListPrice > 1000.00 AND ProductModelID = 6
     ORDER BY ListPrice;

-- LIKE comparison operator and modify with wildcard pattern match
SELECT Name, ListPrice
FROM SalesLT.Product
      WHERE Name LIKE 'HL Road Frame %';
      
      
      
SELECT Name, ListPrice, ProductNumber
FROM SalesLT.Product
WHERE ProductNumber LIKE 'FR-%';

SELECT Name, ListPrice, ProductNumber
FROM SalesLT.Product
WHERE ProductNumber REGEXP '^FR-[A-Z,a-z][0-9]{2}[A-Z,a-z]-[0-9]{2}$';


SELECT Name, ListPrice, ProductNumber
FROM SalesLT.Product
WHERE ProductNumber REGEXP '^FR-.*$';



-- null filter
SELECT Name, ListPrice
FROM SalesLT.Product
WHERE SellEndDate IS NOT NULL;

-- date range with BETWEEN
SELECT 
	UPPER(Name) AS ProductName, 
    DATE_FORMAT(SellEndDate, '%Y-%m-%d') AS SellDate,
    DATEDIFF(SellEndDate, SellStartDate)
FROM SalesLT.Product
WHERE SellEndDate BETWEEN '2003/6/1' AND '2003/12/31';

-- Multiple criteria (and)
SELECT ProductSubCategoryID, Name, ListPrice, SellEndDate
FROM SalesLT.Product
        WHERE ProductSubCategoryID IN (1,2) AND SellEndDate IS NULL;


-- Multiple criteria (or)
SELECT Name, ProductSubCategoryID, ProductNumber
FROM SalesLT.Product
      WHERE ProductNumber LIKE 'FR%' OR ProductSubCategoryID IN (2,4);
      
      
      
-- Challenges 2
--   
SELECT 
	DISTINCT City, StateProvinceID
FROM SalesLT.Address
ORDER BY City ASC;

-- Alternative Solution 1
SELECT ROUND(0.1 * COUNT(*)) FROM SalesLT.Product;

SELECT DISTINCT Weight, Name
FROM SalesLT.Product
ORDER BY Weight DESC
LIMIT 22;

-- Alternative Solution 2
set @percent = 10;
select floor(count(1) * @percent / 100.0) into @pct from SalesLT.Product;
set @sqlstmt = concat('SELECT DISTINCT Weight, Name FROM SalesLT.Product ORDER BY Weight DESC limit ',@pct);
prepare stmt from @sqlstmt;
execute stmt;

-- Alternative Solution 3 
With ranked_products AS (
	SELECT
		Name,
        CASE WeightUnitMeasureCode
			WHEN 'G' THEN Weight * 0.00220462
            ELSE Weight 
		END AS Weight,
        CASE WeightUnitMeasureCode
			WHEN 'G' THEN 'LB'
             ELSE WeightUnitMeasureCode 
		END AS WeightUnitMeasureCodeLB,
        percent_rank()  OVER (ORDER BY Weight) AS rank_1
	FROM SalesLT.product
)
SELECT 
	COUNT(*)
FROM ranked_products
WHERE rank_1 > 0.9 ;

-- -- Challenge 2
SELECT Name, Color, Size
	FROM SalesLT.Product WHERE ProductModelID = 1;
 
SELECT
	ProductNumber, 
    Name, 
    CONCAT(Color, ',', Size) AS Verify
FROM SalesLT.Product
WHERE Color IN ('Black','Red','White') AND Size IN ('S','M');

SELECT ProductNumber, Name, ListPrice
	FROM SalesLT.Product
WHERE ProductNumber LIKE 'BK-%';

SELECT ProductNumber, Name, ListPrice
FROM SalesLT.Product
WHERE ProductNumber REGEXP '^BK-[^R].*[0-9][0-9]$'
ORDER BY ProductNumber ASC;



SELECT ProductNumber, Name, ListPrice
FROM SalesLT.Product
WHERE ProductNumber REGEXP '^BK[-][^R].*[-][0-9][0-9]$';

