const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container');


for(let i = 0; i < posts.length; i++){

    let imageTemp;

    if(posts[i].author.image == null){

        imageTemp = document.createElement('div');
        imageTemp.classList.add('profile-pic-default');
        imageTemp.innerHTML = `<span>${posts[i].author.name[0]}</span>`;
        
    }else{
        imageTemp = document.createElement('img');
        imageTemp.src = (posts[i].author.image);
        imageTemp.alt = (posts[i].author.name);
        imageTemp.classList.add('profile-pic');
    }

    container.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author['name']}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#nogo" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
        let iconUser = document.querySelector('.post:last-child .post-meta__icon');
        iconUser.append(imageTemp) 
        
};

let button = document.querySelectorAll('.like-button');

const postIdList = [];


for(let j = 0; j < button.length; j ++){

    button[j].addEventListener('click', function(){

        this.classList.toggle('like-button--liked');

        if (this.classList.contains('like-button--liked')){

            postIdList.push(posts[j].id);

            let userLikeAdd = posts[j].likes + 1;
            document.getElementById(`like-counter-${posts[j].id}`).innerHTML = userLikeAdd;
        }

        else {
            
            postIdList.shift(posts[j].id);
            
            let userLikeRemove = posts[j].likes;
            document.getElementById(`like-counter-${posts[j].id}`).innerHTML = userLikeRemove;
             
            
        }
        
        console.log(postIdList)

    });

}