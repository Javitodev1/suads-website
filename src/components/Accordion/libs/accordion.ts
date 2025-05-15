import { Accordion } from 'flowbite'
import type {
  AccordionOptions,
  AccordionItem,
  AccordionInterface,
} from 'flowbite'

function accordionInit(accordionEl: HTMLElement) {
  // create an array of objects with the id, trigger element (eg. button), and the content element
  const accordionItems: AccordionItem[] = Array.from(
    accordionEl.querySelectorAll<HTMLElement>('[data-accordion-item]')
  ).map((item, index) => {
    return {
      id: `accordion-heading-${index}`,
      triggerEl: item.querySelector('[data-trigger]')!,
      targetEl: item.querySelector('[data-target]')!,
      active: index === 0,
    }
  })

  // options with default values
  const options: AccordionOptions = {
    alwaysOpen: false,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
      console.log('accordion item has been shown')
      console.log(item)
    },
    onClose: (item) => {
      console.log('accordion item has been hidden')
      console.log(item)
    },
    onToggle: (item) => {
      console.log('accordion item has been toggled')
      console.log(item)
    },
  }

  /*
   * accordionEl: HTML element (required)
   * accordionItems: array of accordion item objects (required)
   * options (optional)
   * instanceOptions (optional)
   */
  const accordion: AccordionInterface = new Accordion(
    accordionEl,
    accordionItems,
    options
  )
}

document.addEventListener('astro:page-load', () => {
  document
    .querySelectorAll<HTMLElement>('[data-accordion]')
    .forEach((accordion) => {
      accordionInit(accordion)
    })
})
