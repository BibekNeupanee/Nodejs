USE [bookStore]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



ALTER PROCEDURE [dbo].[spa_insert_books] 
	@name			varchar(255)
	, @year			INT
	, @pages		INT
	, @isbn			VARCHAR(15)
	, @edition      INT
	, @publisherId  INT
	, @bookTypeId   INT
	, @price	    INT
	, @author_ids   VARCHAR(100)
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN
	BEGIN TRY
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
		COMMIT TRAN
		SELECT 'Success' [status],
			'Insertion Successful' [message]
	END TRY
	BEGIN CATCH
		ROLLBACK;
		SELECT 'Error' [status],
			'Cannot Insert.' [message]
	END CATCH	
END
