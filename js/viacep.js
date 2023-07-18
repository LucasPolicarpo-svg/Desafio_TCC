function limpa_form(){
    document.getElementById("inputEnd").value = ("");
    document.getElementById("inputBai").value = ("");
    document.getElementById("inputCid").value = ("");
    document.getElementById("inputEst").value = ("");
}

function atualiza_form(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("inputEnd").value = (conteudo.logradouro);
        document.getElementById("inputBai").value = (conteudo.bairro);
        document.getElementById("inputCid").value = (conteudo.localidade);
        document.getElementById("inputEst").value = (conteudo.uf);
    }else{
        limpa_form();
        alert("CEP não encontrado");
    }
}

function pesquisa_cep(valor){

    var cep = valor.replace(/\D/g, "");

    if(cep != ""){

        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){

            document.getElementById("inputEnd").value = "...";
            document.getElementById("inputBai").value = "...";
            document.getElementById("inputCid").value = "...";
            document.getElementById("inputEst").value = "...";
            
            var script = document.createElement("script");
            script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=atualiza_form";

            document.body.appendChild(script);

        }else{
            limpa_form();
            alert("Formato de CEP inválido!")
        }

    }else{
        limpa_form();
    }
}