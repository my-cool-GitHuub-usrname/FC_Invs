import { getImage } from './util.mjs'
import { CanvasEventManager } from './lib/CanvasManager.mjs'
import * as InventoryWindows from './lib/inventories.mjs'

window.canvas = document.getElementById('demo')
const canvasManager = new CanvasEventManager(window.canvas)
canvasManager.setScale(3)

const testItems = [
  'icons/minecraft_bricks',
  'icons/minecraft_brain_coral',
  'icons/minecraft_redstone',
  'icons/minecraft_powered_rail',
  'icons/minecraft_bookshelf',
  'icons/minecraft_apple',
  'icons/minecraft_compass'
]

const getImageIcon = (item) => {
  let path
  if (typeof item.type === "number") {
    path = testItems[item.type] // for demo code that used indexes to get a string from an array
  } else {
    path = item.type // for me cause im using strings directly
  }
  return { path, tip: item.displayName }

  //return { path: testItems[item.type], tip: 'item name here' }
}

window.inventory = new InventoryWindows.PlayerWin(canvasManager, {
  getImage, getImageIcon
})

setTimeout(() => {
  canvasManager.startRendering()
  console.log('Rendering!')
}, 440)

function randomBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function renderTesting () {
  const windowMap = window.inventory.getWindowMap()

  for (const key in windowMap) {
    const size = windowMap[key][1] ? Math.abs(windowMap[key][1] - windowMap[key][0]) + 1 : 1
    const getRandomItem = () => new window.Item(randomBetween(0, testItems.length - 1), randomBetween(1, 64))
    const arr = new Array(size).fill(0).map(getRandomItem)
    window.inventory[key] = arr
  }

  window.inventory.needsUpdate = true
}

function clearWindow () {
  const windowMap = window.inventory.getWindowMap()

  for (const key in windowMap) {
    window.inventory[key] = []
  }
}

window.toggleTesting = () => {
  globalThis.TESTING = !globalThis.TESTING
  if (globalThis.TESTING) {
    renderTesting()
  } else {
    clearWindow()
  }
}

window.toggleAnimations = () => {
  globalThis.debuggingInventory = !globalThis.debuggingInventory
  window.updateWin()
}

window.setScale = (scale) => {
  canvasManager.setScale(scale)
}

window.updateWin = () => {
  canvasManager.reset()
  const selWindow = document.getElementById('active-win').value
  window.inventory = new InventoryWindows[selWindow](canvasManager, { getImage, getImageIcon })
  canvasManager.slideInUp(window.inventory)
  window.inventory.needsUpdate = true

  if (globalThis.TESTING) {
    renderTesting()
  }
}
