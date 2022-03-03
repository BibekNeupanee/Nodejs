USE [bookStore]
GO

/****** Object:  Table [dbo].[BookTypes]    Script Date: 02/03/2022 22:36:03 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[BookTypes]') AND type in (N'U'))
DROP TABLE [dbo].[BookTypes]
GO

/****** Object:  Table [dbo].[BookTypes]    Script Date: 02/03/2022 22:36:03 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BookTypes](
	[id] [int] NOT NULL  PRIMARY KEY IDENTITY,
	[name] [varchar](255) NOT NULL
)


