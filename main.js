let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #a82876;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a82876;">Estudiante que le apasiona el desarrollo web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
