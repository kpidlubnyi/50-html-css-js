const header = document.getElementById("card-header")
const title = document.getElementsByClassName("card-title")[0]
const excerpt = document.getElementsByClassName("card-excerpt")[0]
const photo = document.getElementsByClassName("profile-photo")[0]
const username = document.getElementsByClassName("username")[0]
const postDate = document.getElementsByClassName("post-date")[0]

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

const headerPhotoUrl = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
const profilePhotoUrl = "https://randomuser.me/api/portraits/men/45.jpg"


const clearLoadingAnims = () => {
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

const getData = () => {
  header.innerHTML =`<img src=${headerPhotoUrl} alt="" />`
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  photo.innerHTML =`<img src=${profilePhotoUrl} alt="" />`
  username.innerHTML = 'John Doe'
  postDate.innerHTML = 'Oct 08, 2020'

  clearLoadingAnims()
}


setTimeout(getData, 2999)


