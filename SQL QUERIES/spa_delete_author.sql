DROP PROCEDURE IF EXISTS spa_delete_author
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
CREATE PROCEDURE spa_delete_author

	@id int
	
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY  
		DELETE FROM Authors WHERE id= @id; 
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
