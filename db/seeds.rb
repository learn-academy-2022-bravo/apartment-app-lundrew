user1 = User.create email: 'test@example.com', password: 'password', password_confirmation: 'password'
user2 = User.create email: 'tester@example.com', password: 'password', encrypted_password: 'password'

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
      image: 'https://libreshot.com/wp-content/uploads/2017/07/apartment-house-exterior-design.jpg',
      user_id: user1.id
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
        image: 'https://get.pxhere.com/photo/architecture-house-window-building-home-color-facade-property-apartment-tower-block-interior-design-colors-design-apartments-houses-panasonicdmcfz20-condominium-residential-area-575735.jpg',
        user_id: user2.id
      }
  ]
  
  apartments.each do |each_apartment|
    user1.apartments.create each_apartment
  puts "creating apartment #{each_apartment}"
end