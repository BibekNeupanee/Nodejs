DROP PROCEDURE IF EXISTS spa_get_author_books
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE spa_get_author_books
	
	@authorId	int 

AS
BEGIN
	SET NOCOUNT ON;
	
		SELECT b.* , a.name authorName
		FROM Books b
		INNER JOIN BookAuthors ba
		ON ba.bookId = b.id
		INNER JOIN Authors a
		ON ba.authorId = a.id
		WHERE ba.authorId = @authorId

END
GO
