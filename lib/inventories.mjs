import { InventoryWindow } from './InventoryWindow.mjs'

function demo (func, interval) {
  if (globalThis.debuggingInventory) {
    return setInterval(func, interval)
  }
}

export class FlagClash1 extends InventoryWindow {
  layoutId = 'LargeChest'

  chestItems = []
  inventoryItems = [
    new Item(0, 64),
    new Item(6, 3),
    new Item("icons/minecraft_bow", 1, "tooltips/bow")
  ]
  hotbarItems = []

  //win.on('itemEvent', (id, type, pos, data) => {
  //  console.log('itemEvent', id, type, pos, data)
  //}

  getWindowMap () {
    return {
      chestItems: [0, 53],
      inventoryItems: [54, 80],
      hotbarItems: [81, 89]
    }
  }  
}

export class Weekly1 extends InventoryWindow {
  layoutId = 'LargeChest'

  chestItems = [
    new Item("icons/minecraft_book", 1, "tooltips/fc/quests"),
    undefined,
    new Item("icons/minecraft_black_stained_glass_pane", 1, "tooltips/fc/black_stained_glass_pane"),
    new Item("icons/fc/sunset_flag", 1, "tooltips/fc/sunset_flag"),
    new Item("icons/fc/pearls", 1, "tooltips/fc/pearls_claimed"),
    new Item("icons/minecraft_prismarine_bricks", 32, "tooltips/fc/prismarine_claimed"),
    new Item("icons/minecraft_rib_armor_trim_smithing_template", 1, "tooltips/fc/incantation_flag_effect"),
    new Item("icons/minecraft_map", 1, "tooltips/fc/smile_emoji"),
    new Item("icons/fc/purified_hyperium", 1, "tooltips/fc/purified_hyperium_claimed"),

    undefined,
    new Item("icons/minecraft_field_masoned_banner_pattern", 1, "tooltips/fc/constant_scroll"),
    new Item("icons/minecraft_black_stained_glass_pane", 1, "tooltips/fc/black_stained_glass_pane"),
    new Item("icons/fc/ench_map", 1, "tooltips/fc/flag_emoji"),
    new Item("icons/fc/ench_glass", 1, "tooltips/fc/spacehelm"),
    new Item("icons/fc/skyswirl_flag", 1, "tooltips/fc/skyswirl_flag"),
    new Item("icons/fc/ender_myst", 16, "tooltips/fc/ender_myst"),
    new Item("icons/fc/ench_brown_bundle", 1, "tooltips/fc/french_word_pack"),
    new Item("icons/fc/pearls", 1, "tooltips/fc/pearls_claimed"),

    undefined,
    new Item("icons/fc/scroll_of_ages_1", 1, "tooltips/fc/week1scroll"),
    new Item("icons/minecraft_black_stained_glass_pane", 1, "tooltips/fc/black_stained_glass_pane"),
    new Item("icons/fc/pearls", 1, "tooltips/fc/pearls_unclaimed"),
    new Item("icons/minecraft_brown_bundle", 1, "tooltips/fc/creature_word_pack"),
    new Item("icons/fc/pearls", 1, "tooltips/fc/pearls_unclaimed"),
    new Item("icons/minecraft_map", 1, "tooltips/fc/horse_emoji"),
    new Item("icons/minecraft_heavy_core", 20, "tooltips/fc/heavy_core"),
    new Item("icons/fc/ench_fern", 1, "tooltips/fc/fern_hat"),

    undefined,
    undefined,
    new Item("icons/minecraft_black_stained_glass_pane", 1, "tooltips/fc/black_stained_glass_pane"),
    new Item("icons/minecraft_raiser_armor_trim_smithing_template", 1, "tooltips/fc/rainbow_flag_effect"),
    new Item("icons/minecraft_map", 1, "tooltips/fc/triangle_emoji"),
    new Item("icons/minecraft_trial_key", 1, "tooltips/fc/twisted_key"),
    new Item("icons/fc/violet_light_flag", 1, "tooltips/fc/violet_light_flag"),
    new Item("icons/minecraft_prismarine_bricks", 64, "tooltips/fc/prismarine_unclaimed"),
    new Item("icons/minecraft_wild_armor_trim_smithing_template", 1, "tooltips/fc/raincloud_flag_effect"),

    undefined,
    undefined,
    new Item("icons/minecraft_black_stained_glass_pane", 1, "tooltips/fc/black_stained_glass_pane"),
    new Item("icons/fc/pearls", 1, "tooltips/fc/pearls_unclaimed"),
    new Item("icons/minecraft_prismarine_bricks", 64, "tooltips/fc/prismarine_unclaimed"),
    new Item("icons/fc/pearls", 1, "tooltips/fc/pearls_unclaimed"),
    new Item("icons/minecraft_brown_bundle", 1, "tooltips/fc/slurs_word_pack"),
    new Item("icons/fc/tardis_flag", 1, "tooltips/fc/tardis_flag"),
    new Item("icons/minecraft_map", 1, "tooltips/fc/potion_emoji"),

    undefined,
    undefined,
    new Item("icons/minecraft_black_stained_glass_pane", 1, "tooltips/fc/black_stained_glass_pane"),
    new Item("icons/fc/frost_flag", 1, "tooltips/fc/frost_flag"),
    new Item("icons/fc/purified_hyperium", 1, "tooltips/fc/purified_hyperium_unclaimed"),
    new Item("icons/minecraft_map", 1, "tooltips/fc/lock_emoji"),
    new Item("icons/minecraft_ward_armor_trim_smithing_template", 1, "tooltips/fc/ripple_flag_effect"),
    new Item("icons/minecraft_spyglass", 1, "tooltips/fc/spyglass"),
    new Item("icons/minecraft_quartz", 1, "tooltips/fc/awakening_crystal"),
  ]
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      chestItems: [0, 53],
      inventoryItems: [54, 80],
      hotbarItems: [81, 89]
    }
  }  
}

