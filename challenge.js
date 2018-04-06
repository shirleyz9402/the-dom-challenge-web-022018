const incButton = document.getElementById('+')
incButton.addEventListener("click",inc)
const decButton = document.getElementById('-')
decButton.addEventListener("click", dec)
const likeButton = document.getElementById('<3')
likeButton.addEventListener("click",like)
const pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', pause)
const likesList = document.querySelector('ul.likes')
const commentsForm = document.getElementById('comment-form')
commentsForm.addEventListener('submit', addComment)



let timer = setInterval(inc, 1000)

function inc(){
  document.querySelector('#counter').innerText++
}

function dec(){
  document.querySelector('#counter').innerText--
}


function pause(){
	if (timer){
		clearInterval(timer)
		timer = null
		pauseButton.innerText = 'resume'
		incButton.disabled = true
		decButton.disabled = true
		likeButton.disabled = true
		document.getElementById('submit').disabled = true
	} else{
		timer = setInterval(inc, 1000)
		pauseButton.innerText = 'pause'
		incButton.disabled = false
		decButton.disabled = false
		likeButton.disabled = false
		document.getElementById('submit').disabled = false
	}
}
let likes = {num:[], text:[]}

function like(){
	number = document.querySelector('#counter').innerText
	if (!(number in likes.num)){
		likes.num[number] = 1
		li = document.createElement('li')
		li.innerText =  `${number} has been liked ${likes.num[number]} time`
		likes.text[number] = li
		likesList.append(li)
	} else{
		likes.num[number] ++
		likes.text[number].innerText = `${number} has been liked ${likes.num[number]} times`
	}
}

function addComment(e){
	e.preventDefault()
	let li = document.createElement('li')
	li.innerText = document.getElementById('comments').value
	document.getElementById('list').append(li)
}
