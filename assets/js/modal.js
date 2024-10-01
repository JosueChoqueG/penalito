   // Obtener elementos
   const closePopupButton = document.getElementById('closePopup');
   const popup = document.getElementById('popup');
   const overlay = document.getElementById('overlay');

   // Función para abrir la ventana emergente
   function openPopup() {
       popup.style.display = 'block';
       overlay.style.display = 'block';
   }

   // Función para cerrar la ventana emergente
   closePopupButton.onclick = function() {
       popup.style.display = 'none';
       overlay.style.display = 'none';
   };

   // Cerrar popup al hacer clic en la superposición
   overlay.onclick = function() {
       popup.style.display = 'none';
       overlay.style.display = 'none';
   };

   // Abrir el popup al cargar la página
   window.onload = openPopup;