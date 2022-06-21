DROP PROCEDURE IF EXISTS spa_update_author
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE spa_update_author
	@id int
	, @name varchar(255) = NULL
	, @image varchar(MAX) =NULL
AS
BEGIN

	SET NOCOUNT ON;

	UPDATE a
		SET a.name = ISNULL(@name, a.name) 
		 , a.image  = ISNULL(@image,a.image)
		FROM Authors a
		WHERE id = @id
END
GO
