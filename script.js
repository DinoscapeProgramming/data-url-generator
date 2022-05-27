document.getElementById('button').addEventListener('click', function () {
    var fileReader = new FileReader();
    fileReader.addEventListener('load', function () {
        document.getElementById('text').value = fileReader.result;
    });
    fileReader.readAsDataURL(document.getElementById('input').files[0]);
}, false);
