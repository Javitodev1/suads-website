import type { IHome } from '..'

import home from '@/data/inicio.json'
import formContact from '@/data/form_contact.json'

import heroDesktop from '../assets/hero-desktop.png'
import heroMobile from '../assets/hero-mobile.png'
import statsImage from '../assets/stats-image.svg'
import aboutImage from '../assets/about.svg'

export function getHomeContent(): IHome {
  const content: IHome = {
    hero: {
      ...home.hero,
      bgDesktop: heroDesktop,
      bgMobile: heroMobile,
    },
    about: {
      ...home.about,
      image: aboutImage,
    },
    contact: {
      ...formContact,
    },
    customers: {
      ...home.customers,
    },
    features: {
      ...home.features,
    },
    services: {
      ...home.services,
    },
    stats: {
      ...home.stats,
      image: statsImage,
    },
  }

  return content
}
