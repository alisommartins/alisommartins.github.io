$(document).ready(function () {
    Layout.init();
    UIAlertDialogApi.init();
    InitDates();
});

function sendmail(e){
        e.preventDefault();
        var nome = $("#nome").val();
        var seuemail = $("#seuemail").val();
        var assunto = $("#assunto").val();
        var mensagem = $("#mensagem").val();

        var dataString = 'nome=' + nome + '&seuemail=' + seuemail + '&assunto=' + assunto + '&mensagem=' + mensagem;
        if (nome == '' || seuemail == '' || assunto == '' || mensagem == '') {
            alert("Por favor insira todos os campos.");
        }
        else {
            emailjs.send("gmail","template_wml44s8S",{
                    to_name: "Alisom Martins",
                    message_html: mensagem,
                    reply_to: seuemail,
                    from_name: nome,
                    subject: assunto
            }).then(
                function(response){
                        $('#nome').val('');
                        $('#seuemail').val('');
                        $('#assunto').val('');
                        $('#mensagem').val('');
                        bootbox.alert("<i class=\"fa-lg fa fa-check\"></i>  Obrigado!<br/> Seu email foi enviado com sucesso! </br> Em breve entrarei em contato.");
                },function(err){
                            bootbox.alert("<i class=\"fa-lg fa fa-warning\"></i><strong>   Oh não! :(</strong>,<br/> Ocorreu um erro durante o envio! </br> Você pode me telefonar, eu prometo atendê-lo!");
                }
            );
        }
}

function InitDates()
{
    var idade =  MinhaIdade();
    $("#idade").html(idade);
}

function MinhaIdade()
{   
    var ageDifMs = Date.now() - new Date('1994','08','10').getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$("#year").html(new Date().getFullYear())