DROP PROCEDURE IF EXISTS spa_insert_publisher
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_insert_publisher


	@name	varchar(255)

	
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO Publishers(
		name
	) 
      VALUES (
		 @name
	 )
END
GO
