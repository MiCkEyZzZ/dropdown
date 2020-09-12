import {getTemplate} from '@/template/dropdown.template'

export class Dropdown {
  constructor(drop, options) {
    this.$el = document.querySelector(drop)
    this.options = options
    this.selectedId = options.selectedId

    this.render()
    this.setup()
  }

  render() {
    const {data, placeholder} = this.options
    this.$el.classList.add('dropdown')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }

  setup() {
    this.handleClick = this.handleClick.bind(this)
    this.$el.addEventListener('click', this.handleClick)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
  }

  handleClick(evt) {
    const {type} = evt.target.dataset

    if (type === 'input' || type === 'value' || type === 'arrow') {
      this.toggle()
    } else if (type === 'item') {
      const id = evt.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  select(id) {
    this.selectedId = id

    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected')
    })
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.remove('fa-chevron-down')
    this.$arrow.classList.add('fa-chevron-up')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.add('fa-chevron-down')
    this.$arrow.classList.remove('fa-chevron-up')
  }

  destroy() {
    this.$el.removeEventListener('click', this.handleClick)
    this.$el.innerHTML = ''
  }
}