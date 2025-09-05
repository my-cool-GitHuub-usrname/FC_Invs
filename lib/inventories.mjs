import { InventoryWindow } from './InventoryWindow.mjs'

function demo (func, interval) {
  if (globalThis.debuggingInventory) {
    return setInterval(func, interval)
  }
}

export class Weapons extends InventoryWindow {
  layoutId = 'LargeChest'

  weaps = [
    undefined,
    new Item("icons/minecraft_stone_axe", 1, "tooltips/wp/Amethyst_Axe"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Amethyst_Sword"),
    new Item("icons/minecraft_gray_bundle", 1, "tooltips/wp/Bag_of_Knives"),
    new Item("icons/minecraft_stone_axe", 1, "tooltips/wp/Buy_Amethyst_Axe"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Buy_Amethyst_Dagger"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Buy_Amethyst_Sword"),
    new Item("icons/minecraft_gray_bundle", 1, "tooltips/wp/Buy_Bag_of_Knives"),
    new Item("icons/minecraft_green_bundle", 1, "tooltips/wp/Buy_Bag_of_Poisoned_Knives"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Buy_Charcoal_Bow"),
    new Item("icons/minecraft_crossbow", 1, "tooltips/wp/Buy_Charcoal_Crossbow"),
    new Item("icons/minecraft_wooden_sword", 1, "tooltips/wp/Buy_Charcoal_Sword"),
    new Item("icons/minecraft_stone_pickaxe", 1, "tooltips/wp/Buy_Cobble_Crusher"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Buy_Copper_Bow"),
    new Item("icons/minecraft_crossbow", 1, "tooltips/wp/Buy_Copper_Crossbow"),
    new Item("icons/minecraft_diamond_sword", 1, "tooltips/wp/Buy_Florablade"),
    new Item("icons/minecraft_wooden_axe", 1, "tooltips/wp/Buy_Forest_Axe"),
    new Item("icons/minecraft_iron_sword", 1, "tooltips/wp/Buy_Iron_Katana"),
    new Item("icons/minecraft_iron_pickaxe", 1, "tooltips/wp/Buy_Lodesteel"),
    new Item("icons/minecraft_stick", 1, "tooltips/wp/Buy_Old_Stick"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Buy_Shortbow_T3"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Buy_Shortbow_T4"),
    new Item("icons/minecraft_iron_sword", 1, "tooltips/wp/Buy_Soulsteel_Sword"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Buy_Steel_Katana"),
    new Item("icons/minecraft_stone_axe", 1, "tooltips/wp/Buy_Stone_Axe"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Buy_Stone_Dagger"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Buy_Wooden_Bow"),
    new Item("icons/minecraft_crossbow", 1, "tooltips/wp/Buy_Wooden_Crossbow"),
    new Item("icons/minecraft_wooden_sword", 1, "tooltips/wp/Buy_Wooden_Sword"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Charcoal_Bow"),
    new Item("icons/minecraft_crossbow", 1, "tooltips/wp/Charcoal_Crossbow"),
    new Item("icons/minecraft_wooden_sword", 1, "tooltips/wp/Charcoal_Sword"),
    new Item("icons/minecraft_stone_pickaxe", 1, "tooltips/wp/Cobble_Crusher"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Copper_Bow"),
    new Item("icons/minecraft_crossbow", 1, "tooltips/wp/Copper_Crossbow"),
    new Item("icons/minecraft_wooden_axe", 1, "tooltips/wp/Forest_Axe"),
    new Item("icons/minecraft_iron_sword", 1, "tooltips/wp/Iron_Katana"),
    new Item("icons/minecraft_iron_pickaxe", 1, "tooltips/wp/Lodesteel"),
    new Item("icons/minecraft_stick", 1, "tooltips/wp/Old_Stick"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Shortbow_T3"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Shortbow_T4"),
    new Item("icons/minecraft_iron_sword", 1, "tooltips/wp/Soulsteel_Sword"),
    new Item("icons/minecraft_stone_axe", 1, "tooltips/wp/Stone_Axe"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Stone_Dagger"),
    new Item("icons/minecraft_bow", 1, "tooltips/wp/Wooden_Bow"),
    new Item("icons/minecraft_crossbow", 1, "tooltips/wp/Wooden_Crossbow"),
    new Item("icons/minecraft_wooden_sword", 1, "tooltips/wp/Wooden_Sword"),
    new Item("icons/fc/orange_pane", 1, "tooltips/wp/Slot_1"),
    new Item("icons/fc/cyan_pane", 1, "tooltips/wp/Slot_2"),
    new Item("icons/fc/lime_pane", 1, "tooltips/wp/Slot_3"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Amethyst_Dagger"),
    new Item("icons/minecraft_golden_sword", 1, "tooltips/wp/Buy_Holy_Sword"),
    new Item("icons/minecraft_iron_axe", 1, "tooltips/wp/Buy_Soulsteel_Axe"),
    new Item("icons/minecraft_diamond_sword", 1, "tooltips/wp/Florablade"),
    new Item("icons/minecraft_golden_sword", 1, "tooltips/wp/Holy_Sword"),
    new Item("icons/minecraft_iron_axe", 1, "tooltips/wp/Soulsteel_Axe"),
    new Item("icons/minecraft_stone_sword", 1, "tooltips/wp/Steel_Katana"),
    new Item("icons/minecraft_green_bundle", 1, "tooltips/wp/Bag_of_Poisoned_Knives"),]
  getIndexes = {
    "tooltips/wp/Buy_Old_Stick": [28, 26, 38, 0, 0],
    "tooltips/wp/Buy_Wooden_Bow": [13, 0, 44, 19, 0],
    "tooltips/wp/Buy_Wooden_Crossbow": [14, 0, 45, 0, 0],
    "tooltips/wp/Buy_Wooden_Sword": [25, 16, 46, 11, 19],
    "tooltips/wp/Buy_Copper_Crossbow": [0, 10, 34, 0, 27],
    "tooltips/wp/Buy_Copper_Bow": [20, 0, 33, 28, 26],
    "tooltips/wp/Buy_Forest_Axe": [24, 12, 35, 28, 15],
    "tooltips/wp/Buy_Charcoal_Crossbow": [0, 11, 30, 14, 0],
    "tooltips/wp/Buy_Shortbow_T3": [21, 0, 39, 9, 13],
    "tooltips/wp/Buy_Cobble_Crusher": [0, 28, 32, 16, 18],
    "tooltips/wp/Buy_Charcoal_Sword": [9, 28, 31, 10, 0],
    "tooltips/wp/Buy_Charcoal_Bow": [7, 20, 29, 24, 0],
    "tooltips/wp/Buy_Lodesteel": [0, 0, 37, 0, 12],
    "tooltips/wp/Buy_Stone_Dagger": [7, 6, 43, 9, 28],
    "tooltips/wp/Buy_Stone_Axe": [4, 9, 42, 6, 16] ,
    "tooltips/wp/Buy_Amethyst_Sword": [22, 24, 2, 25, 0],
    "tooltips/wp/Buy_Bag_of_Knives": [5, 22, 3, 17, 25],
    "tooltips/wp/Buy_Soulsteel_Sword": [23, 4, 41, 7, 6],
    "tooltips/wp/Buy_Shortbow_T4": [0, 0, 40, 7, 20],
    "tooltips/wp/Buy_Iron_Katana": [8, 7, 36, 23, 0],
    "tooltips/wp/Buy_Amethyst_Axe": [0, 21, 1, 22, 24],
    "tooltips/wp/Buy_Amethyst_Dagger": [51, 23, 50, 8, 7],
    "tooltips/wp/Buy_Bag_of_Poisoned_Knives": [0, 5, 57, 0, 17],
    "tooltips/wp/Buy_Florablade": [0, 0, 53, 23, 21],
    "tooltips/wp/Buy_Holy_Sword": [0, 52, 54, 0, 5],
    "tooltips/wp/Buy_Soulsteel_Axe": [0, 0, 55, 51, 23],
    "tooltips/wp/Buy_Steel_Katana": [52, 15, 56, 5, 22]}

  chestItems = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
    undefined, this.weaps[19], undefined, undefined, this.weaps[26], undefined, undefined, this.weaps[27], undefined, 
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
    this.weaps[47], this.weaps[47], this.weaps[47], this.weaps[48], this.weaps[48], this.weaps[48], this.weaps[49], this.weaps[49], this.weaps[49]]
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      chestItems: [0, 53],
      inventoryItems: [54, 80],
      hotbarItems: [81, 89]
    }
  }



  onItemEvent(id, type, pos, data) {
    //console.log("id: " + id + ", type: " + type + ", pos: " + pos + ", data: " + data)
    if(data){
      const [invSection, slotIndex] = data  //data will be like {chestItems, 34}
      const inv = this[invSection] // chestItems array, for example
      const item = inv[slotIndex]

      if (type === 'click' && item && !this.floatingItem) {
        this.floatingItem = item
        inv[slotIndex] = undefined
        this._tooltipPath = ''
        this.needsUpdate = true  //picks up item

        setTimeout(() => {
          if(item.tooltipImg.includes("Buy", 12)) {
            let currentSlot = []  //finds out if it was weapon slot 1, 2, or 3

            if([10, 18, 19, 20, 28].includes(slotIndex)){ //weapon slot 1
              currentSlot = [10, 18, 19, 20, 28]
            } else if([13, 21, 22, 23, 31].includes(slotIndex)){ //weapon slot 2
              currentSlot = [13, 21, 22, 23, 31]
            } else if([16, 24, 25, 26, 34].includes(slotIndex)){ //weapon slot 3
              currentSlot = [16, 24, 25, 26, 34]
            }

            if(currentSlot.length != 0) {
              if (this.getIndexes[item.tooltipImg]) {
                inv[currentSlot[0]] = this.weaps[this.getIndexes[item.tooltipImg][0]] //lol
                inv[currentSlot[1]] = this.weaps[this.getIndexes[item.tooltipImg][1]]
                inv[currentSlot[2]] = this.weaps[this.getIndexes[item.tooltipImg][2]]
                inv[currentSlot[3]] = this.weaps[this.getIndexes[item.tooltipImg][3]]
                inv[currentSlot[4]] = this.weaps[this.getIndexes[item.tooltipImg][4]]
              } else {
                console.log("straight up, i dont have the assets for the weapon yet")
              }
            }
          } else {
            inv[slotIndex] = item
          }
          
          this.floatingItem = undefined
          this._tooltipPath = inv[slotIndex]?.tooltipImg
          this.needsUpdate = true
        }, 50)
      }
      else if(type === 'hover' && !this.floatingItem){
        this._tooltipPath = item?.tooltipImg
      }
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
    new Item("icons/minecraft_quartz", 1, "tooltips/fc/awakening_crystal")]
  inventoryItems = []
  hotbarItems = []

  getWindowMap () {
    return {
      chestItems: [0, 53],
      inventoryItems: [54, 80],
      hotbarItems: [81, 89]
    }
  }

  onItemEvent(id, type, pos, data) {
    //console.log("id: " + id + ", type: " + type + ", pos: " + pos + ", data: " + data)
    if(data){
      const [invSection, slotIndex] = data  //data will be like {chestItems, 34}
      const inv = this[invSection] // chestItems array, for example
      const item = inv[slotIndex]

      if (type === 'click' && item && !this.floatingItem) { //grab and return item, plus tooltip logic to stop tooltips from breaking
        this.floatingItem = item
        inv[slotIndex] = undefined
        this._tooltipPath = ''
        this.needsUpdate = true

        setTimeout(() => {
          inv[slotIndex] = this.floatingItem
          this.floatingItem = undefined
          this._tooltipPath = item?.tooltipImg
          this.needsUpdate = true
        }, 50)
      }
      else if(type === 'hover' && !this.floatingItem){
        this._tooltipPath = item?.tooltipImg
      }
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
