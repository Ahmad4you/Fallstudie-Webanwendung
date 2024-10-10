document.addEventListener('DOMContentLoaded', function() {
    // Daten aus dem localStorage abrufen
    let adress = sessionStorage.getItem('adress') || 'Nicht angegeben';
    let abgabeArt = sessionStorage.getItem('abgabeArt') || 'Nicht angegeben';
    let spendenziel = sessionStorage.getItem('spendenziel') || 'Nicht angegeben';
    let kleiderArt = sessionStorage.getItem('kleiderArt') || 'Nicht angegeben';
    let registrierungsDatum = sessionStorage.getItem('registrierungsDatum') || new Date().toLocaleString('de-DE');

    console.log('Gelesene Daten:');
    console.log('abgabeArt:', sessionStorage.getItem('abgabeArt'));
    console.log('kleiderArt:', sessionStorage.getItem('kleiderArt'));
    console.log('spendenziel:', sessionStorage.getItem('spendenziel'));
    console.log('registrierungsDatum:', sessionStorage.getItem('registrierungsDatum'));

    // Daten in die Seite einfügen
    document.getElementById('adress').textContent = adress;
    document.getElementById('abgabeArt').textContent = abgabeArt;
    document.getElementById('spendenziel').textContent = spendenziel;
    document.getElementById('kleiderArt').textContent = kleiderArt;
    document.getElementById('registrierungsDatum').textContent = registrierungsDatum;

    // Daten aus dem localStorage löschen
  /*  localStorage.removeItem('adress');
    localStorage.removeItem('abgabeArt');
    localStorage.removeItem('spendenziel');
    localStorage.removeItem('kleiderArt');
    localStorage.removeItem('registrierungsDatum'); */
});