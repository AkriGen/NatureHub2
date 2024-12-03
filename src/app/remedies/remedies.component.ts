import { Component } from '@angular/core';
import { BookmarkService } from '../bookmark.service';
import { NgClass, NgFor } from '@angular/common';
@Component({
  selector: 'app-remedies',
  standalone: false,
  
  templateUrl: './remedies.component.html',
  styleUrl: './remedies.component.css'
})
export class RemediesComponent {

  title = 'firstapp';
  expandedCardIndex: number | null = null;

  cards = [
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rwRstZEVILCTerbSCLTtnAHaE8%26pid%3DApi&f=1&ipt=7580f01270571397a78ec5706688836bc25d429d7be1821f3e762f400abf79e1&ipo=images',
      title: 'Honey and Lemon',
      shortDescription: 'A remedy for sore throats and colds.',
      longDescription: 'Honey and lemon are commonly used for soothing sore throats. They provide hydration, antibacterial properties, and help reduce irritation.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yZIags--hLbMwv9yjISsTAHaEK%26pid%3DApi&f=1&ipt=4acd70b4693a46d465d05eb75f5b8fc32e5a50644c0e498d9eeac2d3da677830&ipo=images',
      title: 'Ginger Tea',
      shortDescription: 'Great for digestion and nausea relief.',
      longDescription: 'Ginger tea is excellent for digestion and provides relief from nausea, bloating, and menstrual cramps.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.wP8sO5TniPaTfX8KSNvpiAHaE8%26pid%3DApi&f=1&ipt=d8781a8933cf7b91d7bb9de7566cb5a3f05887f6318f0ae7cb6991f176cab650&ipo=images',
      title: 'Turmeric',
      shortDescription: 'Anti-inflammatory and antioxidant powerhouse.',
      longDescription: 'Turmeric contains curcumin, which has strong anti-inflammatory and antioxidant effects, helping with arthritis and boosting immunity.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lEY1WGqi5APRc3CoI-DMfQHaE7%26pid%3DApi&f=1&ipt=14fe410d01de1d6384a0b78bd9bbf2c3f1be408bd225d97623ed1928cb7a92c7&ipo=images',
      title: 'Garlic',
      shortDescription: 'A natural immune booster.',
      longDescription: 'Garlic is known for its antiviral and antibacterial properties, making it a great remedy for boosting the immune system.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Z7xyMGQbD178olj0PBKhBAHaF_%26pid%3DApi&f=1&ipt=bff988bcbba1488d338378fb5de0cab68abcf49c2b6245e1314a940012048065&ipo=images',
      title: 'Chamomile Tea',
      shortDescription: 'Helps reduce anxiety and improve sleep.',
      longDescription: 'Chamomile tea is a natural relaxant, aiding in stress relief and promoting a restful night’s sleep.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0cvixXSjkHpLxR_OFwPQyQHaGc%26pid%3DApi&f=1&ipt=360406248a9a6318cf8f4f4b1c506c53af0226c92f25a4d353f5cf9e43e5ac45&ipo=images',
      title: 'Lavender Oil',
      shortDescription: 'Soothes stress and promotes relaxation.',
      longDescription: 'Lavender oil is widely used in aromatherapy to reduce stress, improve mood, and aid in relaxation.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvaya.in%2Frecipes%2Fwp-content%2Fuploads%2F2018%2F05%2FPeppermint-Tea.jpg&f=1&nofb=1&ipt=2b36e7c058cc18f27b24be53eaa147b0602cb57d1c04871500e261bef95fd70d&ipo=images',
      title: 'Peppermint Tea',
      shortDescription: 'Aids digestion and reduces headaches.',
      longDescription: 'Peppermint tea is great for soothing digestion issues and can help relieve tension headaches with its cooling effect.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cRN1lobYluSwQDTiiDs8IgHaE7%26pid%3DApi&f=1&ipt=5b122e6e25f788384d9631761a391fce84222057601cc590ab31438300683f18&ipo=images',
      title: 'Apple Cider Vinegar',
      shortDescription: 'Supports gut health and aids weight loss.',
      longDescription: 'Apple cider vinegar is known for balancing gut bacteria, helping digestion, and assisting in weight management.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TeQD_rLOAJuEoj9wyOnGAwHaE7%26pid%3DApi&f=1&ipt=1ea557f047bb357963c5c271530292e662d81016483211ce5f299aec7ae86450&ipo=images',
      title: 'Eucalyptus Oil',
      shortDescription: 'Clears nasal congestion.',
      longDescription: 'Eucalyptus oil is commonly used for treating respiratory conditions such as colds and sinus infections.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vL50As09jk_z2XhlqhbmWwHaEj%26pid%3DApi&f=1&ipt=5d9d5bea531c5f1583bae90fb3aae747dc26dc2291bb1b83fec265355f788877&ipo=images',
      title: 'Aloe Vera',
      shortDescription: 'Soothes skin and aids digestion.',
      longDescription: 'Aloe vera gel is widely used for treating burns, moisturizing skin, and improving digestion when consumed.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KWaYlz1dXeIgwc26vQoQPwHaE6%26pid%3DApi&f=1&ipt=4e8423fe17f85202c2c86c9929ebe5081cb82e2037ca862b1a0bcc68d4777791&ipo=images',
      title: 'Green Tea',
      shortDescription: 'Rich in antioxidants, boosts metabolism.',
      longDescription: 'Green tea is packed with antioxidants and helps improve brain function, burn fat, and reduce inflammation.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nR4TkfUR8jN-6EJa9RL7cwHaE7%26pid%3DApi&f=1&ipt=26c652328c656aaf9e9a6a8b99c6dc0e76c9e8a4729a1ad6df9e017090454d21&ipo=images',
      title: 'Clove',
      shortDescription: 'Natural pain reliever.',
      longDescription: 'Clove is commonly used for toothaches and sore gums due to its analgesic and antibacterial properties.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P5PswrTJuFKAIR4pdbrVDgHaEw%26pid%3DApi&f=1&ipt=922a5f64fdc83364e457064548bcbf1fba004600b743d0704be02e86c26abbda&ipo=images',
      title: 'Holy Basil (Tulsi)',
      shortDescription: 'Reduces stress and supports immunity.',
      longDescription: 'Holy basil, also known as Tulsi, is an adaptogen that helps the body cope with stress and boosts immune function.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sRVYLmKGyB7UXWBgYVxougHaE8%26pid%3DApi&f=1&ipt=254c8632a8d7d7aaf7360026e6289fd2cc0df108bd6cefe6f9ef13181813cbd6&ipo=images',
      title: 'Fenugreek',
      shortDescription: 'Improves digestion and controls blood sugar.',
      longDescription: 'Fenugreek seeds are used for digestive issues and are known for regulating blood sugar levels in diabetics.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.IWa7_7CvOBpWpAemsroyKQHaE8%26pid%3DApi&f=1&ipt=c465ee86a0d8512064761cfceecb5f726b6ab57246fc2e5a185410485e1b08cb&ipo=images',
      title: 'Cinnamon',
      shortDescription: 'Improves heart health and digestion.',
      longDescription: 'Cinnamon is known for its anti-inflammatory properties and its ability to improve heart health and control blood sugar.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.A486wwklwyQwIWDn8az7_AHaEq%26pid%3DApi&f=1&ipt=dea15e6d041d76f512f5940d7ab5d0d999abce1a0f8585dcb328f5f484883815&ipo=images',
      title: 'Lemon Balm',
      shortDescription: 'Relieves anxiety and improves sleep.',
      longDescription: 'Lemon balm is an herb that helps reduce stress, improve mood, and aid in better sleep.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NpGV_dYZ5X1DJgwHY58eqwHaEo%26pid%3DApi&f=1&ipt=4e19712bf6e8adf1dcd439eeacdc206e8a65ea291756569ed909b172e3cbe582&ipo=images',
      title: 'Ashwagandha',
      shortDescription: 'An adaptogen for stress relief.',
      longDescription: 'Ashwagandha is a traditional herb used to reduce stress, improve focus, and boost energy levels.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.herzindagi.info%2Fimage%2F2022%2FSep%2Fblack-pepper-remedies-in-astrology.jpg&f=1&nofb=1&ipt=e934d4c260cd7cdbad2286bd02ca05c56eed67ccd8a5e29a703314f8d0307b84&ipo=images',
      title: 'Black Pepper',
      shortDescription: 'Enhances nutrient absorption.',
      longDescription: 'Black pepper is a common spice that boosts nutrient absorption and improves digestion.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h5OP3YIL8VOgXnqBhwlIawHaE8%26pid%3DApi&f=1&ipt=c92997fcc3dfbbdbd7755f637ecdae2d9dbb4ab412d2cd317ebcb9edc638c31d&ipo=images',
      title: 'Mint',
      shortDescription: 'Refreshes breath and soothes indigestion.',
      longDescription: 'Mint leaves are great for freshening breath, calming indigestion, and reducing nausea.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.f3KJcyDM-InygyTw_m4_EAHaE8%26pid%3DApi&f=1&ipt=c68c9c8809730271f361751daa492fd9fb247b000f1fa315c97d54a254fa0558&ipo=images',
      title: 'Neem',
      shortDescription: 'A natural skin purifier.',
      longDescription: 'Neem is widely used for its antibacterial properties, especially for skin conditions like acne and eczema.',
      benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod:'Mix turmeric powder in warm milk.',
      UsageInstructions:'Drink before bedtime.'
    }];
    constructor(private bookmarkService: BookmarkService) {}
    // Save card to bookmarks
  bookmarkCard(card: { image: string, title: string, shortDescription: string,longDescription: string,benefits:string,PreperationMethod:string,UsageInstructions:string }): void {
    this.bookmarkService.addBookmark(card);
    alert('Card Bookmarked!');
  }

  

  
  // Toggles the bookmark status for a card
  
  
  
  
}
