DROP PROCEDURE IF EXISTS spa_delete_token
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_delete_token

	@token varchar(255)
	
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY  
		DELETE FROM Token WHERE id= @token; 
		SELECT 'Success' [status],
			'Delete Successful' [message]
		RETURN;
	END TRY  
	BEGIN CATCH  
		SELECT 'Error' [status],
			'Cannot delete while author in use.' [message]
		RETURN;
	END CATCH; 
END
GO
