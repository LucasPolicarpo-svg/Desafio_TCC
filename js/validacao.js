function validacao(){

    let nome = document.getElementById("inputName");
    let cpf = document.getElementById("inputCpf");
    let email = document.getElementById("inputEmail4");
    let telefone = document.getElementById("inputTel");
    let cep = document.getElementById("inputCep");
    let email = document.getElementById("inputEmail4");
    let email = document.getElementById("inputEmail4");
    
    

    input_style(nome, "#f45656", "#008000");
    input_style(cpf, "#f45656", "#008000");
    input_style(email, "#f45656", "#008000");
    input_style(telefone, "#f45656", "#008000");
    input_style(cep, "#f45656", "#008000");
    
    
}

function input_style(input, cor_1, cor_2){


    if(!input.checkValidity()){
       return input.style.border = `3px solid ${cor_1}`
    }else{
       return input.style.border = `2px solid ${cor_2}`
    }

    
}