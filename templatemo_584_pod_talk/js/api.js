const api_key = 'bfa79ef64f8c9aa34a894cb6f735648c'

const ackssToken ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmE3OWVmNjRmOGM5YWEzNGE4OTRjYjZmNzM1NjQ4YyIsInN1YiI6IjY2MzYzODNkODEzY2I2MDEyNzg4NjMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5gIdCRjOADKrSMeglh1hrT7N2y6SB8cntvEvDOd-EqU'

const img_movies = 'https://image.tmdb.org/t/p/w500'
async function work (){
    const respons = await fetch(`https://api.themoviedb.org/3//discover/movie?api_key=${api_key}`)
    const data = await respons.json()
    M_map(data.results)
    card(data.results)

}





async function M_map(item){

     const owl =document.querySelector('.owl-carousel')
  
     await item.map((title,index) =>{


         console.log(`${img_movies}${title.poster_path}`);
         
         owl.innerHTML += `
         
        <div class="owl-carousel-info-wrap item">
         <img src=${img_movies+title.poster_path} class="owl-carousel-image img-fluid" alt="">

        <div class="owl-carousel-info">
        <div class="over">
        <p class="osama">
        ${title.title}
        </p>
        
        
        </div>

            <span class="badge">${title.release_date }</span>

            <span class="badge en">${title.original_language}</span>
            </div>
            `


        })
  
    
        
       
          
    

        $('.owl-carousel').owlCarousel({
            center: true,
            loop: true,
            margin: 30,
            autoplay: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 2,
                },
                767:{
                    items: 3,
                },
                1200:{
                    items: 4,
                }
            }
        });
      
}

async function  card( item ){
    const Image = document.querySelectorAll('.Image')
    const info = document.querySelectorAll('.braif')
    console.log(item);
    for (let index = 0; index < 2; index++) {
        Image[index].src=img_movies+item[index].poster_path
            info[index].innerHTML = item[index].overview.substring(0, 200) + ". . . ";

        
    }
       
          

}
work()