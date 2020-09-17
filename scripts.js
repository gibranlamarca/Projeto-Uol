var user={name: 0};
var pegaInput = 0;
var tamanhoArray = 0;
var destino = "Todos";
var tipo = "message";

function pegaUser(){
    user.name = prompt("Digite o seu nick:");
    enviaUser();
}
pegaUser();
function enviaUser(){
    var enviar = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/uol/participants',user);
}
function mantemOnline(){
    var enviar = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/uol/status',user);
}
setInterval(mantemOnline,4500);


//parte do menu
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


//parte dos chats
function buscarDados(){
    var requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/uol/messages');
    requisicao.then(criaChat);
}
//setInterval(buscarDados,5000);

function criaChat(chats){
    var dados = chats.data;
    console.log(dados);
    for(var i=0;i<dados.length;i++){
    if(dados[i].type=='status'){
        var caixaStatus = document.createElement("div");
        document.querySelector("section").appendChild(caixaStatus);
        caixaStatus.classList.add('entra-sai');

        var mensagem = document.createElement("p");
        caixaStatus.appendChild(mensagem);
        mensagem.innerHTML="<span style='color:#AAAAAA'>"+"("+dados[i].time+") "+"</span>"+"<strong>"+dados[i].from+"</strong>"+" "+dados[i].text;
        }
        else{
            if(dados[i].type=='private_message' && dados[i].to==user){

                var caixaStatus = document.createElement("div");
                document.querySelector("section").appendChild(caixaStatus);
                caixaStatus.classList.add('reservada');

                var hora = document.createElement("time");
                caixaStatus.appendChild(hora);
                hora.classList.add('hora');
                hora.innerText="("+dados[i].time+")";

                var nome = document.createElement("h1");
                caixaStatus.appendChild(nome);
                nome.classList.add('nome');
                nome.innerText=dados[i].from;

                var texto = document.createElement("p");
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

                var mensagem = document.createElement("p");
                caixaStatus.appendChild(mensagem);
                mensagem.innerHTML="<span style='color:#AAAAAA'>"+"("+dados[i].time+") "+"</span>"+"<strong>"+dados[i].from+"</strong>"+" "+"para "+"<strong>"+dados[i].to+"</strong>"+":"+" "+dados[i].text;
                }
            }
        }
    }
    caixaStatus.scrollIntoView();
}
function renderizaChat(){
                pegaInput = document.querySelector("input").value;

                var caixaStatus = document.createElement("div");
                document.querySelector("section").appendChild(caixaStatus);
                caixaStatus.classList.add('mensagem');

                var mensagem = document.createElement("p");
                caixaStatus.appendChild(mensagem);
                mensagem.innerHTML="<strong>"+user.name+"</strong>"+" "+"para "+"<strong>"+destino+"</strong>"+":"+" "+pegaInput; //quando clicar em um usuário para mandar a mensagem para ele, vai alterar o valor da variável destino para o nick do usuário destinado

                caixaStatus.scrollIntoView();
                enviaChat();
}
function enviaChat(){
    var dados = {from: user.name, to: destino, text: pegaInput, type: tipo};
    
    var requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/uol/messages', dados);

}