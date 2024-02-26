var cont1;
var cont2;
var contA;
var array1 = [];
var array2 = [];
var dateContrato = FLUIGC.calendar('#dataContrato', {
    pickDate: true,
    pickTime: false,
    sideBySide: true
});


function atualizaData(data){
    var i = parseInt(data)
    if(i < 10){
    	i = '0'+i;
	}
	return i;
}
$(document).ready(function(){
    
    document.g
    var num1 = document.getElementById('cont1').value;
    var num2 = document.getElementById('cont2').value;
    var numA = document.getElementById('contA').value;
    document.getElementById('classificacaoContratada').value == null;
    cont1 = parseInt(num1);
    cont2 = parseInt(num2);
    contA = parseInt(numA);
    var atividadeAtual;
    atividadeAtual = getWKNumState();
    if(atividadeAtual == '0'){
        // $("#contrato").hide();
        cont1 = 0;
        cont2 = 0;
        contA = 0;
        const dataAtual = new Date();
		const dia = atualizaData(dataAtual.getDate());
		const mes = atualizaData(dataAtual.getMonth() + 1);
		const ano = dataAtual.getFullYear();
        document.getElementById('dataContrato').value = ano+'-'+mes+'-'+dia;
        define();
        
    }else if(atividadeAtual == '45'){
        $("#contrato").show();
        $("#inputs").hide();
        $("#inputs").show(2000);
    }else{
        $("#inputs").hide();
        cont1 = parseInt(num1);
        cont2 = parseInt(num2);
        contA = parseInt(numA);
        define();
    }
    
    
})
function imprimir(){
    const content = document.querySelector(".content");
    window.print(content);
}

