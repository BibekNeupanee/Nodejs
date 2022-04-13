DROP PROCEDURE IF EXISTS spa_get_bestSelling_books
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spa_get_bestSelling_books 
	
AS
BEGIN
	SET NOCOUNT ON;
	IF OBJECT_ID('tempdb..#Books') IS NOT NULL DROP TABLE #Books
		SELECT b.* , c.id AS c_id
		INTO #Books
		FROM Cart c
		INNER JOIN Books b
			ON c.bookId = b.id
		WHERE c.sold = 'y' 
		ORDER BY c.id DESC
		SELECT DISTINCT id, name,year, pages, isbn, edition, publisherId, bookTypeId,price, description, image, pdf  FROM #Books;
END
GO
