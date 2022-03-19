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
END
GO
