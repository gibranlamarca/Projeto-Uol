var user=0;
function pegaUser(){
    user = prompt("Digite o seu nick:");
}
pegaUser();
function abrirMenu(){
    var menu = document.querySelector("nav");
    menu.style.right="0";

    var escurecer = document.querySelector(".escurecer");
    escurecer.style.display="block";
    escurecer.style.opacity="0.6";
}
function fecharMenu(){
    document.querySelector("nav").style.right="-70%";
    var escurecer = document.querySelector(".escurecer");
    escurecer.style.opacity="0";
    escurecer.style.display="none";
}

function buscarDados(){
    var requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/uol/messages');
    requisicao.then(criaChat);
}
buscarDados();

function criaChat(chats){
    var dados = chats.data;
    console.log(dados);
    for(var i=0;i<dados.length;i++){
    if(dados[i].type=='status'){
        var caixaStatus = document.createElement("div");
        document.querySelector("section").appendChild(caixaStatus);
        caixaStatus.classList.add('entra-sai');

        var hora = document.createElement("div");
        caixaStatus.appendChild(hora);
        hora.classList.add('hora');
        hora.innerText="("+dados[i].time+")";

        var nome = document.createElement("div");
        caixaStatus.appendChild(nome);
        nome.classList.add('nome');
        nome.innerText=dados[i].from;

        var texto = document.createElement("div");
        caixaStatus.appendChild(texto);
        texto.classList.add('texto');
        texto.innerText=dados[i].text;
        }
        else{
            if(dados[i].type=='private_message' && dados[i].to==user){//tenho que adicionar um && checkando se o user do destinatário for o mesmo do que está usando o chat
                var caixaStatus = document.createElement("div");
                document.querySelector("section").appendChild(caixaStatus);
                caixaStatus.classList.add('reservada');

                var hora = document.createElement("div");
                caixaStatus.appendChild(hora);
                hora.classList.add('hora');
                hora.innerText="("+dados[i].time+")";

                var nome = document.createElement("div");
                caixaStatus.appendChild(nome);
                nome.classList.add('nome');
                nome.innerText=dados[i].from;

                var texto = document.createElement("div");
                caixaStatus.appendChild(texto);
                texto.classList.add('texto');
                texto.innerText=dados[i].text;
            }
            else{
                if(dados[i].type=='private_message')
                {
                    
                }
                else{
                var caixaStatus = document.createElement("div");
                document.querySelector("section").appendChild(caixaStatus);
                caixaStatus.classList.add('mensagem');

                var hora = document.createElement("div");
                caixaStatus.appendChild(hora);
                hora.classList.add('hora');
                hora.innerText="("+dados[i].time+")";

                var nome = document.createElement("div");
                caixaStatus.appendChild(nome);
                nome.classList.add('nome');
                nome.innerText=dados[i].from;

                var texto = document.createElement("div");
                caixaStatus.appendChild(texto);
                texto.classList.add('texto');
                texto.innerText=dados[i].text;
                }
            }
        }
    }
}