function define() {
    document.getElementById('obraTxt').innerHTML = document.getElementById('obra').value; 
    document.getElementById('servicoTxt').innerHTML = document.getElementById('servico').value;
    assinatura();
    if (document.getElementById('nireContratante').value.length > 4){
        if(document.getElementById('classificacaoContratante').value.length > 1){
            document.getElementById('contratanteTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial').value+"</span>,"+document.getElementById('classificacaoContratante').value+", com sede na cidade de "+document.getElementById('cidadeContratante').value+", no Estado "+document.getElementById('estadoContratante').value+" na "+document.getElementById('enderecoContratante').value + ", " +document.getElementById('numeroContratantrante').value + document.getElementById('complementoContratante').value + ", " + document.getElementById('bairroContratante').value + ", CEP " + document.getElementById('cepContratante').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratante').value + " e NIRE n°."+document.getElementById('nireContratante').value+", "+document.getElementById('proprietarioContratante').value ;
        }else{
            document.getElementById('contratanteTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial').value+"</span>, com sede na cidade de "+document.getElementById('cidadeContratante').value+", no Estado "+document.getElementById('estadoContratante').value+" na "+document.getElementById('enderecoContratante').value + ", " +document.getElementById('numeroContratantrante').value + document.getElementById('complementoContratante').value + ", " + document.getElementById('bairroContratante').value + ", CEP " + document.getElementById('cepContratante').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratante').value + " e NIRE n°."+document.getElementById('nireContratante').value+", "+document.getElementById('proprietarioContratante').value ;
        }
         
    }else{
        if(document.getElementById('classificacaoContratante').value.length > 1){
            document.getElementById('contratanteTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial').value+"</span>,"+document.getElementById('classificacaoContratante').value+", com sede na cidade de "+document.getElementById('cidadeContratante').value+", no Estado "+document.getElementById('estadoContratante').value+" na "+document.getElementById('enderecoContratante').value + ", " +document.getElementById('numeroContratantrante').value + document.getElementById('complementoContratante').value + ", " + document.getElementById('bairroContratante').value + ", CEP " + document.getElementById('cepContratante').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratante').value +", "+document.getElementById('proprietarioContratante').value ; 
        }else{
            document.getElementById('contratanteTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial').value+"</span>, com sede na cidade de "+document.getElementById('cidadeContratante').value+", no Estado "+document.getElementById('estadoContratante').value+" na "+document.getElementById('enderecoContratante').value + ", " +document.getElementById('numeroContratantrante').value + document.getElementById('complementoContratante').value + ", " + document.getElementById('bairroContratante').value + ", CEP " + document.getElementById('cepContratante').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratante').value +", "+document.getElementById('proprietarioContratante').value ;
        }
    }

    if (document.getElementById('nireContratado').value.length > 4){
        if(document.getElementById('classificacaoContratada').value.length > 1){
            document.getElementById('contratadaTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial2').value+"</span>,"+document.getElementById('classificacaoContratada').value+", com sede na cidade de "+document.getElementById('cidadeContratada').value+", no Estado "+document.getElementById('estadoContratada').value+" na "+document.getElementById('enderecoContratada').value + ", " +document.getElementById('numeroContratantrada').value + document.getElementById('complementoContratada').value + ", " + document.getElementById('bairroContratada').value + ", CEP " + document.getElementById('cepContratada').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratada').value + " e NIRE n°."+document.getElementById('nireContratado').value+", "+document.getElementById('proprietarioContratada').value ; 
        }else{
            document.getElementById('contratadaTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial2').value+"</span>, com sede na cidade de "+document.getElementById('cidadeContratada').value+", no Estado "+document.getElementById('estadoContratada').value+" na "+document.getElementById('enderecoContratada').value + ", " +document.getElementById('numeroContratantrada').value + document.getElementById('complementoContratada').value + ", " + document.getElementById('bairroContratada').value + ", CEP " + document.getElementById('cepContratada').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratada').value + " e NIRE n°."+document.getElementById('nireContratado').value+", "+document.getElementById('proprietarioContratada').value ; 
        }
    }else{
        if(document.getElementById('classificacaoContratada').value.length > 1){
            document.getElementById('contratadaTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial2').value+"</span>,"+document.getElementById('classificacaoContratada').value+", com sede na cidade de "+document.getElementById('cidadeContratada').value+", no Estado "+document.getElementById('estadoContratada').value+" na "+document.getElementById('enderecoContratada').value + ", " +document.getElementById('numeroContratantrada').value + document.getElementById('complementoContratada').value + ", " + document.getElementById('bairroContratada').value + ", CEP " + document.getElementById('cepContratada').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratada').value + ", "+document.getElementById('proprietarioContratada').value ; 
        }else{
            document.getElementById('contratadaTxt').innerHTML = '<span class="razao">' + document.getElementById('razaoSocial2').value+"</span>, com sede na cidade de "+document.getElementById('cidadeContratada').value+", no Estado "+document.getElementById('estadoContratada').value+" na "+document.getElementById('enderecoContratada').value + ", " +document.getElementById('numeroContratantrada').value + document.getElementById('complementoContratada').value + ", " + document.getElementById('bairroContratada').value + ", CEP " + document.getElementById('cepContratada').value + ", inscrita no CNPJ/MF sob o n°. "+document.getElementById('cnpjContratada').value + ", "+document.getElementById('proprietarioContratada').value ;
        }
    }
    
    document.getElementById('anexosTxt').innerHTML = '';
    var contAn =0;
    for(let an = 1; an < contA+1; an++){
        item = document.getElementById('itemAnexo___'+an);
        contem = document.body.contains(item);
        console.log(contem);
        if(contem == true){
            contAn++;
            document.getElementById('itemAnexo___'+an).value = 'ANEXO '+contAn;
            document.getElementById('anexosTxt').innerHTML += '<p>'+ document.getElementById('itemAnexo___'+an).value+' - '+ document.getElementById('nomeAnexo___'+an).value +'<p>';
        }
    }
    document.getElementById('objetoTxt').innerHTML = document.getElementById('objeto').value; 
    document.getElementById('fiscalizacaoTxt').innerHTML = document.getElementById('fiscal').value; 
    document.getElementById('precoTxt').innerHTML = 'R$' + document.getElementById('preco').value; 
    document.getElementById('formaPagamentoTxt').innerHTML = document.getElementById('formaPagamento').value;
    
    var sfat = document.getElementById('faturamento').value.split(".");
    document.getElementById('faturamentoTxt').innerHTML = '';
    for (let fa = 0; fa < sfat.length-1; fa++) {
        const element = sfat[fa];
        console.log(element);
        document.getElementById('faturamentoTxt').innerHTML += '<p>'+sfat[fa].trim()+'.<p>';
    } 
    
    document.getElementById('notasTxt').innerHTML = document.getElementById('notas').value; 

    var srej = document.getElementById('reajustes').value.split(".");
    document.getElementById('reajusteTxt').innerHTML = '';
    for (let re = 0; re < srej.length-1; re++) {
        const element = srej[re];
        console.log(element);
        document.getElementById('reajusteTxt').innerHTML += '<p>'+srej[re].trim()+'.<p>';
    } 
    
     

    var scond = document.getElementById('condPagamento').value.split(".");
    document.getElementById('condicaoPagamentoTxt').innerHTML = '';
    for (let cd = 0; cd < scond.length-1; cd++) {
        const element = scond[cd];
        console.log(element);
        document.getElementById('condicaoPagamentoTxt').innerHTML += '<p>'+scond[cd].trim()+'.<p>';
    } 
    document.getElementById('prazoExecucaoTxt').innerHTML = document.getElementById('prazo').value; 
    document.getElementById('multaInfracaoTxt').innerHTML = document.getElementById('multa').value; 
    document.getElementById('obsTxt').innerHTML = document.getElementById('observacao').value;
    
    document.getElementById('empContratante').innerHTML =  document.getElementById('razaoSocial').value;
    document.getElementById('empContratada').innerHTML =  document.getElementById('razaoSocial2').value;

    document.getElementById('test1nome').innerHTML =  document.getElementById('nomeTest1').value;
    document.getElementById('test1cpf').innerHTML =  document.getElementById('cpfTest1').value;
    document.getElementById('test1email').innerHTML =  document.getElementById('emailTest1').value;

    document.getElementById('test2nome').innerHTML =  document.getElementById('nomeTest2').value;
    document.getElementById('test2cpf').innerHTML =  document.getElementById('cpfTest2').value;
    document.getElementById('test2email').innerHTML =  document.getElementById('emailTest2').value;
    
    var dataC = document.getElementById('dataContrato').value;
    var [ano, mes, dia] = dataC.split('-')
    
    switch (mes) {
        case '01':
            mestxt = 'janeiro'
            break;
        case '02':
            mestxt = 'fevereiro'
            break;
        case '03':
            mestxt = 'março'
            break;
        case '04':
            mestxt = 'abril'
            break;
        case '05':
            mestxt = 'maio'
            break;
        case '06':
            mestxt = 'junho'
            break;
        case '07':
            mestxt = 'julho'
            break;
        case '08':
            mestxt = 'agosto'
            break;
        case '09':
            mestxt = 'setembro'
            break;
        case '10':
            mestxt = 'outubro'
            break;
        case '11':
            mestxt = 'novembro'
            break;
        case '12':
            mestxt = 'dezembro'
            break;
        default:
            break;
    }
    document.getElementById('ifinal').value = "Santa Rita do Passa Quatro, "+dia+" de "+mestxt+" de "+ano+".";
    document.getElementById('final').innerHTML = document.getElementById('ifinal').value;
}

