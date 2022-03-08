CREATE TABLE BookAuthors(
	id INT NOT NULL PRIMARY KEY IDENTITY,
	bookId INT NOT NULL,
	authorId INT NOT NULL,
	FOREIGN KEY (bookId) REFERENCES [dbo].[Books](id),
	FOREIGN KEY (authorId) REFERENCES [dbo].[Authors](id),
)