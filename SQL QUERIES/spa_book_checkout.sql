DROP PROCEDURE IF EXISTS spa_book_checkout
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_book_checkout

	@userId int
	, @bookIds	VARCHAR(MAX) 
AS
BEGIN
	SET NOCOUNT ON;
	BEGIN TRY 
		UPDATE c set c.sold = 'y'
		--SELECT * 
		FROM string_split(@bookIds , ',') s
		INNER JOIN Cart c
		ON c.bookId = s.value
		WHERE userId = @userId;
		
		SELECT 'Success' [status],
			'Bought Successful' [message]
	END TRY
	BEGIN CATCH
		SELECT 'Error' [status],
			'Cannot buy books'
	END CATCH

END
GO