function adicionaItemA(){
    contA = parseInt(contA) + 1;
    document.getElementById('contA').value = contA;
    wdkAddChild('AnexoTable');
}

function adicionaItem1(){
    cont1 = parseInt(cont1) + 1;
    document.getElementById('cont1').value = cont1;
    wdkAddChild('assContratante')
    array1.push(cont1);
    
}

function adicionaItem2() {
    cont2 = parseInt(cont2) + 1;
    document.getElementById('cont2').value = cont2;
    wdkAddChild('assContratado')
    array2.push(cont2)
}

var contador = 1;
var contador2 = 1;

function assinatura(){
    var conta = 1;
    var conta2 = 1;
    console.log(cont1);
    for(let c = 1; c <= cont1; c++){
        item = document.getElementById('assContratanteNome___'+c);
        contem = document.body.contains(item);
        console.log(contem);
        if(contem == true){
            item2 = document.getElementById('grid1-assContratanteNome___'+c);
            contem2 = document.body.contains(item2);
            if(contem2 == false){
                var nova_div = '<div class="grid1-item" id="grid1-assContratanteNome___'+c+'">'
                                    +'<p id="iniContratante___'+c+'">'+contador+'.___________________________________</p>'
                                    +'<p id="passContratanteNome___'+c+'" style="margin-top: -2%">Nome:  '+document.getElementById('assContratanteNome___'+c).value+'<p>'
                                    +'<p id="passContratanteCPF___'+c+'" style="margin-top: -5%" >CPF:  '+document.getElementById('assContratanteCPF___'+c).value+'<p>'
                                    +'<p id="passContratanteEmail___'+c+'" style="margin-top: -5%" >Email:  '+document.getElementById('assContratanteEmail___'+c).value+'<p>'
                            +'</div>';
                document.getElementById('grid1').innerHTML += nova_div;
                contador++;
            }else{
                document.getElementById('iniContratante___'+c).innerHTML = conta+'.___________________________________'
                document.getElementById('passContratanteNome___'+c).innerHTML = 'Nome:  '+document.getElementById('assContratanteNome___'+c).value;
                document.getElementById('passContratanteCPF___'+c).innerHTML = 'CPF:  '+document.getElementById('assContratanteCPF___'+c).value;
                document.getElementById('passContratanteEmail___'+c).innerHTML = 'Email:  '+document.getElementById('assContratanteEmail___'+c).value;
                conta++;
            }
        }else{
            item3 = document.getElementById('grid1-assContratanteNome___'+c);
            contem3 = document.body.contains(item3);
            if(contem3 == true){
                document.getElementById('grid1-assContratanteNome___'+c).remove();
                contador--;
            }
        }
    }
    for(let c = 1; c <= cont2; c++){
        item = document.getElementById('assContratadoNome___'+c);
        contem = document.body.contains(item);
        console.log(contem);
        if(contem == true){
            item2 = document.getElementById('grid2-assContratadoNome___'+c);
            contem2 = document.body.contains(item2);
            if(contem2 == false){
                var nova_div = '<div class="grid2-item" id="grid2-assContratadoNome___'+c+'">'
                                    +'<p id="iniContratado___'+c+'">'+contador2+'.___________________________________</p>'
                                    +'<p id="passContratadoNome___'+c+'" style="margin-top: -2%" >Nome:  '+document.getElementById('assContratadoNome___'+c).value+'<p>'
                                    +'<p id="passContratadoCPF___'+c+'" style="margin-top: -5%" >CPF:  '+document.getElementById('assContratadoCPF___'+c).value+'<p>'
                                    +'<p id="passContratadoEmail___'+c+'" style="margin-top: -5%" >Email:  '+document.getElementById('assContratadoEmail___'+c).value+'<p>'
                            +'</div>';
                document.getElementById('grid2').innerHTML += nova_div;
                contador2++;
            }else{
                document.getElementById('iniContratado___'+c).innerHTML = conta2+'.___________________________________'
                document.getElementById('passContratadoNome___'+c).innerHTML = 'Nome:  '+document.getElementById('assContratadoNome___'+c).value;
                document.getElementById('passContratadoCPF___'+c).innerHTML = 'CPF:  '+document.getElementById('assContratadoCPF___'+c).value;
                document.getElementById('passContratadoEmail___'+c).innerHTML = 'Email:  '+document.getElementById('assContratadoEmail___'+c).value;
                conta2++;
            }
        }else{
            item4 = document.getElementById('grid2-assContratadoNome___'+c);
            contem3 = document.body.contains(item4);
            if(contem3 == true){
                document.getElementById('grid2-assContratadoNome___'+c).remove();
                contador2--;
            }
        }
    }
}
function cpf(v){
    v=v.replace(/[^0-9.-]/g, '')
    v=v.replace(/^(\d{3})(\d)/,"$1.$2")             //Coloca ponto entre o terceiro e o quarto dígitos
    v=v.replace(/^(\d{3})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return v
}

String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
};
  
