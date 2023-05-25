<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head></head>
			<body>
				<h1><xsl:value-of select="receta/texto/nombre"/></h1>
				<h3><xsl:value-of select="receta/texto/tipo"/></h3>
				<br/>
				<h2>Ingredientes</h2>
				<xsl:for-each select="receta/texto/ingrediente">
					<p><xsl:value-of select="."/></p>
				</xsl:for-each>
				<br/>
				<h2>Procedimiento</h2>
				<xsl:for-each select="receta/texto/paso">
					<p><xsl:value-of select="."/></p>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>