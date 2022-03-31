DROP PROCEDURE IF EXISTS spa_insert_cart
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_insert_cart


	@bookId	int
		
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO Cart(
		bookId
		, addeDate
	) 
      VALUES (
		 @bookId
		 , CURDATE ()
	 )
END
GO
