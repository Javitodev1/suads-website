import type * as Global from '@/modules'

import type * as Home from '@/templates/home/modules'
import type * as Services from '@/templates/services/modules'

export interface ICard {
  title?: string
  body?: string
}

export interface IHome {
  features?: Global.IFeatures
  hero?: Home.IHero
  about?: Home.IAbout
  customers?: Home.ICustomers
  services?: Home.IServices
  stats?: Home.IStats
}

export interface IService {
  features?: Global.IFeatures
  hero?: Services.IHero
  howWork?: Services.IHowWork
  whyUs?: Global.IFeatures
  portfolio?: Services.IPortfolio
}
