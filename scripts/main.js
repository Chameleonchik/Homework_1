var memory = prompt('Купить iPhone7 \nСколько памяти? ' , '')
var color = prompt('Какой цвет?', '')
var a = 0
var img = document.getElementById("myImg");
var price = document.getElementById("myPrice");

do {

  switch (memory) {
    case '32':
      switch (color) {
        case 'Red':
        case 'red':
        case 'Красный':
        case 'красный':
        case 'Червоний':
        case 'червоний':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + ' \nЦена: 21999 грн');
          img.src = 'img/red.jpg';
          price.innerHTML = " <h1>iPhone7 32Gb  Red</h1><br> Цена:    21999грн ";
          a++
          break;

        case 'Black':
        case 'black':
        case 'Черный':
        case 'черный':
        case 'Чорний':
        case 'чорний':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + ' \nЦена: 20999 грн');
          img.src = 'img/black.jpg';
          price.innerHTML = " <h1>iPhone7 32Gb  Black</h1><br> Цена:    20999грн ";
          a++
          break;

        case 'Gold':
        case 'gold':
        case 'Золотой':
        case 'Золотий':
        case 'золотий':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + ' \nЦена: 20999 грн');
          img.src = 'img/gold.jpg';
          price.innerHTML = " <h1>iPhone7 32Gb Gold</h1><br> Цена:    20999грн ";
          a++
          break;

        default:
        memory = prompt('Сколько памяти? \n(example: 32, 128, 256)' , '')
        color = prompt('Какой цвет? \n(example: Red, Gold, Black)', '')
      }
      break;

    case '128':
      switch (color) {
        case 'Red':
        case 'red':
        case 'Красный':
        case 'красный':
        case 'Червоний':
        case 'червоний':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + ' \nЦена: 24999 грн');
          img.src = 'img/red.jpg';
          price.innerHTML = " <h1>iPhone7 128Gb  Red</h1><br> Цена:    24999грн ";
          a++
          break;

        case 'Black':
        case 'black':
        case 'Черный':
        case 'черный':
        case 'Чорний':
        case 'чорний':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + ' \nЦена: 23999 грн');
          img.src = 'img/black.jpg';
          price.innerHTML = " <h1>iPhone7 128Gb  Black</h1><br> Цена:    23999грн ";
          a++
          break;

        case 'Gold':
        case 'gold':
        case 'Золотой':
        case 'золотой':
        case 'Золотий':
        case 'золотий':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + ' \nЦена: 23999 грн');
          img.src = 'img/gold.jpg';
          price.innerHTML = " <h1>iPhone7 128Gb Gold</h1><br> Цена:    23999грн ";
          a++
          break;

        default:
        memory = prompt('Сколько памяти? \n(example: 32, 128, 256)' , '')
        color = prompt('Какой цвет? \n(example: Red, Gold, Black)', '')
    }
      break;
    case '256':
      switch (color) {
        case 'Red':
        case 'red':
        case 'Красный':
        case 'красный':
        case 'Червоний':
        case 'червоний':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + '\nЦена: 27999 грн');
          img.src = 'img/red.jpg';
          price.innerHTML = " <h1>iPhone7 256Gb Red</h1><br>  Цена:    27999грн ";
          a++
          break;

        case 'Black':
        case 'black':
        case 'Черный':
        case 'черный':
        case 'Чорний':
        case 'чорний':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + '\nЦена: 26999 грн');
          img.src = 'img/black.jpg';
          price.innerHTML = " <h1>iPhone7 256Gb Black</h1><br> Цена:    26999грн ";
          a++
          break;

        case 'Gold':
        case 'gold':
        case 'Золотой':
        case 'золотой':
        case 'Золотий':
        case 'золотий':
          alert( 'iPhone7 '+ memory + 'Gb ' + color + '\nЦена: 26999 грн');
          img.src = 'img/gold.jpg';
          price.innerHTML = " <h1>iPhone7 256Gb Gold</h1><br> Цена:    26999грн ";
          a++
          break;
          
        default:
        memory = prompt('Сколько памяти? \n(example: 32, 128, 256)' , '')
        color = prompt('Какой цвет? \n(example: Red, Gold, Black)', '')
      }
      break;
    default:
    memory = prompt('Сколько памяти? \n(example: 32, 128, 256)' , '')
    color = prompt('Какой цвет? \n(example: Red, Gold, Black)', '')
  }

} while (a != 1);


















// !!!!!!!!!!!!!!!!!!!!!
