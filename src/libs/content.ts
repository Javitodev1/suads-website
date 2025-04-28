import type { IHome, IService } from '@/types/content'

import home from '@/data/inicio.json'
import contact from '@/data/contacto.json'
import webdev from '@/data/desarrollo_web.json'
import design from '@/data/diseño_grafico.json'
import ads from '@/data/publicidad.json'

import formContact from '@/data/form_contact.json'

export class Content {
  static getHome(): IHome {
    return home
  }

  static getContact() {
    return contact
  }

  static getWebdev(): IService {
    return webdev
  }

  static getDesign(): IService {
    return design
  }

  static getAds(): IService {
    return ads
  }

  static getFormContact() {
    return formContact
  }
}
