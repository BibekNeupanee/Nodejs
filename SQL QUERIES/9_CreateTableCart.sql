USE [bookStore]
GO

ALTER TABLE [dbo].[Cart] DROP CONSTRAINT [FK__Cart__bookId__1B9317B3]
GO


IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Cart]') AND type in (N'U'))
DROP TABLE [dbo].[Cart]
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Cart](
	[id] [int] IDENTITY(1,1) NOT NULL
	, [userId]	[int] NOT NULL
	, [bookId] [int] NOT NULL
	, [addedDate] [date] NOT NULL
	, FOREIGN KEY (userId) REFERENCES [dbo].[Users] ([id])
	, FOREIGN KEY (bookId) REFERENCES [dbo].[Books] ([id])
)
