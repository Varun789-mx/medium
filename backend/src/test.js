const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPosts() {
  const posts = [
    {
      content: 'Just returned from an amazing hiking trip in the mountains! The views were absolutely breathtaking and the fresh air was exactly what I needed. Nature has a way of resetting your mind and giving you perspective on life. Can\'t wait for the next adventure!',
      published: true,
      title: 'Mountain Adventure',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    },
    {
      content: 'Spent the weekend learning React hooks and I\'m amazed at how much cleaner my code has become. The useState and useEffect hooks have completely changed how I think about component state management. Here\'s a quick tutorial I put together for beginners.',
      published: true,
      title: 'Mastering React Hooks',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
    },
    {
      content: 'Homemade pizza night was a huge success! Made the dough from scratch and topped it with fresh basil, mozzarella, and heirloom tomatoes from the garden. There\'s something so satisfying about creating a meal completely from scratch. Recipe in the comments!',
      published: true,
      title: 'Pizza Night Success',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop'
    },
    {
      content: 'Working on my photography skills with this beautiful sunset shot. The golden hour never fails to amaze me with its warm, soft light. Took about 50 shots to get this one perfect exposure. Practice makes perfect!',
      published: true,
      title: 'Golden Hour Photography',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop'
    },
    {
      content: 'Coffee shop coding session was incredibly productive today. Sometimes a change of environment is all you need to breakthrough that mental block. Built a complete CRUD API in Express.js and feeling accomplished!',
      published: true,
      title: 'Productive Coding Session',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
    },
    {
      content: 'Book recommendation: "The Design of Everyday Things" by Don Norman. This book completely changed how I think about user experience and product design. Every designer and developer should read this classic. The insights about affordances and signifiers are mind-blowing.',
      published: true,
      title: 'Essential UX Book Recommendation',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    },
    {
      content: 'First attempt at urban sketching and I\'m hooked! There\'s something magical about sitting in a busy street and capturing the energy of the city on paper. This sketch took me about an hour and taught me so much about observation and patience.',
      published: true,
      title: 'Urban Sketching Adventure',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
    },
    {
      content: 'Morning yoga session in the park. Starting the day with mindful movement and breathing exercises has transformed my energy levels and mental clarity. If you\'re looking for a way to reduce stress and improve focus, I highly recommend giving yoga a try.',
      published: true,
      title: 'Morning Yoga Benefits',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop'
    },
    {
      content: 'Late night debugging session finally paid off! Found that elusive bug that was causing memory leaks in our production application. It was hiding in an event listener that wasn\'t being properly cleaned up. The satisfaction of solving complex problems never gets old.',
      published: false,
      title: 'Bug Hunting Victory',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&h=600&fit=crop'
    },
    {
      content: 'Weekend farmer\'s market haul! Supporting local farmers and getting the freshest organic produce is one of my favorite Saturday morning rituals. These heirloom tomatoes and fresh herbs will make an amazing caprese salad tonight.',
      published: true,
      title: 'Farmers Market Finds',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop'
    },
    {
      content: 'Finished my first marathon today! 26.2 miles of pure determination and mental strength. The training was grueling but crossing that finish line was one of the most rewarding experiences of my life. Already thinking about the next race!',
      published: true,
      title: 'Marathon Achievement',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
    },
    {
      content: 'Experimenting with machine learning algorithms for image classification. Built a CNN model that can identify different dog breeds with 87% accuracy. The potential applications of AI in everyday problems continue to fascinate me. Code repository linked in bio!',
      published: true,
      title: 'ML Image Classification Project',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
    },
    {
      content: 'Sunday morning pancake tradition continues! These fluffy buttermilk pancakes with fresh berries and maple syrup are the perfect way to slow down and enjoy the simple pleasures. Sometimes the best moments are the quiet ones at home.',
      published: true,
      title: 'Sunday Morning Pancakes',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=600&fit=crop'
    },
    {
      content: 'Draft post about sustainable living practices I\'m working on. Been researching zero-waste lifestyle changes and want to share practical tips that actually make a difference. Still gathering more data and personal experiences before publishing this comprehensive guide.',
      published: false,
      title: 'Sustainable Living Guide (Draft)',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop'
    },
    {
      content: 'Beach sunset meditation session was exactly what my soul needed. There\'s something incredibly grounding about listening to the waves while watching the sun disappear into the horizon. These moments of stillness are essential for mental health and creativity.',
      published: true,
      title: 'Beach Meditation Moments',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop'
    },
    {
      content: 'New workspace setup is finally complete! Upgraded to a standing desk, added some plants for better air quality, and organized my cables properly. A clean, organized environment really does boost productivity and focus. Time to build some amazing projects!',
      published: true,
      title: 'Workspace Upgrade Complete',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      content: 'Exploring street art in the downtown district today. The creativity and social commentary in these murals is absolutely incredible. Art has this amazing power to transform spaces and spark important conversations. Each piece tells a unique story.',
      published: true,
      title: 'Street Art Exploration',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop'
    },
    {
      content: 'Late night thoughts on minimalism and intentional living. Been decluttering my space and mind, focusing on what truly adds value to my life. It\'s amazing how much mental clarity you gain when you remove the excess noise and distractions.',
      published: false,
      title: 'Minimalism Reflections',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      content: 'Homemade bread experiment was a success! Spent the entire day learning the art of sourdough baking. The process is meditative - mixing, kneading, waiting for the rise. There\'s something deeply satisfying about creating food with your own hands.',
      published: true,
      title: 'Sourdough Baking Success',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop'
    },
    {
      content: 'Night photography session in the city center. Capturing the energy of urban life after dark - neon lights, flowing traffic, and the contrast between shadows and illumination. The city has a completely different personality at night.',
      published: true,
      title: 'Urban Night Photography',
      authorid: '80710904-3dc9-40e4-8e8d-7fc6551c99e1',
      picture: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop'
    }
  ];

  try {
    console.log('Starting to seed posts...');
    
    for (const post of posts) {
      await prisma.post.create({
        data: post
      });
      console.log(`Created post: ${post.title}`);
    }

    console.log(`Successfully created ${posts.length} posts!`);
  } catch (error) {
    console.error('Error seeding posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedPosts();
