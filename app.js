requirejs.config({
    "paths" : {
            "app": '../app',
            "bootstrap" : "//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min",
            "vue": "//cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue",
            "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
    , baseUrl: 'lib'
});

requirejs(['app/main']);