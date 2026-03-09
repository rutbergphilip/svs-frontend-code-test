# Programmeringsuppgift – Svenska Spel – Senior Frontend (Team Nummer)

## Kom igång

```bash
npm install
npm run dev
```

Projektet körs sedan på [http://localhost:3000](http://localhost:3000).

## Uppgiften

### I korthet
Tänk dig ett nummerspel med 50 nummer där man ska välja 10 nummer till en eller flera rader och sedan rätta alla rader och visa vilka nummer man valt som var rätt.

**Tidsuppskattning:** Uppgiften bör ta ungefär **3–4 timmar**. Fokusera på det du hinner göra bra snarare än att försöka hinna med allt.

***TIPS:*** Läs igenom hela uppgiften först för att få en överblick och se ifall det är något längre fram som kan påverka val av lösning. För inspiration kan du se våra nummerspel på svenskaspel.se.

### Mer information
Det finns en grundstruktur i projektet (se projektfilerna).  
Till att börja med: gör det som behövs på ett så funktionellt och robust sätt som möjligt – fokusera inte på utseende i första hand. Det viktigaste är primärt funktion, men viss visuell tydlighet behövs (t.ex. för att se vilka siffror som går att välja och vad som är valt).

Det är fritt fram att använda internet (dokumentation, forum och liknande). **AI får användas som stöd**. Vi vill att du dokumenterar **var och hur AI har använts** (se “AI-stöd” nedan).

Tänk dig att detta skulle vara en riktig produkt där mycket funktionalitet ska kunna läggas till i efterhand. Vi värderar därför struktur, läsbarhet, rimliga abstraktioner och tydliga gränssnitt.

---

## Tekniska krav (obligatoriskt)
- **Next.js**
- **TypeScript**
- **React**
- **State management** – state ska hanteras med state management-bibliotek. Valfritt vilket, men exempel på lämpliga alternativ är [Redux](https://redux.js.org/), [Zustand](https://zustand-demo.pmnd.rs/) eller [Jotai](https://jotai.org/).
- Valfritt styling-upplägg (CSS Modules, Tailwind, etc.)

### Rekommenderat (ej krav, men uppskattas)
- Enkel men tydlig komponentstruktur och kodstandard
- Enhetstester och/eller UI-tester (t.ex. Jest/Testing Library, Playwright)
- Tillgänglighetsfokus (t.ex. tangentbordsnavigering, semantik, aria-attributes där det behövs)

---

## Funktionella krav

### Att göra
#### 1) UI för nummerbrickan (1–50)
- Visa en “bricka” med nummer **1–50**.
- Det ska vara tydligt vilka nummer som är valbara, valda och avmarkerade.

#### 2) Välja nummer (två sätt)
Implementera följande två sätt att välja nummer:

1. **Manuellt**: klicka på ett nummer på brickan för att välja/avmarkera.
2. **Slumpa**: klicka på “Slumpa nummer” för att slumpa fram en hel rad (10 nummer).

**När ett nummer väljs (oavsett manuellt eller slumpat):**
- Markera numret i brickan
- Lägg till numret i raden – **numren i raden ska alltid vara sorterade**
- Klick på ett valt nummer igen ska avmarkera numret och ta bort det från raden

#### 3) Vidareutveckla slump-funktionaliteten
- Manuellt valda nummer påverkas inte av “Slumpa nummer”, t.ex.:
  - om 2 nummer har valts manuellt, så slumpas bara de övriga 8 numren
  - om 3 nummer har valts manuellt och övriga 7 redan har slumpats fram tas de 7 slumpade numren bort och 7 nya nummer slumpas fram
  - om 10 nummer har valts **manuellt** inaktiveras “Slumpa nummer”-knappen

#### 4) Hantera flera rader
- Användaren skall kunna lägga till fler rader (t.ex. via en "Lägg till rad"-knapp).
- Lagda rader presenteras i en lista **under spelbrickan**.
- Efter att en rad lagts till nollställs brickan så att användaren kan påbörja en ny rad.
- Klick på en redan lagd rad ska **aktivera den raden i spelbrickan** igen, så att användaren kan redigera den (ändra nummer, slumpa om osv.).
- Varje lagd rad ska ha en **"Ta bort"-knapp** bredvid sig som raderar raden.
- Det ska gå att lägga till så man har upp till (max) 5 rader.

#### 5) Rättning
- Knappen "Rätta mina rader" aktiveras först när det finns **minst en lagd rad med 10 nummer**.
- Vid klick på "Rätta mina rader":
  - Ta bort/dölj brickan
  - Hämta "rätt rad" från en `getCorrectRow`-funktion  
    - Mocka ett API-anrop (t.ex. en async-funktion med liten fördröjning) som returnerar 10 slumpmässiga nummer i intervallet 1–50
    - Rätt rad ska genereras en gång per rättning (dvs. resultatet kan variera mellan olika rättningar, men ska vara stabilt inom en och samma)
  - Rader som ej har 10 markeringar skall ej rättas.
  - **Alla lagda rader rättas mot samma rätta rad.** Markera de nummer i varje rad som även finns i rätt rad.
  - Visa ett tydligt resultat per rad (t.ex. antal rätt).
  - Det ska finnas möjlighet att **starta om** (t.ex. en "Spela igen"-knapp) så att användaren kan göra en ny omgång

---

## Icke-funktionella krav (vad vi tittar på)
Vi tittar särskilt på:
- **Kodkvalitet och struktur** (läsbarhet, namngivning, rimliga abstraktioner, komponentgränser)
- **TypeScript** (tydliga typer, bra domänmodeller)
- **Next.js-användning** (rimlig projektstruktur, tydlig separation mellan UI/logic, etc.)
- **Tillgänglighet** (grundläggande semantik, fokus/tangentbord där rimligt)
- **State management** (genomtänkt val och användning av state management-bibliotek)
- **Prestanda/robusthet** (undvik onödiga rerenders, stabil state-hantering, deterministiska funktioner)

---

## Leverans
- Lämna in som en länk till GitHub repo eller zip-fil.
- Inkludera instruktioner för hur vi kör projektet lokalt.
- Fyll i sektionen **"Mina anteckningar"** längst ner i denna fil.

### AI-stöd
AI-verktyg (t.ex. Copilot, ChatGPT, Claude) får användas men bör dokumenteras.

---

## Mina anteckningar

*Fyll i detta avsnitt innan du lämnar in. Vi vill gärna höra dina egna reflektioner.*

### Vad gick bra?
<!-- Beskriv vad du är nöjd med i din lösning. -->

### Vad gick mindre bra?
<!-- Var det något som inte blev som du tänkt dig? -->

### Vad var den största utmaningen?
<!-- Beskriv den svåraste delen av uppgiften och hur du löste den. -->

### Vad skulle du göra om du hade mer tid?
<!-- Finns det funktionalitet, tester, refaktorering eller polish du gärna hade lagt till? -->

### Skulle du gjort något annorlunda om du fick börja om?
<!-- Med facit i hand – hade du valt en annan struktur, ett annat mönster eller en annan approach? -->