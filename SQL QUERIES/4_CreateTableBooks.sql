USE [bookStore]
GO

/****** Object:  Table [dbo].[Books]    Script Date: 02/03/2022 22:24:21 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Books]') AND type in (N'U'))
DROP TABLE [dbo].[Books]
GO

/****** Object:  Table [dbo].[Books]    Script Date: 02/03/2022 22:24:21 ******/
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
	[authorId] [int] NOT NULL ,
	[publisherId] [int] NOT NULL,
	[bookTypeId] [int] NOT NULL,
	FOREIGN KEY (authorId) REFERENCES [dbo].[Authors](id) ON DELETE CASCADE,
	FOREIGN KEY (publisherId) REFERENCES [dbo].[Publishers](id) ON DELETE CASCADE,
	FOREIGN KEY (bookTypeId) REFERENCES [dbo].[BookTypes](id) ON DELETE CASCADE

)




