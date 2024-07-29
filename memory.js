let clickedCard = null;
let preventClick = false;
let memoryBoard=0;

function onCardClicked(e) {
  const target = e.currentTarget;
  if (preventClick || target === clickedCard || target.className.includes('done')) {
    return;
  }

  target.className = target.className.replace('color-hidden', '').trim();
  target.className += ' done';

  if (!clickedCard) {
    clickedCard = target;
  } else {
    if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
        target.className = target.className.replace('done', '').trim() + ' color-hidden';
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      memoryBoard++;
      clickedCard = null;
      if(memoryBoard === 8){
        alert("congratulations You are Winner")
      }
    }
  }
 
function resetGame() {
  console.log("Reset game function called");

  clickedCard = null;
  preventClick = false;
  memoryBoard = 0;
  
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.className = card.className.replace('done', '').trim() + ' color-hidden';
    console.log(`Card reset: ${card.getAttribute('data-color')}`);
  });

  console.log("Game reset complete");
  location.reload();
}

// Add event listener to the reset button
document.querySelector('button').addEventListener('click', resetGame);
}
