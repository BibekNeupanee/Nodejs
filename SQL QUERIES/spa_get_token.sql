USE [bookStore]
GO
/****** Object:  StoredProcedure [dbo].[spa_get_token]    Script Date: 27/03/2022 21:12:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



ALTER PROCEDURE [dbo].[spa_get_token]

	@email varchar(255) = NULL ,
	@token varchar(255) = NULL 

	
AS
BEGIN
	SET NOCOUNT ON;

	IF (@token IS NOT NULL ) 
	BEGIN
		SELECT refreshToken FROM TOKEN WHERE refreshToken = @token
		RETURN;
	END
		

	SELECT t.refreshToken FROM Token t 
	INNER JOIN Users u
	ON u.id = t.userId
	WHERE u.email = @email;

END
