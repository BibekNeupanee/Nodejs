DROP PROCEDURE IF EXISTS spa_get_books
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
CREATE PROCEDURE spa_get_books 
	
AS
BEGIN
	SET NOCOUNT ON;
	SELECT * FROM Books
END
GO
