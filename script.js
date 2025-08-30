 document.getElementById('historiaForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const historia = {
        nombre: document.getElementById('nombre').value,
        edad: document.getElementById('edad').value,
        sexo: document.getElementById('sexo').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        motivo: document.getElementById('motivo').value,
        antecedentesPersonales: document.getElementById('antecedentesPersonales').value,
        antecedentesFamiliares: document.getElementById('antecedentesFamiliares').value,
        habitos: document.getElementById('habitos').value,
        signosVitales: document.getElementById('signosVitales').value,
        examenFisico: document.getElementById('examenFisico').value,
        estudios: document.getElementById('estudios').value,
        diagnostico: document.getElementById('diagnostico').value,
        plan: document.getElementById('plan').value
      };

      localStorage.setItem('historiaClinica', JSON.stringify(historia));
      alert('Historia clínica guardada en tu navegador.');
      this.reset();
    });
