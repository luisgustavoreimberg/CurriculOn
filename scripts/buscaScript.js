function carregaBusca(){
    const json = JSON.parse(readJSON('../recursos/json/config.json'));

    var lista = document.getElementById('passos-load');
    json.passos.forEach(function(passo, i){
        var icon = document.createElement('i');
        icon.classList.add('bi');
        icon.classList.add('bi-circle');

        var span = document.createElement('span');
        span.innerHTML = " "+passo;

        var item = document.createElement('li');
        item.classList.add('passo');
        item.appendChild(icon);
        item.appendChild(span);

        lista.appendChild(item);
        realizaBusca();
    });
}

function realizaBusca(){
    var passos = document.getElementsByClassName('passo');

    Array.prototype.map.call(passos,
    function(elem, i){
        setTimeout(function() {
            elem.classList.add('passo-sucesso');
            Array.prototype.forEach.call(elem.getElementsByClassName('bi'),
            function(icone){
                icone.classList.remove('bi-circle');
                icone.classList.add('bi-check-circle-fill');
            });
            if(document.getElementsByClassName('bi-check-circle-fill').length == passos.length){
                mostraResultados();
            }
        }, (i+2)*1000)
    })
}

function mostraResultados(){
    setTimeout(function() {
        Array.prototype.map.call(document.getElementsByClassName('loading'),
            function(elemento){
                elemento.classList.add('hidden');
            }
        )
        Array.prototype.map.call(document.getElementsByClassName('busca-concluida'),
            function(elemento){
                elemento.classList.remove('hidden');
            }
        )
    }, 1000)
    setTimeout(function() {
        window.location.href="./resultado.html";
    }, 2000)
}