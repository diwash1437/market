const lunch = [
{
  japaneseName: 'ご飯',
  EnglishName :  'Rice',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: '味噌',
  EnglishName :  'Miso',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: '本だし (HONDASHI)',
  EnglishName :  'Dashi stock',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: 'もやし玉ねぎセット',
  EnglishName :  'Bean sprout and onion set',
  imageName: '/image/beansprout.png',
  anotherImageName: '/image/onlion.png'

},
{
  japaneseName: 'ニラ',
  EnglishName :  'Garlic chives',
  imageName: '/image/greenleaf.png'

},
{
  japaneseName: 'まぶしソース(Mabushi sousu)',
  EnglishName :  'Tossing sauce',
  imageName: '/image/mabushiegg.png'

},
{
  japaneseName: 'まぶし卵',
  EnglishName :  'Tossed egg',
  imageName: '/image/mabushiegg.png'

},
{
  japaneseName: 'まぶし肉 (Mabushi Meat)',
  EnglishName :  'Tossed meat',
  imageName: '/image/mabushiegg.png'

},
{
  japaneseName: 'カットねぎ',
  EnglishName :  'Chopped green onions',
  imageName: '/image/Choppedgreenonions.png'

},
{
  japaneseName: 'わさび',
  EnglishName :  'Wasabi',
  imageName: '/image/wasabi.png'

},
{
  japaneseName: '赤キャベツと人参混ぜる',
  EnglishName :  'Red cabbage and carrot mix',
  imageName: '/image/saladmathihalne.png'

},
{
  japaneseName: 'ランチドレッシング',
  EnglishName :  'Lunch dressing',
  imageName: '/image/.png'

},
{
  japaneseName: 'ランチサラダ',
  EnglishName :  'Lunch salad',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: 'ハラミサラダ (tyo noraml salad)',
  EnglishName :  'Skirt steak salad',
  imageName: '/image/haramikosalad.png'

},
{
  japaneseName: '黃漬物',
  EnglishName :  'Yellow pickles',
  imageName: '/image/yellowpickels.png'

},
{
  japaneseName: '牛タン柚子胡椒',
  EnglishName :  'Beef tongue with yuzu pepper',
  imageName: '/image/.png'

},
{
  japaneseName: '牛タン18レモン',
  EnglishName :  'Beef tongue 1/8 lemon',
  imageName: '/image/1-8lemon.png'

},
{
  japaneseName: 'ステーキフライドポテト(steaky fried potatoe)',
  EnglishName :  'Steak fries',
  imageName: '/image/steakfries.png'

},
{
  japaneseName: 'ステーキバン',
  EnglishName :  'Steak pan',
  imageName: '/image/.png'

},
{
  japaneseName: 'ステーキスープ',
  EnglishName :  'Steak soup',
  imageName: '/image/.png'

},
{
  japaneseName: '土鍋ハンバーグ',
  EnglishName :  'Donabe hamburger',
  imageName: '/image/.png'

},
{
  japaneseName: '土鍋ハンバーク野菜セット',
  EnglishName :  'Donabe hamburger with vegetables',
  imageName: '/image/.png'

},
{
  japaneseName: '土鍋ハンバーグソース',
  EnglishName :  'Donabe Hamburger sauce',
  imageName: '/image/.png'

},
{
  japaneseName: 'タンシチュー',
  EnglishName :  'Beef tongue stew (sikako chaina)',
  imageName: '/image/.png'

},
{
  japaneseName: 'タンシチュー野菜セット',
  EnglishName :  'Beef tongue stew with vegetables',
  imageName: '/image/.png'

},
{
  japaneseName: '切り落とし肉',
  EnglishName :  'Trimmings',
  imageName: '/image/otosi.png',
  anotherImageName: '/image/otosi2.png'

},
{
  japaneseName: '切り落としソース(onion sauce and garlic sauce mix)',
  EnglishName :  'Trimmings sauce (fried potato ko tala)',
  imageName: '/image/.png'

},
{
  japaneseName: 'キーマカレー',
  EnglishName :  'Keema curry',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: 'ミンチカツ',
  EnglishName :  'Minced cutlet',
  imageName: '/image/Mincedcutlet.png'

},
{
  japaneseName: 'コッロケ (thulo khale)',
  EnglishName :  'Croquette (main deep fridge ma cha)',
  imageName: '/image/Croquette.png'

},
{
  japaneseName: 'ミンチカツ、コッロケソース (note ma cha)',
  EnglishName :  'Minced cutlet, croquette sauce',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: '油',
  EnglishName :  'Oil',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: 'しお',
  EnglishName :  'Salt',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: '胡椒こしょう',
  EnglishName :  'Pepper',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: '弁当マッシュポテト',
  EnglishName :  'Bento mashed potatoes',
  imageName: '/image/beansprout.png'

},
{
  japaneseName: '弁当ほうれん草コーン',
  EnglishName :  'Bento spinach and corn',
  imageName: '/image/Bentospinachandcorn.png'

},
{
  japaneseName: '弁当ピクルス',
  EnglishName :  'Bento pickles',
  imageName: '/image/bentopickle.png'

},
{
  japaneseName: 'うし人参',
  EnglishName :  'Beef and carrots',
  imageName: '/image/beansprout.png'

},

]
console.log(lunch)


let html='';
lunch.forEach((lunch)=>{
  html= html+  `    <tr>
      <td>${lunch.japaneseName}</td>
      <td>${lunch.EnglishName}</td>
      <td><img src="${lunch.imageName}" alt="Image 1"></td>
      <td><img src="${lunch.anotherImageName}" alt="Image 2"></td>
    </tr>`
})


document.querySelector('.js-lunch-check').innerHTML= html;