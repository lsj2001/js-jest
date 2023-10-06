class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      this.updateItem(item);
    }
    return this.items;
  }

  updateItem(item) {
    if (item.name === "Aged Brie") {
      this.updateAgedBrie(item);
    } else if (item.name === "Sulfuras, Hand of Ragnaros") {
      // Do nothing for Sulfuras
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackstagePasses(item);
    } else if (item.name.startsWith("Conjured")) {
      this.updateConjured(item);
    } else {
      this.updateNormal(item);
    }

    // Decrease sellIn for all items except "Sulfuras"
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1;
    }
  }

  updateNormal(item) {
    if (item.sellIn <= 0) {
      item.quality -= 2;
    } else {
      item.quality -= 1;
    }
    item.quality = Math.max(item.quality, 0);
  }

  updateAgedBrie(item) {
    if (item.sellIn <= 0) {
      item.quality += 2;
    } else {
      item.quality += 1;
    }
    item.quality = Math.min(item.quality, 50);
  }

  updateBackstagePasses(item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality += 1;
    }
    item.quality = Math.min(item.quality, 50);
  }

  updateConjured(item) {
    if (item.sellIn <= 0) {
      item.quality -= 4;
    } else {
      item.quality -= 2;
    }
    item.quality = Math.max(item.quality, 0);
  }
}

module.exports = {
  Item,
  Shop,
};
