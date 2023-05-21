function abrir(){
    document.getElementById('pop-up').style.display = 'flex'
    document.querySelector('.calculadora').style.display = 'none'
}
function openSuporte(){
    document.querySelector('.suuporte').style.display = 'block'
    document.querySelector('.cor').style.display = 'none'
}
function closeSuporte(){
    document.querySelector('.suuporte').style.display = 'none'
    document.querySelector('.cor').style.display = 'flex'
}


const toggle = document.getElementById("check");

const theme = window.localStorage.getItem("theme");

/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */
if (theme === "dark"){
    
    document.body.classList.add("dark");
}

// event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
 
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");

  } else window.localStorage.setItem("theme", "dark");
  
});
    



function fechar(){
    document.getElementById('pop-up').style.display = 'none'
    document.querySelector('.calculadora').style.display = 'flex'
}
function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num 
    }
    
    
    function clean(){
        document.getElementById('resultado').innerHTML = "";
    }
    
    
    function caucular(){
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }
    }
    

     





  function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num 
    }
    
    
    function clean(){
        document.getElementById('resultado').innerHTML = "";
    }
    
    
    function caucular(){
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }else{
            document.getElementById('resultado').innerHTML = ""
        }
    }
    function soml(){
    const checkbox = document.getElementById("som");

      if (checkbox.checked) {
        var audio = new Audio('click.wav');
        audio.play()
        
    
      }else{
        var audio = ''
        console.log('desligadi')
      }
    
}

    
