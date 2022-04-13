DROP PROCEDURE IF EXISTS spa_get_cart_userId
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_get_cart_userId
	
	@userId int
AS
BEGIN
	SET NOCOUNT ON;

	SELECT b.* 
	FROM Books b
	INNER JOIN Cart c
	ON b.id = c.bookId
	WHERE c.userId = @userId
	AND c.sold = 'n';

END
GO
