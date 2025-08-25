// Berechnet die Mehrwertsteuer für einen Betrag (z. B. 19%).
const {
  add,
  substract,
  divide,
  multiply,
} = require("../testing-example/math.js");
function mwst(betrag, satz = 0.19) {
  const steuer = betrag * satz;
  // auf 2 Nachkommastellen runden (Geldbeträge)
  return Math.round(steuer * 100) / 100;
}

// Gibt den Bruttobetrag (Netto + Steuer) zurück.
function brutto(betragNetto, satz = 0.19) {
  const steuer = mwst(betragNetto, satz);
  return Math.round((Number(betragNetto) + steuer) * 100) / 100;
}

module.exports = { mwst, brutto };
