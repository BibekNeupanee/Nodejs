DROP PROCEDURE IF EXISTS spa_update_token
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE spa_update_token

	@token varchar(255),
	@email	varchar(255)

	
AS
BEGIN
	SET NOCOUNT ON;

	UPDATE t
	SET t.refreshToken = @token
	FROM Token t 
	INNER JOIN Users u
	ON t.userId = u.id
	WHERE u.email = @email

END
GO
