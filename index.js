const data = document.getElementById('form')

data.addEventListener('submit', (e) => {
  e.preventDefault()
  const userName = document.getElementById('user').value
  if (userName != '') {
    window.open('page.html?name=' + userName, '_self')
  }
})

window.addEventListener('load', () => {
  const url = 'https://restcountries.com/v2/all'
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const length = data.length
      for (let i = 0; i <= length - 1; i++) {
        let c = document.getElementById('container')
        const div = document.createElement('div')
        div.setAttribute('class', 'country-links')
        const link = document.createElement('a')
        link.setAttribute('href', './page.html?name=' + data[i].name)
        link.textContent = data[i].name
        div.append(link)
        c.append(div)
      }
    })
    .catch((err) => console.log(err))
})
