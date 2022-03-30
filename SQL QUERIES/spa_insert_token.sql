DROP PROCEDURE IF EXISTS spa_insert_token
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE spa_insert_token

	@token varchar(255),
	@email	varchar(255)

	
AS
BEGIN
SELECT 1 FROM Token t INNER JOIN Users u ON u.id = t.userId WHERE u.email = 'nbibek@gmail.com'
	SET NOCOUNT ON;

	IF EXISTS (SELECT 1 FROM Token t INNER JOIN Users u ON u.id = t.userId WHERE u.email = @email)
	BEGIN
		UPDATE t
		SET t.refreshToken = @token
		FROM Token t 
		INNER JOIN Users u
		ON t.userId = u.id
		WHERE u.email = @email
		RETURN;
	END


	INSERT INTO TOKEN (userId, refreshToken) 
	SELECT id, @token
	FROM Users
	WHERE email = @email  

END
GO
