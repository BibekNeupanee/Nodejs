USE [bookStore]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Authors]') AND type in (N'U'))
DROP TABLE [dbo].[Authors]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Authors](
	[id] [int] NOT NULL PRIMARY KEY IDENTITY,
	[name] [varchar](255) NOT NULL,
	[image] [varchar](MAX) NOT NULL,
 )


