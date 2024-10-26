**Inlämningsuppgift 2 – HTML/CSS-kurs: Escape Rooms**

Denna uppgift är den första delen i projektet och utgör en del av examinationen för kursen “Webbutveckling – HTML & CSS”.

**Uppdragsbeskrivning**

Målet med uppgiften är att implementera en responsiv layout och design för startsidan, i enlighet med specifikationerna från en UX-designer/formgivare.

Projektet baseras på en brief från ett fiktivt företag som ni kan läsa här.

Designmaterialet finns tillgängligt via Figma: [Figma-länk.](https://www.figma.com/file/0CWDexKE9i3I3yZFiFeDCE)

**Min Implementation: Escape Rooms**

I mitt projekt valde jag att använda semantiska HTML-element för att skapa en tydligare struktur på sidan och förbättra tillgängligheten för alla användare. Jag fokuserade på att hålla HTML-strukturen enkel och tydlig för att underlätta framtida utveckling.

För att organisera och underhålla min CSS använde jag BEM-metoden (Block Element Modifier). Detta hjälpte mig att strukturera klasserna logiskt och effektivt.

Istället för att använda pixlar valde jag rem som den huvudsakliga måttenheten. Detta gör designen mer flexibel och responsiv på olika skärmstorlekar.

För att förbättra användarupplevelsen ytterligare implementerade jag media queries. Jag fokuserade på tre specifika breakpoints:

**Mobilvy:** max-width 599px
**Surfplattor:** min-width 600px
**Desktop:** min-width 800px

Dessa breakpoints säkerställer att webbplatsen anpassar sig smidigt till olika enheter.

När jag var nöjd med den inledande delen av projektet började jag utforska Sass och upptäckte snabbt flera fördelar. Genom Live Sass Compiler i VS Code var det enkelt att komma igång och implementera funktioner som variabler och nesting.

**Sass-förbättringar**

**Variabler:** Jag bytte ut mina färgkoder mot Sass-variabler, vilket förenklade framtida underhåll av koden.

**Nesting:** Jag implementerade nesting för att skapa en mer strukturerad och överskådlig CSS. Dessutom använde jag nesting även för media queries, vilket gav mig ännu bättre kontroll över projektets responsiva design.

**Den här inlämningen har hjälpt mig att både förstå grundläggande CSS och upptäcka fördelarna med att använda mer avancerade verktyg som Sass.**
