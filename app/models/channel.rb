class Channel < ApplicationRecord
  validates :name, presence: true
  validates :DM, inclusion: { in: [true, false] }

  has_many :subscriptions

  has_many :users,
  through: :subcriptions
end
