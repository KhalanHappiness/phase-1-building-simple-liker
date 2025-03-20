// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){

  modalError = document.getElementById("modal").classList.add('hidden')

  let modal = document.querySelector('.hidden')
  
  
  const likes = document.querySelectorAll('.like-glyph')
  const errorMessage = document.getElementById("modal-message")

  likes.forEach(like => {
    like.addEventListener('click', () => {
      mimicServerCall()
      .then(()=>{
        //toggle between empty and full heart

        if(like.textContent === EMPTY_HEART){
          like.textContent = FULL_HEART
          like.classList.add("activated-heart")
        }else{
          like.textContent = EMPTY_HEART
          like.classList.remove("activated-heart")
        }
      })
      .catch((error)=>{
        errorMessage.textContent = error
        modalError.classList.remove("hidden")

        //hide the modal after 3 seconds
        setTimeout(()=>{
          modalError.classList.add("hidden")
        }, 3000)
      })
    })
  })


  


  
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
