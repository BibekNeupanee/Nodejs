USE [bookStore]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 19/03/2022 17:26:00 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Users]') AND type in (N'U'))
DROP TABLE [dbo].[Users]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 19/03/2022 17:26:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[id] [int] NOT NULL PRIMARY KEY IDENTITY,
	[username] [varchar](255) NOT NULL,
	[email] [varchar](255) NOT NULL,
	[password] [varchar](255) NOT NULL,
	[name] [varchar](255) NOT NULL,
	[dob] [date] NOT NULL,
	UNIQUE (email,id)
	)
GO


