export const getTemplate = (data = [], placeholder, selectedId) => {
  const text = placeholder
  const items = data.map(item => {
    let activeClass = ''

    if (item.id === selectedId) {
      activeClass = 'selected'
    }

    return `
      <li class="dropdown-drop__list-item">
          <a href="#" class="dropdown-drop__list-item--link ${activeClass}" data-type="item" data-id="${item.id}">${item.value}</a>
      </li>
    `
  })

  return `
    <div class="dropdown-backdrop" data-type="backdrop"></div>
    <div class="dropdown-input" data-type="input">
        <span class="app-list__item-link" data-type="value">${text}</span>
        <i class="fa fa-chevron-down" data-type="arrow"></i>
    </div>
    <div class="dropdown-drop">
        <ul class="dropdown-drop__list">
            ${items.join('')}
        </ul>
    </div>
  `
}