select * from SalesLT.Product;

select Name, StandardCost, ListPrice from SalesLT.Product;

select Name, ListPrice - StandardCost
from SalesLT.Product;

select Name AS ProductName, ListPrice - StandardCost AS Markup
from SalesLT.Product;

select ProductNumber,
	Color,
    Size,
    concat(Color, ', ', Size) as Color_Size,
    ListPrice - StandardCost as ProductDetails
    From SalesLT.Product;

select concat(ProductID, ':', Name) as ProductName
From SalesLT.Product;

select concat(cast(ProductID as char(5)), ':', Name) as ProductName
From SalesLT.Product;

select SellStartDate,
	date_format(SellStartDate, '%Y-%m-%d%H:%i:%s') as ConvertedDate,
    date_format(SellStartDate, '%Y-%m-%dT%H:%i:%s') as ISO8601FormatDate
from SalesLT.Product;

select Name, Size from salesLT.PRoduct;

select Name, ifnull(cast(size as signed), 0) as NumericSize
from SalesLT.Product;

select Name, nullif(Color, 'Multi') as SingleColor
from SalesLT.Product;

/* Task 1: TRack the status of a product's availability based on dates 
recorded when it was first offered for sale or removed from sale. */

select Name, coalesce(SellEndDate, SellStartDate) as StatusLastUpdated
from SalesLT.Product;

select Name,
	case 
    when SellEndDate is null then 'Currently for sale'
    else 'No longer available'
    end as SalesStatus
from SalesLT.Product;

select Name,
	case Size
		when 'S' then 'Small'
		when 'M' then 'Medium'
		when 'L' then 'Large'
		when 'XL' then 'Extra-Large'
		else ifnull(size,'n/a')
	end as ProductSize
from SalesLT.Product;

-- Challenge 1:
select * from salesLT.Customer;

select Title, FirstName, MiddleName, LastName, Suffix 
from salesLT.Customer;

select SalesPerson, 
	concat(Title, ' ', LastName) as CustomerName,
    Phone
from salesLT.Customer
order by SalesPerson ASC;

-- Challenge 2
select concat(CustomerID, ': ', CompanyName) as CustomerCompanies
from salesLT.Customer;

select * from SalesLT.SalesOrderHeader;

select concat(SalesOrderNumber,  ' (', RevisionNumber , ')')
	as SalesOrderNumberFormatted,
    date_format(OrderDate, '%Y.%m.%d') as OrderDateFormatted
from SalesLT.SalesOrderHeader;

-- Challenge 3
select 
	FirstName,
    MiddleName,
    LastName,
	concat(
		FirstName,
        coalesce(concat(' ', MiddleName, ' '), ' '),
        LastName
	) as CustomerFullName
from salesLT.Customer;

select * from salesLT.Customer;
select
	CustomerID,
    coalesce(EmailAddress, Phone) as PrimaryContact
from salesLT.Customer;	