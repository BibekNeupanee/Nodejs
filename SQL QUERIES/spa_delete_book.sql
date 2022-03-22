DROP PROCEDURE IF EXISTS spa_delete_books
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
CREATE PROCEDURE spa_delete_books

	@id int
	
AS
BEGIN
	SET NOCOUNT ON;

	DELETE FROM BookAuthors WHERE bookId= @id;
	DELETE FROM Books where id= @id;

	IF  NOT EXISTS(
		SELECT 1 FROM Books WHERE id = @id
	)
	BEGIN
		SELECT 'Success' [status],
			'Delete Successful' [message]
		RETURN;
	END
END
GO
