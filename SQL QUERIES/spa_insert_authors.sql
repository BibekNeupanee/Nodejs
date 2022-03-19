DROP PROCEDURE IF EXISTS spa_insert_authors
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
CREATE PROCEDURE spa_insert_authors


	@name	varchar(255)

	
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO Authors (
		name
	) 
      VALUES (
		 @name
	 )
END
GO
