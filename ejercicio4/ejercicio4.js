let student1Courses = ['Matemáticas', 'Inglés', 'Programación'];
let student2Courses = ['Geografía', 'Español', 'Programación'];

let cursosEnComun = student1Courses.filter(curso => student2Courses.includes(curso));
if (cursosEnComun.length > 0) {
  console.log('Los cursos en común son:');
  cursosEnComun.forEach(curso => {
    console.log(curso);
  });
} else {
  console.log('No hay cursos en común.');
}