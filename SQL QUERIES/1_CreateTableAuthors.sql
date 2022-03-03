USE [bookStore]
GO

/****** Object:  Table [dbo].[Authors]    Script Date: 02/03/2022 22:32:09 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Authors]') AND type in (N'U'))
DROP TABLE [dbo].[Authors]
GO

/****** Object:  Table [dbo].[Authors]    Script Date: 02/03/2022 22:32:09 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Authors](
	[id] [int] NOT NULL PRIMARY KEY IDENTITY,
	[name] [varchar](255) NOT NULL,
 )


