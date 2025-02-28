const appData = {
  websiteTitle: 'BonDeBonBon',
  categories: [
    { title: 'Brands', value: 'brand', subs: [] }, //when subs is empty, will get categories dynamically
    { title: 'Geners', value: 'genere', subs: [] },
    {
      title: 'Discounts',
      value: 'discount',
      subTextPattern: 'val% discount',
      subs: [],
    },
    {
      title: 'Prices',
      value: 'price',
      subTextPattern: '$val1 to $val2',
      range: {
        lowestRangeValue: 5,
        rangeBreakPoints: [25, 50, 100],
      },
      subs: [], //well get it dynamically base on range data
    },
    {
      title: 'About',
      value: 'info',
      subs: [
        { title: 'Our product', value: 'ourprod' }, //static sub categories as mention bellow
        { title: 'History', value: 'his' },
        { title: 'Team', value: 'team' },
      ],
    },
  ],
  info: [
    {
      title: 'Fine As a Diamond',
      value: 'ourprod',
      pageImg:
        'https://images.everydayhealth.com/images/delicious-reasons-to-eat-dark-chocolate-00-722x406.jpg?w=768',

      content:
        "Founded in 1995 by a deeply committed Cast of Characters with broad-based business and organizational development experience, our people are dedicated to greatness each and every event! Team Higher Ground offers some of the world's most sought-after Group Leaders and Facilitators. We understand the interaction of our people with yours is a critical enabler of your satisfaction and therefore ensure all our people meet your high expectations of skill and professionalism! Here's a few words on some of the dedicated Team Building Professionals you'll work with at Team Higher Ground",
    },
    {
      title: 'Once Upon a time..',
      value: 'his',
      pageImg:
        'https://mozartcultures.com/en/wp-content/uploads/2021/02/como-se-consume-el-chocolate_interior02.jpg',

      content:
        "The Good family has been making candy since the 1940's. Randy's grandmother began in Kennard, Indiana in the early 1960's. Randy took over his family's candy shop in 1992. In 2003 he built a brand new facility, making Good's the newest and largest candy shop in central Indiana.",
    },
    {
      title: 'this is our famliy',
      value: 'team',
      pageImg:
        'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F617609de-1dce-4eb1-b610-4e2242fc95ff.jpg?fit=scale-down&source=next&width=700',
      content:
        "Team Higher Grounds Chocolate Factory is one of our most popular team building events (especially popular in the evening as a combined Team Building with Bonus dessert), leveraging our universal of love of this age-old confectionary. Employing chocolate as our core building material, teams compete in Culinary-based Team Challenges to earn everything they need from the Candy Store to create a truly extraordinary array of chocolate sculptures. Chocolate Factory really reveals your people's creativity and inventiveness as teams design, construct, and present their original sweet treats for fun and prizes. Chocolate Factory is deliverable anywhere, anytime, but is an especially great choice for later evening events. It's an addictive team building event you'll develop a sweet tooth for and always remember",
    },
  ],
  products: [
    [
      {
        name: 'Alfahor',
        imgs: {
          main:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Alfajor_H.jpg/1920px-Alfajor_H.jpg',
          extra: [
            'https://cdn.shopify.com/s/files/1/0514/7531/6896/collections/Alfajores_con_Brillo_1024x1024.png?v=1606035461',
            'https://landingpadba.com/wp-content/uploads/2016/10/alfajor-1-min-620x536.jpg',
            'https://img.theculturetrip.com/wp-content/uploads/2017/05/alfajor.jpg',
          ],
        },

        price: 10.99,
        description: 'Best alfahor in won the world winner championship',
        brand: 'havana',
        genere: 'Latin',
        discounts: 10,
      },
      {
        name: 'Bonbon',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          extra: [
            'https://cdn.shopify.com/s/files/1/0043/5086/9550/products/MeltdownArtisan_BonBon_25Pack_3cad18c6-f926-49e7-a7ba-f1b0c319430b_1024x1024@2x.jpg?v=1580728130',
            'https://cdn.cupcakeproject.com/wp-content/uploads/2018/01/Bonbons-05.jpg',
            'https://cdn11.bigcommerce.com/s-cz9zi6z6xn/images/stencil/1280x1280/products/199/404/giftsetbonmac__26718.1591047270.png?c=1',
          ],
        },
        price: 9.99,
        description: 'High quality bonbon chocolate',
        brand: 'nadge',
        genere: 'Latin',
        discounts: false,
      },
      {
        name: 'Macron',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2013/11/12_Pink_Macaron_Travel.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/superhero-1.png',
          ],
        },
        price: 13.99,
        description: 'Macron holiday chocolate pack',
        brand: 'coco',
        genere: 'Latin',
        discounts: false,
      },
      {
        name: 'Super hero',
        imgs: {
          main:
            'https://i.pinimg.com/originals/9b/3f/56/9b3f56b39a7161094eacdb2777f83b92.jpg',
          extra: [
            'http://www.gaggifts.com/assets/images/SUPICE_6.jpg',
            'https://i.etsystatic.com/6552851/r/il/f0638f/1317004994/il_570xN.1317004994_zzh5.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/14/f3/b8/16/batman-chocolate-fudge.jpg',
          ],
        },
        price: 23.99,
        description: 'superHeros shaped  chocolate',
        brand: 'milka',
        genere: 'Shaped',
        discounts: 15,
      },
      {
        name: 'Strawberry Cake',
        imgs: {
          main:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/strawberry-cake-jpg-1522267153.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 17.99,
        description: 'High quality strawberry cake',
        brand: 'milka',
        genere: 'cakes',
        discounts: false,
      },
      {
        name: 'Funcky Egg',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2020/03/funky-egg-milk.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 97.99,
        description: 'Funky egg for the holiday',
        brand: 'nadge',
        genere: 'Eggs',
        discounts: 50,
      },
      {
        name: 'Mini Egges',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/mini-decor-eggs-2.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 44.99,
        description: 'Mini Egges for the holiday',
        brand: 'havana',
        genere: 'Shaped',
        discounts: 10,
      },
      {
        name: 'Rabbit Egg',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/92523180_105939217647158_3209483604089263577_n-copy.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 77.99,
        description: 'Huge rabbit egg for the holiday',
        brand: 'coco',
        genere: 'Eggs',
        discounts: 20,
      },
      {
        name: 'Unicorn Egg',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/LARGE-UNICORN-EGG.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 45.99,
        description: 'Huge egg unicorn shpe for the holiday',
        brand: 'milka',
        genere: 'Eggs',
        discounts: false,
      },
      {
        name: 'Chocolate tablet',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2013/06/BAR_Q_PRODUCT.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 11.99,
        description: 'Tasty classic tablet',
        brand: 'havana',
        genere: 'tablet',
        discounts: 20,
      },
      {
        name: 'Mini Chocolate Cake',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2020/04/mini-choc-site.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 12.99,
        description: 'Home made coco cake',
        brand: 'coco',
        genere: 'cakes',
        discounts: 10,
      },
      {
        name: 'Postcards',
        imgs: {
          main:
            'https://www.nadege-patisserie.com/wp-content/uploads/2020/03/Postcards.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 9.99,
        description: 'Post cards for the holiday pack of 5!',
        brand: 'milka',
        genere: 'postcards',
        discounts: false,
      },
      {
        name: 'Luxury mix',
        imgs: {
          main: 'https://ikachocolate.com/wp-content/uploads/2014/02/56.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 189.99,
        description: 'mix of 25 mini chocolate!',
        brand: 'nadge',
        genere: 'combinations',
        discounts: 15,
      },
      {
        name: 'Famliy pack',
        imgs: {
          main:
            'https://ikachocolate.com/wp-content/uploads/2020/08/10__0002_P1246015.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 189.99,
        description: 'best chocolates of coco!',
        brand: 'coco',
        genere: 'combinations',
        discounts: false,
      },
      {
        name: 'Lovers gift',
        imgs: {
          main:
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 189.99,
        description: 'milkas lovers day pack!',
        brand: 'milka',
        genere: 'combinations',
        discounts: false,
      },
      {
        name: 'Dream pack',
        imgs: {
          main:
            'https://ikachocolate.com/wp-content/uploads/2020/08/P1256814a-1-1024x1024.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 289.99,
        description: 'havana spiceal pack!',
        brand: 'havana',
        genere: 'combinations',
        discounts: false,
      },
    ],
    [
      {
        productDemoData:
          'Chocolate is a preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, which may also be used as a flavoring ingredient in other foods. The earliest signs of use are associated with Olmec sites (within what would become Mexico’s post-colonial territory) suggesting consumption of chocolate beverages, dating from the 19th century BC.[1][2] The majority of Mesoamerican people made chocolate beverages, including the Maya and Aztecs.[3] The English word "chocolate" comes, via Spanish, from the Classical Nahuatl word xocolātl.[4]',
      },
    ],
  ],
};
