let giftData = [
  {
    id: 1,
    name: "Disco Ball Candle",
    pricePoint: "$",
    audience: "Candle Lovers",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    description: "A party in a candle.",
    submittedBy: "Sasha",
    submittedOn: "2022-09-04T14:48:00Z",
  },
  {
    id: 2,
    name: "Ceramic Planter",
    pricePoint: "$$",
    audience: "Plant Parents",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description: "A minimalist home for your favorite houseplant.",
    submittedBy: "Jordan",
    submittedOn: "2022-09-06T10:15:00Z",
  },
  {
    id: 3,
    name: "Lavender Eye Pillow",
    pricePoint: "$",
    audience: "Self-Care Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    description: "A relaxing lavender-filled pillow for restful evenings.",
    submittedBy: "Maya",
    submittedOn: "2022-09-08T16:30:00Z",
  },
  {
    id: 4,
    name: "Handmade Coffee Mug",
    pricePoint: "$$",
    audience: "Coffee Lovers",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    description: "A one-of-a-kind mug for your morning coffee ritual.",
    submittedBy: "Alex",
    submittedOn: "2022-09-10T09:20:00Z",
  },
  {
    id: 5,
    name: "Scented Soy Candle",
    pricePoint: "$",
    audience: "Candle Lovers",
    image:
      "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=800&q=80",
    description: "A cozy soy candle with a warm, inviting fragrance.",
    submittedBy: "Taylor",
    submittedOn: "2022-09-12T13:45:00Z",
  },
  {
    id: 6,
    name: "Woven Storage Basket",
    pricePoint: "$$",
    audience: "Home Organizers",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description:
      "A stylish woven basket for keeping your home neat and organized.",
    submittedBy: "Morgan",
    submittedOn: "2022-09-14T11:20:00Z",
  },
  {
    id: 7,
    name: "Succulent Starter Kit",
    pricePoint: "$$",
    audience: "Plant Parents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
    description:
      "A beginner-friendly collection of beautiful low-maintenance succulents.",
    submittedBy: "Casey",
    submittedOn: "2022-09-16T15:10:00Z",
  },
  {
    id: 8,
    name: "Leather Journal",
    pricePoint: "$$",
    audience: "Writers",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    description:
      "A classic journal for capturing ideas, notes, and everyday thoughts.",
    submittedBy: "Riley",
    submittedOn: "2022-09-18T09:35:00Z",
  },
  {
    id: 9,
    name: "Pour-Over Coffee Set",
    pricePoint: "$$$",
    audience: "Coffee Lovers",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description:
      "A simple pour-over setup for making a smooth cup of coffee at home.",
    submittedBy: "Jamie",
    submittedOn: "2022-09-20T12:05:00Z",
  },
  {
    id: 10,
    name: "Ceramic Vase",
    pricePoint: "$$",
    audience: "Home Decor Lovers",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
    description:
      "A simple ceramic vase that adds an elegant touch to any room.",
    submittedBy: "Avery",
    submittedOn: "2022-09-22T17:40:00Z",
  },
  {
    id: 11,
    name: "Aromatherapy Bath Set",
    pricePoint: "$$$",
    audience: "Self-Care Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A relaxing collection of bath essentials designed for a peaceful evening.",
    submittedBy: "Drew",
    submittedOn: "2022-09-24T14:25:00Z",
  },
  {
    id: 12,
    name: "Handmade Ceramic Mug",
    pricePoint: "$$",
    audience: "Coffee Lovers",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80",
    description:
      "A handcrafted ceramic mug perfect for enjoying coffee, tea, or cocoa.",
    submittedBy: "Jordan",
    submittedOn: "2022-09-26T10:15:00Z",
  },
  {
    id: 13,
    name: "Macrame Wall Hanging",
    pricePoint: "$$",
    audience: "Home Decor Lovers",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    description:
      "A decorative macrame piece that brings warmth and texture to any wall.",
    submittedBy: "Samantha",
    submittedOn: "2022-09-28T13:30:00Z",
  },
  {
    id: 14,
    name: "Herb Garden Kit",
    pricePoint: "$$",
    audience: "Plant Parents",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    description: "A compact indoor garden kit for growing fresh herbs at home.",
    submittedBy: "Chris",
    submittedOn: "2022-09-30T09:50:00Z",
  },
  {
    id: 15,
    name: "Bamboo Desk Organizer",
    pricePoint: "$$",
    audience: "Home Organizers",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    description:
      "A practical bamboo organizer for keeping pens, notes, and desk essentials tidy.",
    submittedBy: "Alex",
    submittedOn: "2022-10-02T11:45:00Z",
  },
  {
    id: 16,
    name: "Watercolor Paint Set",
    pricePoint: "$$",
    audience: "Artists",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful watercolor set for painting creative illustrations and artwork.",
    submittedBy: "Taylor",
    submittedOn: "2022-10-04T15:20:00Z",
  },
  {
    id: 17,
    name: "Knitted Throw Blanket",
    pricePoint: "$$$",
    audience: "Cozy Home Lovers",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description:
      "A soft knitted blanket made for relaxing on the couch or adding texture to a bedroom.",
    submittedBy: "Morgan",
    submittedOn: "2022-10-06T16:05:00Z",
  },
  {
    id: 18,
    name: "Stainless Steel Water Bottle",
    pricePoint: "$$",
    audience: "Fitness Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    description:
      "A durable reusable bottle designed to keep drinks cold throughout the day.",
    submittedBy: "Casey",
    submittedOn: "2022-10-08T08:40:00Z",
  },
  {
    id: 19,
    name: "Bamboo Cutting Board",
    pricePoint: "$$",
    audience: "Home Cooks",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    description:
      "A sturdy bamboo cutting board for preparing everyday meals with ease.",
    submittedBy: "Riley",
    submittedOn: "2022-10-10T12:25:00Z",
  },
  {
    id: 20,
    name: "Essential Oil Diffuser",
    pricePoint: "$$$",
    audience: "Wellness Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact diffuser that fills your space with calming aromas and a relaxing atmosphere.",
    submittedBy: "Jamie",
    submittedOn: "2022-10-12T14:10:00Z",
  },
  {
    id: 21,
    name: "Canvas Tote Bag",
    pricePoint: "$",
    audience: "Eco-Conscious Shoppers",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    description:
      "A reusable canvas tote for carrying groceries, books, and everyday essentials.",
    submittedBy: "Avery",
    submittedOn: "2022-10-14T10:35:00Z",
  },
  {
    id: 22,
    name: "Desk Plant Pot",
    pricePoint: "$",
    audience: "Plant Parents",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact decorative pot designed to brighten up desks and small spaces.",
    submittedBy: "Drew",
    submittedOn: "2022-10-16T13:15:00Z",
  },
  {
    id: 23,
    name: "Bluetooth Speaker",
    pricePoint: "$$$",
    audience: "Music Lovers",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description:
      "A portable speaker for enjoying your favorite music at home or on the go.",
    submittedBy: "Cameron",
    submittedOn: "2022-10-18T17:05:00Z",
  },
  {
    id: 24,
    name: "Wooden Serving Tray",
    pricePoint: "$$",
    audience: "Entertaining Hosts",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description:
      "A simple wooden tray for serving drinks, snacks, and breakfast with style.",
    submittedBy: "Quinn",
    submittedOn: "2022-10-20T11:55:00Z",
  },
  {
    id: 25,
    name: "Reading Pillow",
    pricePoint: "$$$",
    audience: "Book Lovers",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description:
      "A supportive cushion designed to make reading in bed or on the couch more comfortable.",
    submittedBy: "Harper",
    submittedOn: "2022-10-22T19:20:00Z",
  },
  {
    id: 26,
    name: "Scented Wax Melts",
    pricePoint: "$",
    audience: "Home Fragrance Lovers",
    image:
      "https://images.unsplash.com/photo-1608181831718-c9e5c5c7b5a3?auto=format&fit=crop&w=800&q=80",
    description:
      "Fragrant wax melts that create a warm and inviting atmosphere in your home.",
    submittedBy: "Reese",
    submittedOn: "2022-10-24T12:40:00Z",
  },
  {
    id: 27,
    name: "Minimalist Wall Clock",
    pricePoint: "$$",
    audience: "Minimalist Decor Fans",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80",
    description:
      "A clean, minimalist clock that combines practical function with modern design.",
    submittedBy: "Blake",
    submittedOn: "2022-10-26T09:25:00Z",
  },
  {
    id: 28,
    name: "Travel Coffee Tumbler",
    pricePoint: "$$",
    audience: "Coffee Lovers",
    image:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    description:
      "A reusable travel tumbler for keeping your favorite coffee warm during busy mornings.",
    submittedBy: "Parker",
    submittedOn: "2022-10-28T07:50:00Z",
  },
  {
    id: 29,
    name: "Leather Card Holder",
    pricePoint: "$$",
    audience: "Style Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description:
      "A slim leather card holder designed for carrying everyday cards without bulk.",
    submittedBy: "Logan",
    submittedOn: "2022-10-30T14:45:00Z",
  },
  {
    id: 30,
    name: "Yoga Mat",
    pricePoint: "$$",
    audience: "Yoga Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable non-slip mat for yoga, stretching, and mindful movement.",
    submittedBy: "Emerson",
    submittedOn: "2022-11-01T16:30:00Z",
  },
  {
    id: 31,
    name: "Recipe Card Box",
    pricePoint: "$$",
    audience: "Home Cooks",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    description:
      "A charming storage box for organizing favorite recipes and family meal ideas.",
    submittedBy: "Finley",
    submittedOn: "2022-11-03T10:20:00Z",
  },
  {
    id: 32,
    name: "Fleece Picnic Blanket",
    pricePoint: "$$$",
    audience: "Outdoor Lovers",
    image:
      "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=800&q=80",
    description:
      "A comfortable outdoor blanket perfect for picnics, parks, and weekend adventures.",
    submittedBy: "Rowan",
    submittedOn: "2022-11-05T13:05:00Z",
  },
  {
    id: 33,
    name: "Acrylic Desk Calendar",
    pricePoint: "$",
    audience: "Productivity Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    description:
      "A reusable desk calendar that helps keep important dates and tasks organized.",
    submittedBy: "Skyler",
    submittedOn: "2022-11-07T15:40:00Z",
  },
  {
    id: 34,
    name: "Indoor Plant Mister",
    pricePoint: "$",
    audience: "Plant Parents",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80",
    description:
      "A handy plant mister for keeping delicate houseplants refreshed and hydrated.",
    submittedBy: "Dakota",
    submittedOn: "2022-11-09T11:15:00Z",
  },
  {
    id: 35,
    name: "Linen Throw Pillow",
    pricePoint: "$$",
    audience: "Home Decor Lovers",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description:
      "A soft linen pillow that adds a relaxed and elegant accent to living spaces.",
    submittedBy: "Kendall",
    submittedOn: "2022-11-11T18:10:00Z",
  },
  {
    id: 36,
    name: "Portable Picnic Set",
    pricePoint: "$$$",
    audience: "Outdoor Lovers",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    description:
      "A convenient picnic set with essentials for enjoying meals outdoors with friends and family.",
    submittedBy: "Hayden",
    submittedOn: "2022-11-13T12:30:00Z",
  },
];

export default giftData;
