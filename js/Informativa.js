function cargarInformativa() {
 const contenedor = document.getElementById("app");


  contenedor.innerHTML = `
    <div class="info-container">
      <div class="info-card">
        <img src="https://fakestoreapi.com/icons/logo.png" alt="Fake Store Logo" class="info-logo">
        <h1 class="info-title">FAKE STORE API</h1>
        <h3 class="info-subtitle">por Kevin Gabriel González Bernal</h3>
        <p class="info-desc">API gratuita con datos de productos reales, ideal para pruebas de e-commerce.</p>

        <div class="info-link-box">
          <p>Datos obtenidos desde:</p>
          <a href="https://fakestoreapi.com/" target="_blank" class="info-link">
            fakestoreapi.com
          </a>
        </div>

        <p class="info-version">Versión 1.0.0</p>
      </div>
    </div>
  `;
}
