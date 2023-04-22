if (window.FileReader && window.File) {
  console.log("Programa soportado");
  document.getElementById('file').addEventListener('change', cargarVideo, false);

  function cargarVideo(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      alert('Ejecutando video');
      var src = document.createAttribute('src');
      src.value = e.target.result;

      if (!file.type.match('video.*')) {
        alert("Archivo no válido (extensiones admitidas .webm, .mp4 o .ogv)");
      };
      video.setAttributeNode(src);
    };
    reader.readAsDataURL(file);
  };

  function volumen(vol) {
    video = document.getElementById("video");

    if (vol === "up") {
      if (video.volume < 1) {
        video.volume += 0.1;
        console.log(video.volume);
      };
    } 
    else if (vol === "down") {
      if (video.volume > 0) {
        video.volume -= 0.1;
        console.log(video.volume);
      };
    };
  };
} 
else {
  alert("Aplicación no soportada");
};