<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body>
<xsl:for-each select="data/points">
  <div>
    <span><xsl:value-of select="name"/> - </span>
    <xsl:value-of select="url"/>
    </div>
  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>
     <xsl:value-of select="point"/> 
    </p>
  </div>
</xsl:for-each>
</body>
</html>