import type { IHome, IServices } from '@/templates'

import home from '@/data/inicio.json'
import contact from '@/data/contacto.json'
import webdev from '@/data/desarrollo_web.json'
import design from '@/data/diseño_grafico.json'
import ads from '@/data/publicidad.json'

import formContact from '@/data/form_contact.json'

import homeHeroDesktop from '@/assets/home/hero-desktop.png'
import homeHeroMobile from '@/assets/home/hero-mobile.png'
import homeStatsImage from '@/assets/home/stats-image.svg'

export class Content {
  static getHome(): IHome {
    const content: IHome = {
      hero: {
        ...home.hero,
        bgDesktop: homeHeroDesktop,
        bgMobile: homeHeroMobile,
      },
      about: {
        ...home.about,
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
        image: homeStatsImage,
      },
    }

    return content
  }

  static getContact() {
    return contact
  }

  static getWebdev(): IServices {
    return { ...webdev, contact: formContact }
  }

  static getDesign(): IServices {
    return { ...design, contact: formContact }
  }

  static getAds(): IServices {
    return { ...ads, contact: formContact }
  }
}
