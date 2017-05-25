# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'
# require 'factory_girl'
# require 'factory_girl_rails'

# FactoryGirl.define do
#   factory :user do
#     username { Faker::Name.unique.name }
#     password 'password'
#   end
#
#   factory :channels do
#
#   end
#
#   factory :messages do
#     body: { Faker::ChuckNorris.fact },
#
#   end
# end
#
# 10.times do
#   FactoryGirl.create(:user)
# end

User.delete_all

demo1 = User.create!(
  username: 'noah',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230519/Bos_grunniens_at_Yundrok_Yumtso_Lake_f5vb5q.jpg'
)

demo2 = User.create!(
  username: 'emma',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230517/28037_1449878006_220_28037_f4xryu.jpg'
)

demo3 = User.create!(
  username: 'liam',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230517/188540-004-9F52B89C_htzcg9.jpg'
)

demo4 = User.create!(
  username: 'olivia',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230519/yak_cow_and_calf_N023_goqxbv.jpg'
)

demo5 = User.create!(
  username: 'william',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230518/yak-04_qm7ijs.jpg'
)

demo6 = User.create!(
  username: 'ava',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230518/yak-04_qm7ijs.jpg'
)

demo7 = User.create!(
  username: 'mason',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230518/yak-04_qm7ijs.jpg'
)

demo8 = User.create!(
  username: 'sophia',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230518/yak-04_qm7ijs.jpg'
)

demo9 = User.create!(
  username: 'james',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230518/yak-04_qm7ijs.jpg'
)

demo10 = User.create!(
  username: 'isabella',
  password: 'password',
  avatar_url: 'http://res.cloudinary.com/dx1asdayi/image/upload/v1495230518/yak-04_qm7ijs.jpg'
)



Channel.delete_all

channel1 = Channel.create!(
  name: '2017-03-27-sf',
  description: 'Discussion among the SF March cohort',
  DM: false,
  moderator_id: 1
)

channel2 = Channel.create!(
  name: 'general',
  description: 'General discussion',
  DM: false,
  moderator_id: 1
)

channel2 = Channel.create!(
  name: 'byluong',
  DM: true,
)

dm1 = Channel.create!(
  name: 'byluong, monte47',
  DM: true
)

dm2 = Channel.create!(
  name: 'dallashall',
  DM: true
)

Subscription.delete_all

Subscription.create!(
  user_id: demo1.id,
  channel_id: channel1.id
)

Subscription.create!(
  user_id: demo2.id,
  channel_id: channel1.id
)

Subscription.create!(
  user_id: demo3.id,
  channel_id: channel1.id
)

Message.delete_all

Message.create!(
  body: "Zepplin 4 lyfe",
  user_id: demo1.id,
  channel_id: channel1.id,
)

Message.create!(
  body: "Laura Marling is cool",
  user_id: demo2.id,
  channel_id: channel1.id,
)

Message.create!(
  body: "Live love beatles",
  user_id: demo3.id,
  channel_id: channel1.id,
)