function mascaraMoeda(campo,evento){
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "################################,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
    }
    campo.value = resultado.reverse();
}

function limpar(){
    document.getElementById('razaoSocial').value = '';
    document.getElementById('classificacaoContratante').value = '';
    document.getElementById('cnpjContratante').value = '';
    document.getElementById('cidadeContratante').value = '';
    document.getElementById('cepContratante').value = '';
    document.getElementById('enderecoContratante').value = '';
    document.getElementById('numeroContratantrante').value = '';
    document.getElementById('complementoContratante').value = '';
    document.getElementById('bairroContratante').value = '';
    document.getElementById('nireContratante').value = '';
}
function validadorCPF(cpf) {
    cpfvalue = cpf.value;
    cpfid = cpf.id;
    var strCPF = cpfvalue.replace('.','').replace('.','').replace('-','');
    console.log(strCPF);
    var Soma;
    var Resto;
    var valida;
    Soma = 0;
    switch (strCPF) {
        case '00000000000':
            valida = false;
            break;
        case '11111111111':
            valida = false;
            break;
        case '22222222222':
            valida = false;
            break;
        case '33333333333':
            valida = false;
            break;
        case '44444444444':
            valida = false;
            break;
        case '55555555555':
            valida = false;
            break;
        case '66666666666':
            valida = false;
            break;
        case '77777777777':
            valida = false;
            break;
        case '88888888888':
            valida = false;
            break;
        case '99999999999':
            valida = false;
            break;
        default:
            break;
    }
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) valida = false;

    Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) valida = false;
        if (valida != false) valida = true;
        
    console.log(valida);
    if(valida == false){
        document.getElementById('label'+cpfid).hidden = false;
        document.getElementById('valida') += cpfid + "false "
    }else{
        document.getElementById('label'+cpfid).hidden = true;
        document.getElementById('valida') += cpfid + "true "
        define();
    }
    
}
function validarCNPJ(cnpj) {
    var valida;
    cnpjvalue = cnpj.value;
    cnpjid = cnpj.id;
    cnpj = cnpjvalue.replace(/[^\d]+/g,'');

    if(cnpj == '') valida = false;
    
    

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        valida = false;
        
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        valida = false;
        
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        valida = false;
            
    if (valida != false) valida = true;
    if(valida == false){
        document.getElementById('label'+cnpjid).hidden = false;
        document.getElementById('valida') += cnpjid + "false "
    }else{
        document.getElementById('label'+cnpjid).hidden = true;
        document.getElementById('valida') += cnpjid + "true "
        define();
    }
    
}
