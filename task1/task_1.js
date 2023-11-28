const button = document.querySelector('button'),
      svgImage = document.querySelector('.svgImage'),
      svgArr = svgImage.querySelectorAll('svg');

 button.addEventListener('click', (e) =>{
    e.preventDefault();
    svgArr.forEach(item =>{
        item.classList.toggle('hide');
    });
 });     