import type { IHome, IServices } from '@/templates'

import home from '@/data/inicio.json'
import contact from '@/data/contacto.json'
import webdev from '@/data/desarrollo_web.json'
import design from '@/data/diseño_grafico.json'
import ads from '@/data/publicidad.json'

import formContact from '@/data/form_contact.json'

export class Content {
  static getHome(): IHome {
    return {...home, contact:formContact}
  }

  static getContact() {
    return contact
  }

  static getWebdev(): IServices {
    return {...webdev, contact:formContact}
  }

  static getDesign(): IServices {
    return {...design, contact:formContact}
  }

  static getAds(): IServices {
    return {...ads, contact:formContact}
  }
}