export class CreativeWin extends InventoryWindow { //i commented out line 279 of InventoryWindow.mjs to fix a bug, hopefuly doesnt break things
  layoutId = 'Creative'

  searchText = 'Click here to search'

  activeTab = 5

  hotbarItems = []
  bodyItems = []
  inventoryItems = []

  shieldItem = []
  headItem = []
  chestItem = []
  legItem = []
  feetItem = []

  onClickEvent = (id, type, pos, data) => {
    if (id.startsWith('tab')) {
      this.emit('tabChange', id, this.activeTab)
      this.activeTab = this.tabs.indexOf(id)
      this.needsUpdate = true
    } else {
      super.onClickEvent()
    }
  }

  getWindowMap (version) {
    if (version === 'bedrock') {
      return {
        headItem: { containerID: 'armor', range: [0] },
        chestItem: { containerID: 'armor', range: [1] },
        legItem: { containerID: 'armor', range: [2] },
        feetItem: { containerID: 'armor', range: [3] },
        hotbarItems: { containerID: 'hotbar_and_inventory', range: [0, 9] },
        inventoryItems: { containerID: 'hotbar_and_inventory', range: [9, 9 + (9 * 3)] },
        shieldItem: { containerID: 'offhand', range: [0] }
      }
    }
  }
}

export class BrewingWin extends InventoryWindow {
  layoutId = 'BrewingStand'

  blazePowderItem = []
  ingredientItem = []
  bottleItemA = []
  bottleItemB = []
  bottleItemC = []

  inventoryItems = []
  hotbarItems = []

  brewingTicks = 20 * 20
  fuelRemaining = 20

  constructor (...args) {
    super(...args)

    demo(() => {
      this.brewingTicks--
      this.fuelRemaining--
      if (this.fuelRemaining < 0) this.fuelRemaining = 20
      this.needsUpdate = true
    }, 50)
  }

  getWindowMap (version) {
    if (version === 'bedrock') {
      return {
        bottleItemA: { containerID: 'brewing_result', range: [1] },
        bottleItemB: { containerID: 'brewing_result', range: [2] },
        bottleItemC: { containerID: 'brewing_result', range: [3] },
        ingredientItem: { containerID: 'brewing_input', range: [0] },
        blazePowderItem: { containerID: 'brewing_fuel', range: [4] }
      }
    } else {
      return {
        bottleItemA: [0],
        bottleItemB: [1],
        bottleItemC: [2],
        ingredientItem: [3],
        blazePowderItem: [4],
        inventoryItems: [5, 31],
        hotbarItems: [32, 40]
      }
    }
  }
}

export class AnvilWin extends InventoryWindow {
  layoutId = 'Anvil'

  inputItemsA = []
  inputItemsB = []
  outputItems = []
  inventoryItems = []
  hotbarItems = []

  renameText = 'Hello world!'

  getWindowMap (version) {
    return {
      inputItemsA: [0],
      inputItemsB: [1],
      outputItems: [2],
      inventoryItems: [3, 29],
      hotbarItems: [30, 38]
    }
  }
}

export class EnchantingWin extends InventoryWindow {
  layoutId = 'EnchantingTable'

  animFrame = 0

  enchantItem = []
  lapisItem = []

  enchant1 = []
  enchant2 = null
  enchant3 = []

  inventoryItems = []
  hotbarItems = []

  constructor (...args) {
    super(...args)

    let reversing = false

    demo(() => {
      if (reversing) {
        this.animFrame -= 2
      } else {
        this.animFrame += 2
      }
      if (this.animFrame < 0) {
        reversing = false
        this.animFrame = 0
      } else if (this.animFrame > 330) {
        reversing = true
      }
      this.needsUpdate = true
    }, 40)
  }

  isActive (id) {
    return super.isActive(id) && this[id]
  }

  getWindowMap (version) {
    return {
      enchantItem: [0],
      lapisItem: [1],
      inventoryItems: [2, 28],
      hotbarItems: [29, 37]
    }
  }
}

export class PlayerWin extends InventoryWindow {
  layoutId = 'PlayerInventory'

