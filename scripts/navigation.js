const hamburger = document.getElementById("hamburger")
const navigation = document.getElementById("navigation")

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

hamburger.addEventListener('click', () => {
    console.log('Clicked Nav')
    if(navigation.classList.contains('sm:hidden') || navigation.classList.contains('md:hidden')){
        // show nav 
        navigation.classList.remove('sm:hidden')
        navigation.classList.remove('md:hidden')
        line1.classList.add('absolute', 'rotate-45')
        line2.classList.add('absolute', '-rotate-45')
        line2.classList.remove('mt-1.5')
        line3.classList.remove('mt-1.5')
        line3.style.display = 'none'
    } else {
        //hide nav
        navigation.classList.add('sm:hidden')
        navigation.classList.add('md:hidden')
        line1.classList.remove('absolute', 'rotate-45')
        line2.classList.remove('absolute', '-rotate-45')
        line2.classList.add('mt-1.5')
        line3.classList.add('mt-1.5')
        line3.style.display = 'block'
    }
})



const copyright = document.getElementById('copyright')

const currentYear = new Date().getFullYear()

copyright.innerHTML = currentYear