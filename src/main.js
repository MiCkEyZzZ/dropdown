import '@/css/main.css'
import '@/scss/main.scss'

import {Dropdown} from '@/components/dropdown'

const dropdown = new Dropdown('#dropdown', {
  placeholder: 'Customer',
  data: [
    {id: '1', value: 'Your order'},
    {id: '2', value: 'Manage prime'},
    {id: '3', value: 'Your account'},
    {id: '4', value: 'Return & Refunds'},
    {id: '5', value: 'Payments'},
    {id: '6', value: 'Digital service'}
  ]
})

window.d = dropdown