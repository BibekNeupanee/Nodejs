DROP PROCEDURE IF EXISTS spa_update_author
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE spa_update_author
	@id int
	,@name varchar(255)
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE Authors SET name = @name WHERE id = @id
END
GO
