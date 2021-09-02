# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

b1 = Bench.create!(description: 'Wow! What a bench!', lat: 37.797908, lng: -122.462011)
b2 = Bench.create!(description: 'Terrible bench. I got a splinter.', lat: 37.791156, lng: -122.480217)
b3 = Bench.create!(description: 'Lotta shade at this spot.', lat: 37.768793, lng: -122.484625)
b4 = Bench.create!(description: 'Great place to relax after getting sentenced to 20 years in solitary.', lat: 37.826846, lng: -122.422482)