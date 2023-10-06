const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  // Test for normal items
  it("should decrease quality and sellIn for normal items", function () {
    const gildedRose = new Shop([new Item("Normal Item", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  // Test for Aged Brie
  it("should increase the quality of 'Aged Brie'", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  // Test for Sulfuras
  it("should not decrease quality or sellIn of 'Sulfuras'", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 10, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(80);
  });

  // Test for Backstage passes
  it("should increase the quality of 'Backstage passes' as its SellIn value approaches", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  // Test for Conjured items
  it("should decrease quality of 'Conjured' items twice as fast as normal items", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
});
