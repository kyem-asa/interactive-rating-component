
document.getElementById('rating-one').addEventListener('click', function(){
  let clickedRating = '1'
  console.log(clickedRating)

  document.querySelector('.rating__btn').addEventListener('click', function(){
    
    document.querySelector('.rating').style.display = 'none'
    document.querySelector('.submitted-state').style.display = 'flex'
    document.querySelector('.submitted-state__selection').innerHTML = `You selected ${clickedRating} out of 5`
  })
})

document.getElementById('rating-two').addEventListener('click', function(){
  let clickedRating = '2'
  console.log(clickedRating)

  document.querySelector('.rating__btn').addEventListener('click', function(){
    
    document.querySelector('.rating').style.display = 'none'
    document.querySelector('.submitted-state').style.display = 'flex'
    document.querySelector('.submitted-state__selection').innerHTML = `You selected ${clickedRating} out of 5`
  })
})

document.getElementById('rating-three').addEventListener('click', function(){
  let clickedRating = '3'
  console.log(clickedRating)

  document.querySelector('.rating__btn').addEventListener('click', function(){
    
    document.querySelector('.rating').style.display = 'none'
    document.querySelector('.submitted-state').style.display = 'flex'
    document.querySelector('.submitted-state__selection').innerHTML = `You selected ${clickedRating} out of 5`
  })
})

document.getElementById('rating-four').addEventListener('click', function(){
  let clickedRating = '4'
  console.log(clickedRating)

  document.querySelector('.rating__btn').addEventListener('click', function(){
    
    document.querySelector('.rating').style.display = 'none'
    document.querySelector('.submitted-state').style.display = 'flex'
    document.querySelector('.submitted-state__selection').innerHTML = `You selected ${clickedRating} out of 5`
  })
})

document.getElementById('rating-five').addEventListener('click', function(){
  let clickedRating = '5'
  console.log(clickedRating)

  document.querySelector('.rating__btn').addEventListener('click', function(){
    
    document.querySelector('.rating').style.display = 'none'
    document.querySelector('.submitted-state').style.display = 'flex'
    document.querySelector('.submitted-state__selection').innerHTML = `You selected ${clickedRating} out of 5`
  })
})