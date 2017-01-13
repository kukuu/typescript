<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/data">
    <html>
        <body>
            <div id="container" style="100%">
                <div id="content_container" align="center">
                    <div id="content" align="center">
                    <h1>Firefly Learning - Heroes and Villains</h1>
                    <br/>
                    <table border="1">
                        <xsl:apply-templates select="points" />
                    </table>
                    </div>
                </div>
            </div>
        </body>
    </html>
</xsl:template>

<xsl:template match="points">
  <tr><td><xsl:value-of select="title"/></td></tr>
    <tr>
        <td>
             <img src="{url}" align="left"/>  <xsl:value-of select="point"/>
        </td>
    </tr>
</xsl:template>
</xsl:stylesheet>