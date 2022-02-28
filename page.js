// get params from query
const query = window.location.search
const urlParams = new URLSearchParams(query).get('name')

window.addEventListener('load', () => {
  fetch('https://restcountries.com/v3.1/name/' + urlParams)
    .then((res) => res.json())
    .then((data) => {
      const items = data[0]
      const { common, official } = items.name
      console.log(items)
      const { googleMaps } = items.maps
      const { languages, population, capital, region, subregion } = items
      const langArray = Object.values(languages)
      const { svg } = items.flags
      console.log(region)
      //..........................................
      const map = document.getElementById('map')
      const imgRoot = document.getElementById('img-div')
      const a = document.createElement('a')
      a.setAttribute('href', googleMaps)
      a.setAttribute('target', '_blank')
      a.textContent = 'Preview'
      imgRoot.append(a)
      const p = document.createElement('p')
      p.textContent = 'Click on Preview to display Full Map of ' + common
      map.append(p)
      const createDiv = document.createElement('div')
      createDiv.setAttribute('class', 'data-div')
      createDiv.setAttribute('id', 'data-div')
      const page = document.getElementById('page')
      page.append(createDiv)
      //append data in divs
      const dataDiv = document.getElementById('data-div')
      //
      const commonName = document.createElement('h2')
      commonName.textContent = 'Name: ' + common + '       '
      dataDiv.appendChild(commonName)

      // add flag
      const flag = document.createElement('img')
      flag.setAttribute('src', svg)
      commonName.append(flag)

      //
      const officalName = document.createElement('h4')
      officalName.textContent = 'OfficalName: ' + official
      dataDiv.append(officalName)
      //capital
      const capt = document.createElement('h5')
      capt.textContent = 'Capital: ' + capital[0]
      dataDiv.appendChild(capt)
      //
      const lang = document.createElement('h5')
      lang.textContent = 'Languages: ' + langArray
      dataDiv.appendChild(lang)
      //population
      const popu = document.createElement('h5')
      popu.textContent = 'Population: ' + population
      dataDiv.appendChild(popu)
      // region
      const continent = document.createElement('h5')
      continent.textContent = 'Region: ' + region
      dataDiv.appendChild(continent)
      // subregion
      const sub = document.createElement('h5')
      sub.textContent = 'SubRegion: ' + subregion
      dataDiv.appendChild(sub)
    })
})
