
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('enderecoContratante').value=(conteudo.logradouro);
        document.getElementById('bairroContratante').value=(conteudo.bairro);
        document.getElementById('cidadeContratante').value=(conteudo.localidade);
        switch (conteudo.uf) {
            case "SP":
                document.getElementById('estadoContratante').value= "de São Paulo"
                break;
            case "AC":
                document.getElementById('estadoContratante').value= "do Acre"
                break;
            case "AL":
                document.getElementById('estadoContratante').value= "de Alagoas"
                break;
            case "AP":
                document.getElementById('estadoContratante').value= "do Amapá"
                break;
            case "AM":
                document.getElementById('estadoContratante').value= "da Amazonas"
                break;
            case "BA":
                document.getElementById('estadoContratante').value= "da Bahia"
                break;
            case "CE":
                document.getElementById('estadoContratante').value= "do Ceará"
                break;
            case "DF":
                document.getElementById('estadoContratante').value= "do Distrito Federal"
                break;
            case "ES":
                document.getElementById('estadoContratante').value= "do Espírito Santo"
                break;
            case "GO":
                document.getElementById('estadoContratante').value= "de Goiás"
                break;
            case "MA":
                document.getElementById('estadoContratante').value= "de Maranhão"
                break;
            case "MT":
                document.getElementById('estadoContratante').value= "do Mato Grosso"
                break;
            case "MS":
                document.getElementById('estadoContratante').value= "do Mato Grosso do Sul"
                break;
            case "MG":
                document.getElementById('estadoContratante').value= "de Minas Gerais"
                break;
            case "PA":
                document.getElementById('estadoContratante').value= "do Pará"
                break;
            case "PB":
                document.getElementById('estadoContratante').value= "da Paraíba"
                break;
            case "PR":
                document.getElementById('estadoContratante').value= "do Paraná"
                break;
            case "PE":
                document.getElementById('estadoContratante').value= "de Pernambuco"
                break;
            case "PI":
                document.getElementById('estadoContratante').value= "do Piauí"
                break;
            case "RJ":
                document.getElementById('estadoContratante').value= "do Rio de Janeiro"
                break;
            case "RN":
                document.getElementById('estadoContratante').value= "do Rio Grande do Norte"
                break;
            case "RS":
                document.getElementById('estadoContratante').value= "do Rio Grande do Sul"
                break;
            case "RO":
                document.getElementById('estadoContratante').value= "de Rondônia"
                break;
            case "RR":
                document.getElementById('estadoContratante').value= "de Roraima"
                break;
            case "SC":
                document.getElementById('estadoContratante').value= "de Santa Catarina"
                break;
            case "SE":
                document.getElementById('estadoContratante').value= "de Sergipe"
                break;
            case "TO":
                document.getElementById('estadoContratante').value= "de Tocantins"
                break;
            default:
                break;
        }

    } //end if.
    else {
        //CEP não Encontrado.
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {
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
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
    } //end if.
};