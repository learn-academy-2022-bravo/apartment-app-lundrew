user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

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
      image: 'https://libreshot.com/wp-content/uploads/2017/07/apartment-house-exterior-design.jpg'
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
        image: 'https://get.pxhere.com/photo/architecture-house-window-building-home-color-facade-property-apartment-tower-block-interior-design-colors-design-apartments-houses-panasonicdmcfz20-condominium-residential-area-575735.jpg'
      }
  ]
  
  apartments.each do |each_apartment|
    user.apartments.create each_apartment
  puts "creating apartment #{each_apartment}"
end