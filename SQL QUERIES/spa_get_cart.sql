DROP PROCEDURE IF EXISTS spa_get_cart
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_get_cart 
	
AS
BEGIN
	SET NOCOUNT ON;

	SELECT b.* 
	FROM Books b
	INNER JOIN Cart c
	ON b.id = c.bookId;

END
GO
