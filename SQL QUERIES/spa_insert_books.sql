USE [bookStore]
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



ALTER PROCEDURE [dbo].[spa_insert_books] 
	@id				INT = NULL 
	, @name			varchar(255) = NULL 
	, @year			INT = NULL 
	, @pages		INT = NULL 
	, @isbn			VARCHAR(15) = NULL 
	, @edition      INT = NULL 
	, @publisherId  INT = NULL 
	, @bookTypeId   INT = NULL 
	, @price	    INT = NULL 
	, @author_ids   VARCHAR(100) = NULL 
	, @description	VARCHAR(MAX) = NULL
	, @image		VARCHAR(Max) = NULL
	, @pdf			VARCHAR(Max) = NULL
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRAN
	BEGIN TRY
		IF (@id IS NOT NULL)
		BEGIN
			UPDATE b
			SET b.name = ISNULL(@name, b.name) 
				, b.year = ISNULL(@year, b.year)
				, b.pages = ISNULL(@pages, b.pages)
				, b.isbn = ISNULL(@isbn, b.isbn)
				, b.edition = ISNULL(@edition, b.edition)
				, b.publisherId = ISNULL(@publisherId, b.publisherId)
				, b.bookTypeId = ISNULL(@bookTypeId, b.bookTypeId)
				, b.price = ISNULL(@price, b.price)
				, b.description  = ISNULL(@description,b.description)
				, b.image  = ISNULL(@image,b.image)
				, b.pdf  = ISNULL(@pdf,b.pdf)
			FROM Books b
			WHERE id = @id

			COMMIT TRAN

			SELECT 'Success' [status],
				'Update Successful' [message]
		END
		ELSE
		BEGIN
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
				, [description]
				, [image]
				, [pdf]
			) VALUES (
				@name
				, @year
				, @pages
				, @isbn
				, @edition
				, @publisherId
				, @bookTypeId
				, @price
				, @description
				, @image
				, @pdf
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
		END
	END TRY
	BEGIN CATCH
		ROLLBACK;
		SELECT 'Error' [status],
			'Cannot Insert.' [message]
	END CATCH	
END
