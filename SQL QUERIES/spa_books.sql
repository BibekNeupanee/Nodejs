DROP PROCEDURE IF EXISTS spa_insert_books
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Name
-- Create date: 
-- Description:	Just a sp to add books and its authors
-- =============================================
CREATE PROCEDURE spa_insert_books 
	@name			varchar(255)
	, @year			INT
	, @pages		INT
	, @isbn			varchar(15)
	, @edition      INT
	, @publisherId  INT
	, @bookTypeId   INT
	, @price	    INT
	, @author_ids   VARCHAR(100)
AS
BEGIN
	SET NOCOUNT ON;

	INSERT 
	INTO dbo.Books(
		[name]
		, [year]
		, [pages]
		, [isbn]
		, [edition]
		, [publisherId]
		, [bookTypeId]
		, [price]
	) VALUES (
		@name
		, @year
		, @pages
		, @isbn
		, @edition
		, @publisherId
		, @bookTypeId
		, @price
	)

	DECLARE @bookid INT;
	SELECT @bookid = SCOPE_IDENTITY();

	INSERT INTO dbo.BookAuthors (
		[bookId],
		[authorId]
	) SELECT 
		@bookid
		,[value]
	FROM string_split(@author_ids, ',')
		
END
GO
