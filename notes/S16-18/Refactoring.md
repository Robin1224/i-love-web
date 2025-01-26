# Refactoring
> Clean code - Robert C. Martin

Code is clean als het gemakkelijk te begrijpen is door iedereen in het team . Clean code kan worden gelezen en verbeterd door andere collaborateurs.

## Try and leave this world a little better than you found it.
Probeer je code netter en schoner in te checken dan toen je die uitgecheckt hebt. Dit hoeft niet groot te zijn, maar verander bijvoorbeeld een variabel naam naar iets beters, splits een te grote functie op, elimineer een klein stukje duplicatie, etc.

### Gebruik betekenisvolle namen
Duidelijke en beschrijvende namen voor variabelen, functies, en bestanden.

Vermijd cryptische afkortingen of generieke termen als **a**, **b**, **data**, **temp**, etc.

### Schrijf kleine functies
Functies moeten klein zijn en slechts één verantwoordelijkheid hebben. Lange functies zijn moeilijk te begrijpen en onderhouden.

Stel je functie op met zo min mogelijk parameters. Het liefst monadisch (1) maar als het nodig is diadisch (2), vermeld triadisch of meer.

Voorkom side effects, dingen die buiten de scope van de functie vallen. Een functie heeft één ingang - _parameters_ - en één uitgang - _return_. Side effects zijn bijv console logs, aanpassen van html, etc.

### Gebruik goed commentaar
Less is more. Goede code heeft weinig commentaar nodig omdat het zichzelf uitlegt. Gebruik commentaar alleen als de code zonder context niet duidelijk is.

Uitgecommentaarde stukken code horen niet in productiecode; haal het weg!

### Maak code leesbaar (voor mensen)
Code wordt vaker gelezen dan geschreven. Maak het daarom intuïtief en helder, alsof je schrijft voor collega's. Denk aan conventies zoals inspringen, hoofdletters, etc.

> Refactoring not only improves code, but helps build confidence in coding generally, as well as familiarity with what you're working on

> Refactoring - Martin Fowler
> "Refactoring Javascript" (ook een boek)

# Patronen
### Pattern: Hernoem functie declaratie
De handtekening van een functie omvat de naam, de parameters en soms de return type.

Dit patroon wordt gebruikt om de functie een duidelijke naam te geven, parameters toe te voegen of te verwijderen of de volgorde van parameters te wijzigen.

Het doel is om de functie beter aan te laten sluiten bij de behoeften van de codebase zonder gedrag te veranderen.

### Pattern: Splits conditionals op
Complexe en onoverzichtelijke if-else-statements worden opgesplitst in kleine, duidelijkere methodes of functies. Complexe if-else-statements worden vervangen door een goed benoemde functie die beschrijft wat de voorwaarde controleert.

### Pattern: Vervang loops door pipelines
Traditionele iteraties over collecties (zoals for-, foreach-, of while-loops) worden vervangen door een functionele stijl met behulp van een pipeline van operaties.

Dit patroon maakt gebruik van methoden map, filter, en reduce, die declaratief beschrijven wat er met de data moet gebeuren in plaats van hoe het gebeurt. 

Hierdoor wordt de intentie van de code duidelijker en eenvoudiger.

### Pattern: Verwijder dode code
Overbodige of niet-gebruikte code wordt opgespoord en verwijderd uit de codebase. Dode code doet NIETS. Als er iets gebeurt, dan is het geen dode code.

### Pattern: Verschuif statements
Het herpositioneren van code binnen een methode om de leesbaarheid en logische volgorde te verbeteren.

Het doel is gerelateerde statements dichter bij elkaar te plaatsen en irrelevante of afleidende stukken code te verplaatsen naar een meer geschikte locatie.

# Sveltekit Best Practices
/src/lib - components en helpers
/src/routes - layout en pagina's
/static - statische assets

Tip: Voorkom het inladen van component, die component inladen, die componenten inladen, etc.
Top: Als een bestand te groot wordt zet je `<script>` en `<style>` elementen in een apart bestand en importeer die.

## Performance