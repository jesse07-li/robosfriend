// Exemple d'enregistrement d'un service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => {
      console.log('Service Worker enregistré avec succès.');
    })
    .catch(error => {
      console.error('Erreur lors de l’enregistrement du Service Worker:', error);
    });
}