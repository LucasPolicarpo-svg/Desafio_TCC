function validacao(){

    let nome = document.getElementById("inputName");
    let cpf = document.getElementById("inputCpf");
    let email = document.getElementById("inputEmail4");
    let telefone = document.getElementById("inputTel");
    let cep = document.getElementById("inputCep");
    let estado = document.getElementById("inputEst");
    let cidade = document.getElementById("inputCid");
    let bairro = document.getElementById("inputBai");
    let endereco = document.getElementById("inputEnd");
    let numero = document.getElementById("inputNum");
    let complemento = document.getElementById("inputCom");
    let areat = document.getElementById("inputAr1");
    let areac = document.getElementById("inputAr2");
    let cond = document.getElementById("inputConV");
    let iptu = document.getElementById("inputIp");
    let quarto = document.getElementById("inputQua");
    let suite = document.getElementById("inputSui");
    let banheiro = document.getElementById("inputBan");
    let descricao = document.getElementById("exampleFormControlTextarea1");
    
    

    input_style(nome, "#f45656", "#008000");
    input_style(cpf, "#f45656", "#008000");
    input_style(email, "#f45656", "#008000");
    input_style(telefone, "#f45656", "#008000");
    input_style(cep, "#f45656", "#008000");
    input_style(estado, "#f45656", "#008000");
    input_style(cidade, "#f45656", "#008000");
    input_style(bairro, "#f45656", "#008000");
    input_style(endereco, "#f45656", "#008000");
    input_style(numero, "#f45656", "#008000");
    input_style(complemento, "#f45656", "#008000");
    input_style(areat, "#f45656", "#008000");
    input_style(areac, "#f45656", "#008000");
    input_style(cond, "#f45656", "#008000");
    input_style(iptu, "#f45656", "#008000");
    input_style(quarto, "#f45656", "#008000");
    input_style(suite, "#f45656", "#008000");
    input_style(banheiro, "#f45656", "#008000");
    input_style(descricao, "#f45656", "#008000");
    
    
}

function input_style(input, cor_1, cor_2){


    if(!input.checkValidity()){
       return input.style.border = `3px solid ${cor_1}`
    }else{
       return input.style.border = `2px solid ${cor_2}`
    }

    
}