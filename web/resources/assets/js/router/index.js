import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Views - Components
import Buttons from '@/views/components/Buttons'
import SocialButtons from '@/views/components/SocialButtons'
import Cards from '@/views/components/Cards'
import Forms from '@/views/components/Forms'
import Modals from '@/views/components/Modals'
import Switches from '@/views/components/Switches'
import Tables from '@/views/components/Tables'

// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'
import Temperature from "@/views/pages/Temperature"
import Humidity from "@/views/pages/Humidity"
import MoistureContent from "@/views/pages/MoistureContent"
import LightIntensity from "@/views/pages/LightIntensity"

import TemperatureChart from "@/views/pages/TemperatureChart"
import HumidityChart from "@/views/pages/HumidityChart"
import MoistureContentChart from "@/views/pages/MoistureContentChart"
import LightIntensityChart from "@/views/pages/LightIntensityChart"
//new imports
//import TemperatureControl from '@/views/pages/TemperatureControl'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        //dfghjkldfghjklsdfghjk
        {
          path: "temperature/:id",
          name: "Temperature",
          component: Temperature,
          props: true
        },
        {
          path: "humidity/:id",
          name: "Humidity",
          component: Humidity,
          props: true
        },
        {
          path: "moistureContent/:id",
          name: "MoistureContent",
          component: MoistureContent,
          props: true
        },
        {
          path: "lightIntensity/:id",
          name: "LightIntensity",
          component: LightIntensity,
          props: true
        },
        {
          path: "temperatureChart/:id",
          name: "TemperatureChart",
          component: TemperatureChart,
          props: true
        },
        {
          path: "humidityChart/:id",
          name: "HumidityChart",
          component: HumidityChart,
          props: true
        },
        {
          path: "moistureContentChart/:id",
          name: "MoistureContentChart",
          component: MoistureContentChart,
          props: true
        },
        {
          path: "lightIntensityChart/:id",
          name: "LightIntensityChart",
          component: LightIntensityChart,
          props: true
        },
        // {
        //   path: "temperatureControl/:id",
        //   name: "TemperatureControl",
        //   component: TemperatureControl,
        //   props: true
        // },

        {
          path: 'components',
          redirect: '/components/buttons',
          name: 'Components',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'buttons',
              name: 'Buttons',
              component: Buttons
            },
            {
              path: 'social-buttons',
              name: 'Social Buttons',
              component: SocialButtons
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/p404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
