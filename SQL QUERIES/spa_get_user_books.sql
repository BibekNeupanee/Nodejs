DROP PROCEDURE IF EXISTS spa_get_user_books
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_get_user_books

	@user int
	
AS
BEGIN
	SET NOCOUNT ON;
	
		SELECT b.*
		FROM Books b
		INNER JOIN Cart c
		ON c.bookId = b.id
		WHERE c.userId = @user AND c.sold = 'y'

END
GO
