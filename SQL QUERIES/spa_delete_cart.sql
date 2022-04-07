DROP PROCEDURE IF EXISTS spa_delete_cart
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spa_delete_cart

	@id int
	
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY  
		DELETE FROM Cart WHERE bookId= @id; 
		SELECT 'Success' [status],
			'Delete Successful' [message]
		RETURN;
	END TRY  
	BEGIN CATCH  
		SELECT 'Error' [status],
			'Cannot delete.' [message]
		RETURN;
	END CATCH;
END
GO
