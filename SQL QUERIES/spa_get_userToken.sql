DROP PROCEDURE IF EXISTS spa_get_userToken
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE spa_get_userToken

	@token varchar(255)

	
AS
BEGIN
	SET NOCOUNT ON;

		SELECT u.*
		FROM Users u
		INNER JOIN Token t
		ON u.id = t.userId
		WHERE t.refreshToken = @token;

END
GO
