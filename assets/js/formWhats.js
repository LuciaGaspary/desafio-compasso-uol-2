function gotowhatsapp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var selectSala = document.getElementById("selectSala").value;

    var url =
        "https://wa.me/5553981230503?text=" +
        "nome: " +
        name +
        "%0a" +
        "telefone: " +
        phone +
        "%0a" +
        "Email: " +
        email +
        "%0a" +
        "sala: " +
        selectSala;

    window.open(url, "_blank").focus();
}