export const paintingData = [
  // Front Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i}.png`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 9, // width of the painting
    height: 8, // height of the painting
    position: { x: 8, y: 6, z: -28 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Sunset`,
      artist: 'Jasper Rivers',
      description: `Set against the canvas of an evening sky, two quaint flats and an electric post emerge as vibrant strokes of urban charm, imbued with the hues of dusk and the whimsy of twilight. `,
      
      link: 'http://localhost:3001/product/R0CgyVzHuQooHEjd9Zdw',
    },
  })),
   // Front Wall
   ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 1}.png`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 9, // width of the painting
    height: 8, // height of the painting
    position: { x: -20, y: 6, z: -28}, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Desert`,
      artist: 'Xavier Blaze',
      description: `The image is an icon depicting a painting with a silhouette art style. It shows a desert in warm orange and brown shades with a burning sun against a blue background.`,
      
      link: 'http://localhost:3001/product/BtN32Z75dAPufk8RrmHB',
    },
  })),
  // Back Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 2}.png`,
    width: 9,
    height: 8,
    position: { x: 20 , y: 6, z: 29 },
    rotationY: Math.PI,
    info: {
      title: `Greens`,
      artist: 'Aurora Frost',
      description: `The image is a background pattern featuring shades of green that are depicted as hills and a sun.
      `,
      
      link: 'http://localhost:3001/product/OOsA5ecatuRy05I4blUI',
    },
  })),
  //back wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 3}.png`,
    width: 9,
    height: 8,
    position: { x: -15 , y: 6, z: 29 },
    rotationY: Math.PI,
    info: {
      title: `Moon`,
      artist: 'Willow Harper',
      description: `The image features a crescent moon against a colorful gradient background in shades of purple, with a flare effect.`,
      
      link: 'http://localhost:3001/product/l93np5DkTUvY8Ljqy2FW',
    },
  })),
  // Left Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 4}.png`,
    width: 9,
    height: 8,
    position: { x: -32, y: 6, z: 17},
    rotationY: Math.PI/2 ,
    info: {
      title: `Mosaic`,
      artist: 'Saira',
      description: `In a symphony of azure, emerald, and sunlit gold, an array of diverse shapes converge, dancing in harmonious unity across the canvas.`,
      
      link: 'http://localhost:3001/product/DzxyPm3V9endvTVpOGEU',
    },
  })),

    // Left Wall
    ...Array.from({ length: 1 }, (_, i) => ({
      imgSrc: `artworks/${i + 5}.png`,
      width: 9,
      height: 8,
      position: { x: -32, y: 6, z: -15},
      rotationY: Math.PI/2 ,
      info: {
        title: `Dawn`,
        artist: 'Atlas Grayson',
        description: `Amidst this poetic landscape stands an electric post, a silent sentinel amidst the shifting hues of the heavens, whispering secrets of moonlit nights and the fleeting beauty of sunset dreams. 
        `,
        
        link: 'http://localhost:3001/product/tSZEypgyzF6DpHpHsCaj',
      },
    })),

  // Right Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 6}.png`,
    width: 9,
    height: 10,
    position: { x: 23.5, y: 6, z: -17+10*i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Sun`,
      artist: 'Eliana Brooks',
      description: `The image depicts a serene landscape crafted from delicate pastel hues, where geometric shapes coalesce to form rolling hills and a gentle sun.
      `,
      
      link: 'http://localhost:3001/product/rDaSrJcs8flweeYA10l5',
    },
  })),
  // Right Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/${i + 7}.png`,
    width: 9,
    height: 8,
    position: { x: 56, y: 6, z: -3 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Cat`,
      artist: 'Donovan Storm',
      description: `The image is an icon of a black cat with its hands on an orange ball. It is a cartoon-style illustration of a mammal.
      `,
      
      link: 'http://localhost:3001/product/IO8wIL913msFwpDjGZue',
    },
  })),
];
