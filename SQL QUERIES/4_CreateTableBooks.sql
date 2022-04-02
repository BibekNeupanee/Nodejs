USE [bookStore]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Books]') AND type in (N'U'))
DROP TABLE [dbo].[Books]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Books](
	[id] [int] NOT NULL PRIMARY KEY IDENTITY,
	[name] [varchar](255) NOT NULL,
	[year] [int] NOT NULL,
	[pages] [int] NOT NULL,
	[isbn] [varchar](15) NOT NULL,
	[edition] [tinyint] NOT NULL,
	[publisherId] [int] NOT NULL,
	[bookTypeId] [int] NOT NULL,
	[image] [varbinary] (MAX) ,
	FOREIGN KEY (publisherId) REFERENCES [dbo].[Publishers](id) ON DELETE CASCADE,
	FOREIGN KEY (bookTypeId) REFERENCES [dbo].[BookTypes](id) ON DELETE CASCADE

)