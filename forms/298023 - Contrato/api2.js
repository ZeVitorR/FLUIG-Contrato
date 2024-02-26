function meu_callback2(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('enderecoContratada').value=(conteudo.logradouro);
        document.getElementById('bairroContratada').value=(conteudo.bairro);
        document.getElementById('cidadeContratada').value=(conteudo.localidade);
        switch (conteudo.uf) {
            case "SP":
                document.getElementById('estadoContratada').value= "de São Paulo"
                break;
            case "AC":
                document.getElementById('estadoContratada').value= "do Acre"
                break;
            case "AL":
                document.getElementById('estadoContratada').value= "de Alagoas"
                break;
            case "AP":
                document.getElementById('estadoContratada').value= "do Amapá"
                break;
            case "AM":
                document.getElementById('estadoContratada').value= "da Amazonas"
                break;
            case "BA":
                document.getElementById('estadoContratada').value= "da Bahia"
                break;
            case "CE":
                document.getElementById('estadoContratada').value= "do Ceará"
                break;
            case "DF":
                document.getElementById('estadoContratada').value= "do Distrito Federal"
                break;
            case "ES":
                document.getElementById('estadoContratada').value= "do Espírito Santo"
                break;
            case "GO":
                document.getElementById('estadoContratada').value= "de Goiás"
                break;
            case "MA":
                document.getElementById('estadoContratada').value= "de Maranhão"
                break;
            case "MT":
                document.getElementById('estadoContratada').value= "do Mato Grosso"
                break;
            case "MS":
                document.getElementById('estadoContratada').value= "do Mato Grosso do Sul"
                break;
            case "MG":
                document.getElementById('estadoContratada').value= "de Minas Gerais"
                break;
            case "PA":
                document.getElementById('estadoContratada').value= "do Pará"
                break;
            case "PB":
                document.getElementById('estadoContratada').value= "da Paraíba"
                break;
            case "PR":
                document.getElementById('estadoContratada').value= "do Paraná"
                break;
            case "PE":
                document.getElementById('estadoContratada').value= "de Pernambuco"
                break;
            case "PI":
                document.getElementById('estadoContratada').value= "do Piauí"
                break;
            case "RJ":
                document.getElementById('estadoContratada').value= "do Rio de Janeiro"
                break;
            case "RN":
                document.getElementById('estadoContratada').value= "do Rio Grande do Norte"
                break;
            case "RS":
                document.getElementById('estadoContratada').value= "do Rio Grande do Sul"
                break;
            case "RO":
                document.getElementById('estadoContratada').value= "de Rondônia"
                break;
            case "RR":
                document.getElementById('estadoContratada').value= "de Roraima"
                break;
            case "SC":
                document.getElementById('estadoContratada').value= "de Santa Catarina"
                break;
            case "SE":
                document.getElementById('estadoContratada').value= "de Sergipe"
                break;
            case "TO":
                document.getElementById('estadoContratada').value= "de Tocantins"
                break;
            default:
                break;
        }

    } //end if.
}
    
function pesquisacep2(valor) {
    define();
    valor =  valor.value
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback2';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
    } //end if.
};