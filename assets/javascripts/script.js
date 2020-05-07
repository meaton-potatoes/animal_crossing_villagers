let searchFields = {}

$(document).ready(() => {
  appendVillagers(villagers)

  $('input').keyup(handleChange)
  $('select').change(handleChange)
})

const appendVillagers = villagers => {
  $('#villagers tbody').empty()

  villagers.forEach(villager => {
    let row = $('<tr></tr>')
    row.append($(`<td>${villager.name}</td>`))
    row.append($(`<td>${villager.gender}</td>`))
    row.append($(`<td>${villager.personality}</td>`))
    row.append($(`<td>${villager.species}</td>`))
    row.append($(`<td>${villager.birthday}</td>`))
    row.append($(`<td>${villager.catchphrase}</td>`))
    row.append($(`<td><a href='https://animalcrossing.fandom.com/wiki/${villager.name.split('/')[0]}' target='_blank'><i class="fas fa-external-link-square-alt"></i></a></td>`))
    $('#villagers tbody').append(row)
  })
}

const handleChange = ({ currentTarget: { id, value } }) => {
  searchFields[id] = value

  let matchedVillagers = villagers.filter(villager => {
    let flag = true
    Object.keys(searchFields).forEach(k => {
      let v = searchFields[k]
      if (!villager[k].toLowerCase().includes(v.toLowerCase())) {
        flag = false
      }
    })
    return flag
  })

  appendVillagers(matchedVillagers)
}
