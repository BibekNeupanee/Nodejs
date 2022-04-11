DROP PROCEDURE IF EXISTS spa_insert_cart
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_insert_cart

	@bookId	int
	, @userId int
 		
AS
BEGIN
	SET NOCOUNT ON;


	BEGIN TRY  
		IF NOT EXISTS (SELECT 1 FROM Cart WHERE bookId = @bookId AND userId = @userId)
		BEGIN
			INSERT INTO Cart(
				bookId
				, addedDate
				, sold
				, userId
			) 
			VALUES (
				@bookId
				, GETDATE()
				, 'n'
				, @userId
				) 
			SELECT 'Success' [status],
				'Insert Successful' [message]
		END
		ELSE
		BEGIN
			SELECT 'Error' [status],
				'Book already in cart.' [message]
		END
	END TRY  
	BEGIN CATCH  
		SELECT 'Error' [status],
			'Cannot insert' [message]
	END CATCH; 
END
GO
