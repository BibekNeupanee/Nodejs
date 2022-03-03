USE [bookStore]
GO

/****** Object:  Table [dbo].[Publishers]    Script Date: 02/03/2022 22:37:07 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Publishers]') AND type in (N'U'))
DROP TABLE [dbo].[Publishers]
GO

/****** Object:  Table [dbo].[Publishers]    Script Date: 02/03/2022 22:37:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Publishers](
	[id] [int] NOT NULL  PRIMARY KEY IDENTITY,
	[name] [varchar](255) NOT NULL,
 
)


