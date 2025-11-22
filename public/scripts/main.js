// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Función para exportar el CV a PDF
function exportToPDF() {
  // Obtener el elemento que contiene el CV
  const element = document.querySelector('.resume-container');
  
  // Opciones de configuración para el PDF
  const opt = {
    margin: [10, 10, 10, 10],
    filename: 'CV_Harwin_Galvis.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true
    }
  };

  // Crear el PDF y descargarlo
  html2pdf().set(opt).from(element).save();
}

// Agregar evento al botón de descarga cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadPDF');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Mostrar mensaje de carga
      const originalText = downloadBtn.innerHTML;
      downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generando PDF...';
      downloadBtn.disabled = true;
      
      // Exportar a PDF
      exportToPDF();
      
      // Restaurar el botón después de un momento
      setTimeout(function() {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
      }, 2000);
    });
  }
});
