apartments = [
    {
      street: '3880 Bonita Road', 
      city: 'Bonita', 
      state: 'California',
      manager: 'Charles Xavier',
      email: 'xmen@xmen.com',
      price: '$2000',
      bedrooms: 2, 
      bathrooms: 1,
      pets: 'No',
      image: '',
      user_id: 1
    },
    {
        street: '4729 San Miguel Way', 
        city: 'Bonita', 
        state: 'California',
        manager: 'Luke Skywalker',
        email: 'star@wars.com',
        price: '$2000',
        bedrooms: 2, 
        bathrooms: 1,
        pets: 'No',
        image: '',
        user_id: 1
      }
  ]
  
  users = [
    {
      email: 'test@example.com',
      encrypted_password: 'Test123'
    }
  ]
  
  apartments.each do |each_apartment|
    Apartment.create each_apartment
    puts "creating apartment #{each_apartment}"
  end