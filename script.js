console.log("Hallo funktioniert :-)")


/* Bausteine aus letzter Woche:
    - Funktionen, um Code aus HTML heraus zu starten
    - HTML Elemente in JS holen 
    - Eingabefeld auslesen
    - Text von Elementen verändert
*/

/* Ablauf unseres Programms "Zeig das Wetter auf der Seite":
    - (Ort eingeben)
    - Button wird gedrückt -> Funktion suche() starten
    - Eingabefeld holen 
    - Eingabefeld auslesen
    - Schnittstelle gehen und nach Ort suchen
    - h2 holen -> Ort eintragen
    - img holen -> Bild einfügen
    - p holen -> Text einfügen
*/

async function suche(){
    // Eingabefeld auslesen
    let input = document.querySelector("input");
    let ortschaft = input.value;
    console.log(ortschaft);

    // Die folgenden 2 Zeilen sind etwas fortgeschrittener: Daten von Server holen (fetch) und umwandeln in lesbare Form (.json()), Ergebnis in wetter speichern
    let abfrage = await fetch("https://api.christophmuck.de/wetter?ort=" + ortschaft );
    let wetter = await abfrage.json();
    
    console.log(wetter);
    // Werte aus Wetter auslesen und speichern
    let temperatur = wetter.aktuell.tempMax  
    let bild = wetter.aktuell.img

    // Ort in Überschrift übertragen
    let h2 = document.querySelector("h2")
    h2.textContent = ortschaft

    // Bild in img Element übertragen
    let img = document.querySelector("img")
    img.src = bild

    // Temperatur in p-Element übertragen
    let p = document.querySelector("p")
    p.textContent = "Es ist aktuell " + temperatur + " Grad."




}



// Objekte können mehrere Informationen enthalten
let test = {
    ort: "Berlin",
    einwohner: 4000000
}
