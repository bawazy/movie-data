// globals

let submit = document.getElementById('btn');
let area = document.getElementById('search');

submit.addEventListener('click',movieData);

function getPoster (poster){
    let image = document.createElement('img');
    image.className = 'img';
    image.setAttribute('src',poster);
    area.appendChild(image);

 }

 function getTitle(title){
    let h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(title));
        area.appendChild(h1);
 }

    function getInfo(plot,genre,actors,writer,year){

        let h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(`Genre:${genre}`));
        area.appendChild(h2);


        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(`Written By: ${writer}`));
        area.appendChild(h3);


        let para1 = document.createElement('p');
        para1.appendChild(document.createTextNode(`Actors: ${actors}`));
        area.appendChild(para1);

        let para2 = document.createElement('p');
        para2.appendChild(document.createTextNode(`Year Released: ${year}`));
        area.appendChild(para2);

        ;

}

  async function movieData(movie){
    try{   

        var movie =  document.getElementById('searchbox').value;
        const response = await $.getJSON(`https://omdbapi.com?t=${movie}&apikey=thewdb`);
    
        console.log(response);
        getPoster(response.Poster);
        getTitle(response.Title);
        getInfo(response.Plot,response.Genre, response.Actors, response.Writer, response.Writer, response.Year );
    
       
    } catch(err){
        console.log('movie not found or search for errors');
       
       

    }

 } 

 









































