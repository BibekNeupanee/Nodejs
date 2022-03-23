DROP PROCEDURE IF EXISTS spa_update_bookType
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
CREATE PROCEDURE spa_update_bookType
	@id int
	,@name varchar(255)
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE BookTypes SET name = @name WHERE id = @id
END
GO