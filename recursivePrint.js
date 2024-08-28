const userProfile = {
  userId: 12345,
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Elm Street",
    city: "Gotham",
    state: "NY",
    zipCode: "12345",
  },
  contact: {
    email: "johndoe@example.com",
    phone: {
      home: "555-1234",
      mobile: "555-5678",
    },
  },
  orders: [
    {
      orderId: "A001",
      date: "2024-08-01",
      items: [
        {
          itemId: "I001",
          name: "Laptop",
          quantity: 1,
          price: 1200.0,
        },
        {
          itemId: "I002",
          name: "Mouse",
          quantity: 2,
          price: 25.0,
        },
      ],
      totalAmount: 1250.0,
    },
    {
      orderId: "A002",
      date: "2024-08-15",
      items: [
        {
          itemId: "I003",
          name: "Keyboard",
          quantity: 1,
          price: 75.0,
        },
      ],
      totalAmount: 75.0,
    },
  ],
};

function myFunction(obj) {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    return Object.entries(obj).map(([key, value]) => {
      const processedValue = myFunction(value);
      return `${key}-${processedValue}`;
    });
  }

  return obj;
}

console.log(myFunction(userProfile));
