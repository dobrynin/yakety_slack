# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(
  username: 'demo1',
  password: 'password'
)

User.create!(
  username: 'demo2',
  password: 'password'
)

User.create!(
  username: 'demo3',
  password: 'password'
)

Channel.delete_all

Channel.create!(
  name: '2017-03-27-sf',
  description: 'Discussion among the SF March cohort',
  DM: false,
  moderator_id: 1
)

Channel.create!(
  name: 'general',
  description: 'General discussion',
  DM: false,
  moderator_id: 1
)

Channel.create!(
  name: 'byluong',
  DM: true,
)

Channel.create!(
  name: 'byluong, monte47',
  DM: true
)

Channel.create!(
  name: 'dallashall',
  DM: true
)
