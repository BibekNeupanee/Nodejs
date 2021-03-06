DROP PROCEDURE IF EXISTS spa_delete_publisher
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
CREATE PROCEDURE spa_delete_publisher

	@id int
	
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY  
		DELETE FROM Publishers WHERE id= @id; 
		SELECT 'Success' [status],
			'Delete Successful' [message]
	END TRY  
	BEGIN CATCH  
		SELECT 'Error' [status],
			'Cannot delete while author in use.'
	END CATCH; 
END
GO
