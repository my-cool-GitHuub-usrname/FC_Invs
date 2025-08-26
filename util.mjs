import { layouts } from './lib/layouts.mjs'

globalThis.layouts = layouts

let IMAGE_ROOT = './textures/'

function patchPath (path) {
  if (IMAGE_ROOT.includes('.com')) { path = path.replace('block/', 'blocks/'); path = path.replace('item/', 'items/') }
  if (path.includes('enchant_table_anim'))path = './textures/gui/enchant_table_anims2'
  return path
}

window.loadedImageBlobs = {}

const images = [
  'icons/minecraft_brick',
  'icons/minecraft_brain_coral',
  'icons/minecraft_redstone',
  'icons/minecraft_powered_rail',
  'icons/minecraft_bookshelf',
  'icons/minecraft_compass',
  'icons/minecraft_lava_bucket',
  'icons/minecraft_apple',
  'icons/minecraft_iron_axe',
  'icons/minecraft_golden_sword',
  'icons/minecraft_glass_bottle',
  'icons/minecraft_chest_minecart'
]

for (const win in layouts) {
  const val = layouts[win]
  for (const key in val.with) {
    const path = val.with[key].path
    if (path && !images.includes(path)) {
      images.push(path)
    }
  }
}

function loadAllImagesWeb () {
  for (const path of images) {
    const img = new Image() // Create new img element
    img.src = patchPath(IMAGE_ROOT + path) + '.png' // Set source path
    img.onload = function () {
      window.loadedImageBlobs[path] = this
    }
  }
}

function loadRuntimeImage (atPath) {
  const img = new Image() // Create new img element
  // if (IMAGE_ROOT.includes('.com')) {atPath = atPath.replace('block/', 'blocks/');atPath=atPath.replace('item/', 'items/')}
  img.src = patchPath(IMAGE_ROOT + atPath) + '.png' // Set source path
  img.style.imageRendering = 'pixelated'
  // img.onload = function () {
  //   loadedImageBlobs[path] = this
  // }
  window.loadedImageBlobs[atPath] = img
}

export function getImage (options) {
  let path = patchPath(options.path)

  if (!path && options.with.startsWith('item.')) { // Temp to load image icons
    path = options.with.replace('.', '/')
    loadRuntimeImage(path)
  }

  if (!window.loadedImageBlobs[path]) {
    loadRuntimeImage(path)
  }

  return window.loadedImageBlobs[path]
}

loadAllImagesWeb()
