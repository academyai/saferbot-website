import './style.less'
import '@lottiefiles/lottie-player'
import { LottiePlayer } from '@lottiefiles/lottie-player'
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

/******* UI INTERACTION - start *******/
declare global {
  interface Window {
    closeSubscribeModal: () => void
    showSubscribeModal: () => void
  }
}
// banner animation
const bannerPlayer = document.getElementById('banner-anime')! as LottiePlayer
bannerPlayer.addEventListener('rendered', () => {
  bannerPlayer.load('/assets/animations/banner.json')
  bannerPlayer.autoplay = true
  bannerPlayer.loop = true
  bannerPlayer.controls = false
})

const missionStatementPlayer = document.getElementById('mission-statement-animation')! as LottiePlayer
missionStatementPlayer.addEventListener('rendered', () => {
  missionStatementPlayer.load('/assets/animations/mission_statement.json')
  missionStatementPlayer.autoplay = true
  missionStatementPlayer.loop = true
  missionStatementPlayer.controls = false
})

const howItWorksPlayer = document.getElementById('how-it-works-animation')! as LottiePlayer
howItWorksPlayer.addEventListener('rendered', () => {
  howItWorksPlayer.load('/assets/animations/how_it_works.json')
  howItWorksPlayer.autoplay = true
  howItWorksPlayer.loop = true
  howItWorksPlayer.controls = false
})

document.onclick = check

function check (e: { target: any }) {
  var target = (e && e.target) || (event && event.srcElement)

  //Nav Menu
  if (!checkParent(target, document.getElementById('nav-content'))) {
    // click NOT on the menu
    if (checkParent(target, document.getElementById('nav-toggle'))) {
      // click on the link
      if (document.getElementById('nav-content')!.classList.contains('hidden')) {
        document.getElementById('nav-content')!.classList.remove('hidden')
      } else {
        document.getElementById('nav-content')!.classList.add('hidden')
      }
    } else {
      // click both outside link and outside menu, hide menu
      document.getElementById('nav-content')!.classList.add('hidden')
    }
  }
}

function checkParent (t: { parentNode: any }, elm: HTMLElement | null) {
  while (t.parentNode) {
    if (t == elm) {
      return true
    }
    t = t.parentNode
  }
  return false
}

const subscribeModal: HTMLElement = document.getElementById('subscribe-modal')! as HTMLElement
const modalOptions: ModalOptions = {
  placement: 'center',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
}
const subscribeModalInstance: ModalInterface = new Modal(subscribeModal, modalOptions)
window.showSubscribeModal = () => {
  subscribeModalInstance.show()
}
window.closeSubscribeModal = () => {
  subscribeModalInstance.hide()
}

/******* UI INTERACTION - stop *******/
