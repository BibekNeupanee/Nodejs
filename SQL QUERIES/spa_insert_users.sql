DROP PROCEDURE IF EXISTS spa_insert_users
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
CREATE PROCEDURE spa_insert_users


	@userName	varchar(255) ,
	@email		varchar(255) ,
	@password	varchar(255) ,
	@name		varchar(255),
	@dob		date

	
AS
BEGIN
	SET NOCOUNT ON;

	IF EXISTS (
		SELECT 1 FROM Users WHERE email = @email
	)
	BEGIN
		--PRINT 'Duplicate Email'
		
		SELECT 'Error Email' [status],
			'Duplicate Email' [message]
		RETURN;
	END

	BEGIN TRY
		INSERT INTO Users (
			username,
			email,
			password,
			name,
			dob
		) 
		  VALUES (
			 @userName,
			 @email,
			 @password,
			 @name,
			 @dob
		 )
		SELECT 'Success' [status],
			'Register Successful' [message]
		RETURN;
	END TRY
	BEGIN CATCH  
		SELECT 'Error' [status],
			'Cannot Register.' [message]
	END CATCH
END
GO