  craftingItems = [new Item("icons/minecraft_oak_log",1)]
  resultItems = [new Item("icons/minecraft_oak_planks", 4)]
  shieldItems = []
  armorItems = []
  inventoryItems = []
  hotbarItems = []

  items = [this.shieldItems, this.craftingItems, this.resultItems, this.armorItems, this.inventoryItems, this.hotbarItems]

  getWindowMap (version) {
    return {
      craftingItems: [1, 4],
      resultItems: [0],
      shieldItems: [45],
      armorItems: [5, 8],
      inventoryItems: [9, 35],
      hotbarItems: [36, 44]
    }
  }
}

export class DropDispenseWin extends InventoryWindow {
  layoutId = 'DropDispense'

  dispenseItems = []
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      dispenseItems: [0, 8],
      inventoryItems: [9, 35],
      hotbarItems: [36, 44]
    }
  }
}

export class CraftingWin extends InventoryWindow {
  layoutId = 'CraftingTable'

  craftingItems = []
  resultItem = []
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      craftingItems: [1, 9],
      resultItem: [0],
      inventoryItems: [10, 36],
      hotbarItems: [37, 45]
    }
  }
}

export class ChestWin extends InventoryWindow {
  layoutId = 'Chest'

  chestItems = []
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      chestItems: [0, 26],
      inventoryItems: [27, 53],
      hotbarItems: [51, 64]
    }
  }
}

export class LargeChestWin extends InventoryWindow {
  layoutId = 'LargeChest'

  chestItems = []
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      chestItems: [0, 53],
      inventoryItems: [54, 80],
      hotbarItems: [81, 89]
    }
  }
}

export class FurnaceWin extends InventoryWindow {
  layoutId = 'Furnace'

  inputSlot = []
  fuelSlot = []
  outputSlot = []
  inventoryItems = []
  hotbarItems = []

  litProgress = -1// 16
  burnProgress = -1// 22

  constructor (...a) {
    super(...a)

    demo(() => {
      this.litProgress++
      this.burnProgress++
      if (this.litProgress > 16) this.litProgress = 0
      if (this.burnProgress > 22) this.burnProgress = 0
      this.needsUpdate = true
    }, 40)
  }

  getWindowMap () {
    return {
      inputSlot: [0],
      fuelSlot: [1],
      outputSlot: [2],
      inventoryItems: [3, 29],
      hotbarItems: [30, 38]
    }
  }
}

// TODO: deal with this mess
export class HorseWin extends InventoryWindow {
  layoutId = 'Horse'

  hasChest = true
  chestItems = []
  inventoryItems = []
  hotbarItems = []

  /** @type {'horse' | 'donkey', 'llama'} */
  type = 'horse'

  getWindowMap () {
    if (this.type === 'horse') {
      return {
        // TODO: ???
      }
    }
  }
}

export class VillagerWin extends InventoryWindow {
  layoutId = 'Villager'

  trades = [
    // if a
    { input1: { type: 0, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 0, count: 1 }, output: { type: 0, count: 1 } },
    { input1: { type: 1, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 1, count: 1 }, output: { type: 1, count: 1 } },
    { input1: { type: 2, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 2, count: 1 }, output: { type: 2, count: 1 } },
    { input1: { type: 3, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 3, count: 1 }, output: { type: 3, count: 1 } },
    { input1: { type: 4, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 4, count: 1 }, output: { type: 4, count: 1 } },
    { input1: { type: 5, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 5, count: 1 }, output: { type: 5, count: 1 } },
    { input1: { type: 6, count: 1 }, inputSalePrice: 64, inputOriginalPrice: 0, input2: { type: 6, count: 1 }, output: { type: 6, count: 1 } }
  ]

  input1Items = []
  input2Items = []
  outputItems = []

  inventoryItems = []
  hotbarItems = []

  getWindowMap (version) {
    return {
      input1Items: [0],
      input2Items: [1],
      inventoryItems: [3, 29],
      hotbarItems: [30, 38]
    }
  }
}

export class HotbarWin extends InventoryWindow {
  layoutId = 'Hotbar'

  xpLevel = 1
  xpProgress = 50

  bubbles = 10
  armorPoints = 20
  healthPoints = 20
  hungerPoints = 20
  activeHotbarSlot = 1
  hotbarItems = []

  constructor (...a) {
    super(...a)

    demo(() => {
      this.xpLevel++
      this.xpProgress++
      this.healthPoints--
      this.hungerPoints--
      this.armorPoints--
      this.bubbles--
      this.activeHotbarSlot++
      if (this.activeHotbarSlot > 8) this.activeHotbarSlot = 0
      if (this.xpLevel > 100) this.xpLevel = 0
      if (this.xpProgress > 100) this.xpProgress = 0
      if (this.armorPoints < 0) this.armorPoints = 20
      if (this.healthPoints < 0) this.healthPoints = 20
      if (this.hungerPoints < 0) this.hungerPoints = 20
      if (this.bubbles < 0) this.bubbles = 10
      this.needsUpdate = true
    }, 100)
  }

  getWindowMap () {
    return {
      hotbarItems: [32, 40]
    }
  }
}
