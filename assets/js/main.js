const searchInput=document.getElementById('page-search');
const cardsContainer=document.getElementById('cards-container');
const cards=cardsContainer.getElementsByClassName('card');
searchInput.addEventListener('input',function(){
  const filter=searchInput.value.toLowerCase();
  Array.from(cards).forEach(card=>{
    card.classList.remove('highlight');
    const text=card.innerText.toLowerCase();
    if(text.includes(filter)&&filter!==''){
      card.classList.add('highlight');
      card.scrollIntoView({behavior:"smooth",block:"center"});
    }
  });
});