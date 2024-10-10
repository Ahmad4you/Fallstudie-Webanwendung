
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('spendenFormular');
    const modal = document.getElementById('plzModal');
    const continueBtn = document.getElementById('continueBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    // Geschäftsstelle in PLZ-Bereich 89000 in der Nähe Stuttgart
    const geschaeftsstellenPlz = "89000";

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Verhindert das standardmäßige Absenden des Formulars

          let vorname = document.getElementById('vorname')?.value;
          let nachname = document.getElementById('nachname')?.value;
          let strasseUndNummer = document.getElementById('strasseUndNummer')?.value;
          let plz = document.getElementById('plz')?.value;
          let stadt = document.getElementById('stadt')?.value;

        if (vorname && nachname && strasseUndNummer && plz && stadt) {
          sessionStorage.setItem('adress', `\n${vorname} ${nachname}\n${strasseUndNummer}\n${plz} ${stadt}`);
        }
        
        let abgabeArt = document.getElementById('uebergabeArt').value;
        let kleiderArt = document.getElementById('kleiderArt').value;
        let spendenziel = document.getElementById('krisengebiet').value;
        let registrierungsDatum = new Date().toLocaleString('de-DE');

        // Überprüfung, ob die Werte nicht leer sind, bevor Sie sie speichern
        if (abgabeArt) sessionStorage.setItem('abgabeArt', abgabeArt);
        if (kleiderArt) sessionStorage.setItem('kleiderArt', kleiderArt);
        if (spendenziel) sessionStorage.setItem('spendenziel', spendenziel);
        sessionStorage.setItem('registrierungsDatum', registrierungsDatum);

        console.log('Gespeicherte Daten:');
        console.log('abgabeArt:', sessionStorage.getItem('abgabeArt'));
        console.log('kleiderArt:', sessionStorage.getItem('kleiderArt'));
        console.log('spendenziel:', sessionStorage.getItem('spendenziel'));
        console.log('registrierungsDatum:', sessionStorage.getItem('registrierungsDatum'));

        
        const plzInNaehe = (plzEingabe) => { // Funktion zur Prüfung der Nähe
          let plzString = plzEingabe.toString();
          return plzString.substring(0, 2) === geschaeftsstellenPlz.substring(0, 2);
      };
      const weiterleitung = () => { // Funktion zur Weiterleitung zur Bestätigungsseite
      form.submit();
      window.location.href = 'bestaetigung.html';
      };
       if (abgabeArt === 'abholung') { // Wenn Abholung ausgewählt wurde, überprüfe die PLZ
        if (plzInNaehe(plz)) {
            modal.style.display = 'block'; // Zeige das Modal an
            continueBtn.addEventListener('click', function() { // Event-Handler für den Fortsetzen-Button
                modal.style.display = 'none';
                weiterleitung(); // Formular abschicken, wenn der Benutzer fortsetzen möchte
            });
            cancelBtn.addEventListener('click', function() { // Event-Handler für den Abbrechen-Button
                modal.style.display = 'none';
            });
        } else {// Formular fortsetzen, wenn die PLZ nicht in der Nähe ist
            weiterleitung();
        }
    } else {// Formular fortsetzen, wenn "Übergabe an der Geschäftsstelle" ausgewählt wurde
        weiterleitung();
    }
});
});

// für überUns runter scrollen
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // 60px Offset
            behavior: 'smooth'
          });
        }
      });
    });
  });
  // Carousel automatische Scrollen
  document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        wrap: true // Zurück zum Anfang
    });
    carousel.cycle(); // Starten das automatische Scrollen
});

// Validierungen
function validateForm() {
  var vorname = document.getElementById('vorname').value.trim();
  var nachname = document.getElementById('nachname').value.trim();
  var strasseUndNummer = document.getElementById('strasseUndNummer').value.trim();
  var plz = document.getElementById('plz').value.trim();
  var stadt = document.getElementById('stadt').value.trim();
  var kleiderArt = document.getElementById('kleiderArt').value;
  var krisengebiet = document.getElementById('krisengebiet').value;

  var errors = [];

  if (vorname === '') {
      errors.push('Bitte geben Sie Ihren Vornamen ein.');
  }

  if (nachname === '') {
      errors.push('Bitte geben Sie Ihren Nachnamen ein.');
  }

  if (strasseUndNummer === '') {
      errors.push('Bitte geben Sie Ihre Straße und Hausnummer ein.');
  }

  if (plz === '' || plz.length !== 5 || isNaN(plz)) {
      errors.push('Bitte geben Sie eine gültige Postleitzahl ein.');
  }

  if (stadt === '') {
      errors.push('Bitte geben Sie Ihre Stadt ein.');
  }

  if (kleiderArt === '') {
      errors.push('Bitte wählen Sie die Art der Kleidung aus.');
  }

  if (krisengebiet === '') {
      errors.push('Bitte wählen Sie ein Krisengebiet aus.');
  }

  // Wenn Fehler vorhanden, verhindere das Absenden des Formulars
  if (errors.length > 0) {
      alert(errors.join('\n'));
      return false;
  }

  return true;
}