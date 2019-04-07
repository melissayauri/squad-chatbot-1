/*hideChat(0);*/


  var btnAdd = document.getElementById('prime');
  btnAdd.addEventListener('click',toggleFab );
  //Toggle chat and links
  function toggleFab() {
   /* $('.prime').toggleClass('zmdi-comment-outline');*/
    //$('.prime').toggleClass('zmdi-close');
    //$('.prime').toggleClass('is-active');
   // $('.prime').toggleClass('is-visible');
    //$('#prime').toggleClass('is-float');
    document.getElementById('chat').classList.toggle('is-visible');
   document.getElementById('prime').classList.toggle('is-visible');
   chatList = document.querySelector('.chatlist'),

   chatList.innerHTML=`<li class="bot__output bot__output--standard">Hola, Melissa</li>
   <li class="bot__output bot__output--standard">¿En qué puedo ayudarte?</li>
   <div class="bot__output bot__output--standard ">
   <div class="sliders">
 
   <!--<a href="#slide-1">1</a>
    <a href="#slide-2">2</a>
    <a href="#slide-3">3</a>
    <a href="#slide-4">4</a>
    <a href="#slide-5">5</a>--> 
  
    <div class="slides">
      <div id="slide-1">
        <button id="necesito" type="button" class="btn btn-primary btn-radius">Tengo un problema</button>
        <button type="button" class="btn btn-primary btn-radius">Primary</button>
        <button type="button" class="btn btn-primary btn-radius">Primary</button>
      </div>
 
 
    </div>
  </div>
   </div>
   ` ;


 var sendForm = document.querySelector('#chatform'),
 textInput = document.querySelector('.chatbox'),

 userBubble = document.querySelectorAll('.userInput'),
 botBubble = document.querySelectorAll('.bot__output'),
 animateBotBubble = document.querySelectorAll('.bot__input--animation'),
 overview = document.querySelector('.chatbot__overview'),
 hasCorrectInput,
 imgLoader = false,
 animationCounter = 1,
 animationBubbleDelay = 600,
 input,
 previousInput,
 isReaction = false,
 unkwnCommReaction = "I didn't quite get that.",
 chatbotButton = document.querySelector(".submit-button")
 /*chatList.innerHTML= '<li class="bot__output bot__output--standard">Hola, Melissa</li>'+
  ' <li class="bot__output bot__output--standard">¿En qué puedo ayudarte?</li>'+
  '   <div class="bot__output bot__output--standard "><button class="btn btn-light btn-radius">tengo un problema</button><button class="btn btn-light btn-radius">necesito algo</button></div>'
*/
var firstButton = document.getElementById('necesito');
firstButton.addEventListener('click',createBubble );
function createBubble(event){
  alert(firstButton.innerHTML)
  var input = firstButton.innerHTML;
  console.log(input)
  var chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = input;
  chatList.appendChild(chatBubble)
 
 /* var chatBubble1 = document.createElement('li');
  chatBubble1.classList.add('message-lef');
  chatBubble1.innerHTML = "dmelij";
  chatList.appendChild(chatBubble1)*/
  chatList.insertAdjacentHTML("beforeend","<li>Elemento</li>");
 
}

    
}
