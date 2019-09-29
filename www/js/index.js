var opcion = 0;
var contenido = 0;
var dominio = "http://tonivf.no-ip.org/json/";
var firstApartados = true;
var firstContenido = true;

var app = {
    // Application Constructor
    initialize: function() {
        navigator.splashscreen.show();
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);

        $.ajax({
            url: dominio + "menu",
//            async: false,
            beforeSend: function () { $.mobile.loading("show"); },
            complete: function () {
                $.mobile.loading("hide");
                // $("ul:jqmData(role='listview')").listview();
            },
            success: function(data) {
                $("#menu").html(data);
                $("#menu").page().page("destroy").page();
                lista = $("#lista-menu").listview();
                lista.listview('refresh');
                $("#botonCierre").click(function() { navigator.app.exitApp(); });
            }
        });
    },

    apartados: function(id) {
        $.ajax({
            url: dominio + "option/" + id,
//            async: false,
            beforeSend: function () { $.mobile.loading("show"); },
            complete: function () {
                $.mobile.loading("hide");
                // $("ul:jqmData(role='listview')").listview();
            },
            success: function(data) {
                $("#apartados").html(data);
                if (firstApartados) {
                    firstApartados = false;
                } else {
                    $("#apartados").page().page("destroy").page();
                }
                lista = $("#lista-apartados").listview();
                lista.listview().listview('refresh');
                $.mobile.navigate("#apartados", {transition: "slide"});
            }
        });
    },

    contenidos: function(id) {
        $.ajax({
            url: dominio + "content/" + id,
//            async: false,
            beforeSend: function () { $.mobile.loading("show"); },
            complete: function () {
                $.mobile.loading("hide");
                // $("ul:jqmData(role='listview')").listview();
            },
            success: function(data) {
                $("#contenidos").html(data);
                if (firstContenido) {
                    firstContenido = false;
                } else {
                    $("#contenidos").page().page("destroy").page();
                }
                $.mobile.navigate("#contenidos", {transition: "slide"});
            }
        });
    }
};
