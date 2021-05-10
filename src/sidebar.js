import { Button } from './button.js'

const Sidebar = {
    name: 'Sidebar',
    template: `
      <div class="d-flex flex-column p-3 text-white bg-dark" :style="'width: ' + width + ';'">
        <slot name="title">
          <a :href="title.link" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">
              <i v-if="title.icon" :class="['me-2', title.icon]"></i>
              {{ title.text }}
            </span>
          </a>
        </slot>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item" v-for="(entry, index) in entries">
            <slot name="entry" :entry="entry" :index="index">
              <a :href="entry.link"
                 :class="['nav-link', {'active': entry.active, 'text-white': !entry.active}]"
                 :aria-current="entry.aria_current">
                 <i v-if="entry.icon" :class="['me-2', entry.icon]"></i>
                {{ entry.text }}
              </a>
            </slot>
          </li>
        </ul>
        <slot name="footer"></slot>
      </div>
    `,
    components: {
      Button: Button
    },
    props: {
      width: {
        type: String,
        default: () => {
          return '280px'
        }
      },
      title: {
        type: Object,
        default: () => {
          return {
            text: 'Sidebar',
            link: '#'
          }
        }
      },
      entries: {
        type: Array,
        default: () => {
          return [
            {
              text: 'Item 1',
              link: '#1',
              active: true,
              aria_current: 'page',
              icon: 'bi-check-circle-fill'
            },
            {
              text: 'Item 2',
              link: '#2',
              icon: 'bi-check-circle'
            },
            {
              text: 'Item 3',
              link: '#3'
            }
          ]
        }
      }
    },
  }

  export { Sidebar }