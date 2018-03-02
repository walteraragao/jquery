

$("#buscacep").click(function(){
var cep = $("#cep").val();
var caminhoJSON = "https://viacep.com.br/ws/"+cep+"/json/";
  $.get(caminhoJSON, function(data){
    $("#logradouro").val(data.logradouro);
  })

});




console.log("teste");
