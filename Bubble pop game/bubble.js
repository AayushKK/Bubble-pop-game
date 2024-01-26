const bubbleContainer = document.getElementById('bubble-container');
const scoreElement = document.getElementById('score-value');
    let score = 0;
    let flag =false;

    let colors={'red': 5,
                'blue': 2,
                'green': 4,
                'yellow':3,
                'orange':7,
                'purple':6,
                'pink': 8};


   function genRandomColor() {
                  // get random color name
                  let  colorname = Object.keys(colors);
                  let randomColor = colorname[Math.floor(Math.random() * colorname.length)];
                   return randomColor;
   }
  
  function createBubble() {
    
        // create a bubble
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
        // set bubble position
      let container = bubbleContainer.getBoundingClientRect();
      let containerLeft = container.left;
      let containerTop = container.top;
      let containerWidth = container.width;
      let containerHeight = container.height;
      bubble.style.left = containerLeft + Math.floor(Math.random() * (containerWidth - 50)) + "px";
      bubble.style.top = containerTop + Math.floor(Math.random() * (containerHeight - 50)) + "px";
         // set bubble color
      bubble.style.backgroundColor = genRandomColor();
            // remove bubble when clicked
      bubble.addEventListener('click', function () 
      {
        let currentColor = bubble.style.backgroundColor;
            // update score
        score+=colors[currentColor];
        document.body.removeChild(bubble);
        scoreElement.textContent = score;
            // check if game is over
        if(score >=20){
                
            flag=true;
            

        }
       
        
      });
      
      document.body.appendChild(bubble);
            // game over
      if(flag){
        clearInterval(startGame);
                // create game over message
            let endofgame = document.createElement('div');
          endofgame.classList.add('endgame');
          endofgame.innerHTML='Game Over';
          endofgame.style.color = 'green';
          endofgame.style.fontSize = 100 + "px";
          endofgame.style.fontWeight = 'bold';
          
                // remove all bubbles
          const bubble = document.getElementsByClassName('bubble');  
          let bubbleArray=Array.from(bubble);
          bubbleArray.forEach(function(item){
            document.body.removeChild(item);
          });
                // display game over message
          bubbleContainer.innerHTML=endofgame.outerHTML;
          bubbleContainer.style.alignItems = 'center';
          bubbleContainer.style.justifyContent = 'center';
          bubbleContainer.style.paddingLeft = 20+'px';
          bubbleContainer.style.paddingTop = 100+'px';
          
                // reset game
                  resetgame();
      }
              
  }
      function resetgame(){
        // create reset button
        const resetbutton = document.createElement('button');
        resetbutton.classList.add('reset');
        resetbutton.innerHTML='Reset Game';
        // style reset button
        resetbutton.style.color = 'white';
        resetbutton.style.backgroundColor = 'red';
        resetbutton.style.display = 'flex';
        resetbutton.style.padding = 10+'px';
        resetbutton.style.borderRadius = 10+'px';
        resetbutton.style.fontSize = 20+'px';
        resetbutton.style.fontWeight = 'bold';

         // set reset button position
          bc=document.getElementById('bubble-container');
          bc.style.alignItems = 'center';
          bc.style.justifyContent = 'center';
          bc.appendChild(resetbutton);

        // add event listener to reset button
        resetbutton.addEventListener('click', function () 
        {   //set flag to false
          flag=false;
          // reset score
          score=0;
          scoreElement.textContent=score;
          // remove game over message
          bubbleContainer.innerHTML='';
          // start a new game
          startGame = setInterval(createBubble, 1000);

            bc.removeChild(resetbutton);
        });
       
        
    }
  
        // start game
    let startGame = setInterval(createBubble, 1000)
  

  
  

  
  
  
