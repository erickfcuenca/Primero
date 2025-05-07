<script>
      let categoriaSeleccionada = '';
  
      function abrirModal(categoria) {
        categoriaSeleccionada = categoria;
        document.getElementById('modalTitulo').innerText = `Reclamo: ${categoria}`;
        new bootstrap.Modal(document.getElementById('modalReclamo')).show();
      }
  
      function enviarWhatsApp() {
        const docente = document.getElementById('docente').value.trim();
        const materia = document.getElementById('materia').value.trim();
        const alumno = document.getElementById('alumno').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();

        if (!docente || !materia || !alumno || !telefono || !descripcion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const mensaje = `📢 *Reclamo de UTEPSA*\n\n👨‍🏫 Docente: ${docente}\n📘 Materia: ${materia}\n🧑 Alumno: ${alumno}\n📂 Categoría: ${categoriaSeleccionada}\n📝 Descripción: ${descripcion}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, '_blank');
        }
    </script>