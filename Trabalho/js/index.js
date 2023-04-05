// validação de login
function formValidation(){
    var InputEmail = document.getElementById("E-mail");
    var InputSenha = document.getElementById("Senha");
    if(InputEmail.value !=="A" && InputSenha.value !=="B"){
        alert("Senha invalida")
    }else{
       var token = Math.random().toString(36).substring(2);
       
       localStorage.setItem("token", token)
       Botão = window.open ("~/../index.html")
    }
}

// mensagem no topo da tela 
function mostrarNome(nomeUsuario){
    document.write('Olá ', nomeUsuario, ' , seja bem-vindo(a)!')
}
/*adicionar tarefas*/
var count = 0;
$(function(){
    let task_list = $("#task_list")
    $("#myForm").submit(function(event){
        let valuesInForm = $(this).serializeArray();
        console.table(valuesInForm);
        if(count<=6){
            $("#taskTable").append('<tr> <td>'+valuesInForm[0].value+'</td>'+'<td>'+valuesInForm[1].value+'</td>'+'<td>'+valuesInForm[2].value+'</td> <tr/>')
        }else{
            alert("O limite foi Atingido!")
        }
        count+=1;
        event.preventDefault();
    });
});
/*troca de cor de fundo*/



// function verificaSwitchButton(){
//     var switch = document.getElementById('SwitchButton');
//     toggleDarkMode(SwitchButton.checked);
//     alterarIcone(SwitchButton.checked);    
// }

// function alterarIcone(SwitchButton){
//     const icone = document.getElementById('iconMode');
//         if(SwitchButton === true){
//             icone.innerText ='light_mode'      
//         }else{
//             icone.innerText='dark_mode'
//         }
// }

// function toggleDarkMode(darkModeOn){
//     const body = document.querySelector('body')
//     const table = document.querySelector('table')
//     const headerBar = document.querySelector('.Barra')
//     const SideMenu = document.querySelector('.aside_bar')
//     if(darkModeOn){
//         body.style.background('black');
//         table.style.color('white');
//         headerBar.style.color('white');
//         SideMenu.style.color('white');
//     }else{
//         body.style.background('white');
//     }
// }