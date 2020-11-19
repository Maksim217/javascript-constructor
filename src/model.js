import { TitleBlock, ImageBlock, TextBlock, TextColumnsBlock } from './classes/blocks';
import { css } from './utils';
import image from './assets/js.png';

export const model = [
  new TitleBlock('Конструктор сайтов на нативном Javascript', {
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493248)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    }),
    tag: 'h1',
  }),
  new ImageBlock(image, {
    alt: 'My image',
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    }),
    imageStyles: css({
      width: '500px',
      height: 'auto',
    }),
  }),
  new TextBlock(
    'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript (стандарт ECMA-262).',
    {
      styles: css({
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        'font-weight': 'bold',
        padding: '1rem',
      }),
    },
  ),
  new TextColumnsBlock(
    [
      'Динамическая типизация — приём используемый в языках программирования и языках спецификации, при котором переменная связывается с типом в момент присваивания значения, а не в момент объявления переменной.',
      'Прототипное программирование — стиль объектно-ориентированного программирования, при котором отсутствует понятие класса, а наследование производится путём клонирования существующего экземпляра объекта — прототипа',
      'Функции как объекты первого класса - элементы, которые могут быть переданы как параметр, возвращены из функции, присвоены переменной',
    ],
    {
      styles: css({
        padding: '2rem 0',
        color: '#fff',
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        'font-weight': 'bold',
      }),
    },
  ),
];
