USE [bookStore]
/****** Object:  Table [dbo].[token]    Script Date: 24/03/2022 13:46:15 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[token]') AND type in (N'U'))
DROP TABLE [dbo].[token]
GO

/****** Object:  Table [dbo].[token]    Script Date: 24/03/2022 13:46:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Token](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[refreshToken] [varchar](255) NOT NULL,
	FOREIGN KEY (userId) REFERENCES [dbo].[Users](id),
)