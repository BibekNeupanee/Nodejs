DROP PROCEDURE IF EXISTS spa_delete_bookType
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
CREATE PROCEDURE spa_delete_bookType

	@id int
	
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRY  
		DELETE FROM BookTypes WHERE id= @id; 
	END TRY  
	BEGIN CATCH  
		SELECT 'Error' [status],
			'Cannot delete while book type in use.' [message]
		RETURN;
	END CATCH; 

	--DELETE FROM BookTypes WHERE id= @id;
	--
	--IF  NOT EXISTS(
	--	SELECT 1 FROM BookTypes WHERE id = @id
	--)
	--BEGIN
	--	SELECT 'Success' [status],
	--		'Delete Successful' [message]
	--	RETURN;
	--END
	--
END
GO
