function carregaResultados(){
    try{
        const json = JSON.parse(readJSON('../recursos/json/vagas.json'));

        json.vagas.map((vaga, i) => {

            let tags = ''; 
            
            vaga.palavras_chave.forEach((tag) => {
                tags += `<span class='palavras-chaves-tags'>${tag}</span>`;
            });

            let html = (`<div class="vaga">
                <nav class="navbar vaga-head">
                    <div class="container-fluid">
                    <div class="navbar-brand">
                        <h3>${vaga.titulo_vaga}</h3>
                        <div class="vaga-loc">${vaga.empresa} - ${vaga.localizacao}</div>
                    </div>
                    <img src=../recursos/img/${vaga.site}_logo.png alt="" class="d-inline-block align-text-top site-logo"/>
                    </div>
                </nav>

                <div class="vaga-body">
                    <div class="accordion accordion-flush" id="descricao${i}">
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="descricao-header${i}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#descricao-corpo${i}" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Descrição
                            </button>
                        </h2>
                        <div id="descricao-corpo${i}" class="accordion-collapse collapse" aria-labelledby="descricao-header${i}" data-bs-parent="#descricao${i}">
                            <div class="accordion-body">
                                ${vaga.descricao_vaga}<br/>
                                <div class="d-grid gap-2">
                                    <a href=${vaga.link_vaga} target="blank" class="btn btn-outline-success" type="button">Acessar Vaga</a>
                                </div>
                                <div>
                                    ${tags}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div><br/>`);

            document.getElementById('resultado-vaga').insertAdjacentHTML('beforeend', html);
        })
    }
    catch{}
}

function validaResultados(){
    if(document.getElementsByClassName('vaga').length <= 0){
        document.getElementById('mensagem-sem-resultado').classList.remove('hidden');
    }
}