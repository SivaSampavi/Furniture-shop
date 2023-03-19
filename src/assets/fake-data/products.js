// all images imported from images directory
import product_01_image_01 from '../images/bed1.png';
import product_01_image_02 from '../images/bed2.png';
import product_01_image_03 from '../images/bed3.png';

import product_02_image_01 from '../images/chair3.png';
import product_02_image_02 from '../images/chair4.png';
import product_02_image_03 from '../images/chair5.png';

import product_03_image_01 from '../images/sofa3.png';
import product_03_image_02 from '../images/sofa2.png';
import product_03_image_03 from '../images/sofa4.png';

import product_04_image_01 from '../images/table1.png';
import product_04_image_02 from '../images/table2.png';
import product_04_image_03 from '../images/table3.png';

import product_05_image_01 from '../images/tableset1.png';
import product_05_image_02 from '../images/tableset2.png';
import product_05_image_03 from '../images/tableset3.png';

import product_06_image_01 from '../images/bed4.png';
import product_06_image_02 from '../images/bed5.png';
import product_06_image_03 from '../images/bed1.png';

const products = [
  {
    id: '01',
    title: 'Black Royal Bed',
    price: 240000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Bed',

    desc: 'Introducing our luxurious black royal bed, fit for royalty. This elegant and regal bed exudes sophistication and style, with its sleek black finish and ornate design details.Crafted from high-quality materials, this bed is built to last and features a sturdy frame that provides ample support for a comfortable night sleep. The intricate detailing on the headboard and footboard adds a touch of opulence, while the rich black finish creates a timeless and classic look. ',
  },

  {
    id: '02',
    title: 'Armless Chair',
    price: 31150,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Chair',

    desc: 'Introducing our armless chair, a perfect addition to any modern living space. With its sleek and minimalist design, this chair is the epitome of style and functionality. Crafted from high-quality materials, this chair offers both comfort and durability. Its sturdy frame and soft cushioning provide a comfortable seating experience, while its clean lines and contemporary design make it a versatile piece that can complement any decor. This armless chair is also lightweight and easy to move around, making it perfect for smaller living spaces or for when you need to rearrange your furniture. Its neutral color options allow it to blend seamlessly with any color scheme or design style, making it a versatile and practical choice for any home..',
  },

  {
    id: '03',
    title: 'Green crouch',
    price: 110000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Sofa',

    desc: 'Introducing our stunning green crouch that is sure to add a pop of color and style to your living space. This eye-catching piece features a modern design with clean lines and a beautiful green hue that is both bold and elegant. Crafted from high-quality materials, this crouch is both durable and comfortable. The plush cushions are upholstered in a soft fabric that is gentle to the touch, making it perfect for lounging or relaxing after a long day.',
  },

  {
    id: '04',
    title: 'Wooden Table',
    price: 22500,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Table',

    desc: 'Introduce a touch of natural elegance to your living space with our exquisite wooden table. Made from high-quality wood, this stunning piece is not only visually appealing but also durable and long-lasting. Crafted to perfection, our wooden table features a sleek and modern design that seamlessly blends with any interior decor. Whether you are looking to create a cozy breakfast nook or a sophisticated dining area, this table is sure to impress your guests and elevate your space. The smooth surface of our wooden table provides ample space for you to work, dine, or entertain comfortably. Its sturdy legs offer excellent stability, ensuring that the table remains in place even when carrying heavy loads.',
  },

  {
    id: '05',
    title: 'Dine Table Set',
    price: 240000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: '06',
    title: 'Harwi Bed',
    price: 1140000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '07',
    title: 'Mexico cotton Chair',
    price: 115000,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Chair',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '08',
    title: 'Grey sofa',
    price: 91100,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Sofa',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '09',
    title: 'Stuff Table',
    price: 21100,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '10',
    title: 'Garden table',
    price: 24000,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Table',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '11',
    title: 'Double bed ',
    price: 350000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '12',
    title: 'Master Tripple bed ',
    price: 350000,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '13',
    title: 'Family bed ',
    price: 221350,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bed',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
];

export default products;
