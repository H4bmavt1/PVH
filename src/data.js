import img1 from './images/hero-1.jpg'
import img2 from './images/hero-2.jpg'
import img3 from './images/hero-3.jpg'
import img4 from './images/hero-4.jpg'
import img5 from './images/hero-5.jpg'

export const hero = [
    {name: 'img1', url: img1, slogan: 'Free to create with Apple MacBook Pro 13'},
    {name: 'img2', url: img2, slogan: 'ROG Zephyrus G14 AW SE GA401'},
    {name: 'img3', url: img3, slogan: 'The Best Keep Getting Better'},
    {name: 'img4', url: img4, slogan: 'Different is Better'},
    {name: 'img5', url: img5, slogan: 'Gaming and Work'},
]

const local = 'http://localhost:3001';
// const server = 'https://laptop-api-thang.herokuapp.com'

export const url = local;


export const ads = {
    text: 'Featured Products',
    img: img4
}

export const reviews = [
    {
        id: 1,
        name: 'Anamaria',
        location: 'United States',
        review: 'Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.'
    },
    {
        id: 2,
        name: 'Gretchen',
        location: 'United States',
        review: 'Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus'
    },
    {
        id: 3,
        name: 'Esmeralda',
        location: 'United States',
        review: 'Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.'
    },
    {
        id: 4,
        name: 'Venti',
        location: 'United States',
        review: 'Maecenas interdum, metus vitae tincidunt porttitor, magna quam egestas sem, ac scelerisque nisl nibh vel lacus. Proin eget gravida odio. Donec ullamcorper est eu accumsan cursus.'
    }
]

export const picks = [
    {
        id: 1,
        img: img1
    },
    {
        id: 2,
        img: img2
    }
]