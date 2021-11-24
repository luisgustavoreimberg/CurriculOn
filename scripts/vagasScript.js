function carregaConfiguracoes(){
    const json = JSON.parse(readJSON("./recursos/json/estados.json"));

    var select = document.getElementById("input-estado");
    json.estados.forEach(function(estado, i){
        var opt = document.createElement('option');
        opt.value = i+1;
        opt.innerHTML = estado.toUpperCase();
        select.appendChild(opt);
    });
}

function adicionaPalavraChave(){
    const palavraChave = document.getElementById('input-palavra-chave').value;
    document.getElementById('input-palavra-chave').value = "";

    var elementoExistente = false;
    Array.prototype.forEach.call(document.getElementsByClassName('palavra-chave'),
        function(elem)
        { 
            if(elem.innerHTML===palavraChave){
                elementoExistente = true;
            }
        });
    
    if(!elementoExistente)
    {
        const elemento = document.createElement('span');
        elemento.classList.add('palavra-chave');
        elemento.classList.add('badge');
        elemento.classList.add('rounded-pill');
        elemento.innerHTML = palavraChave;
        elemento.onclick = function(){
            if(this.classList.contains('del')){
                this.remove();
            }else{
                Array.prototype.forEach.call(document.getElementsByClassName('del'),
                    function(elem){ elem.classList.remove('del'); })

                this.classList.add('del');
                setTimeout(function(elem){
                    if(elem.classList.contains('del')){
                        elem.classList.remove('del');
                    }                            
                }, 3000, this);
            }
        }
        document.getElementById('palavras-chave').appendChild(elemento);
    }
}