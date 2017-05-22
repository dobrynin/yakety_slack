class Subscription < ApplicationRecord
  validates :user_id, uniqueness: { scope: :channel_id }

  belongs_to :channel
  belongs_to :user
end
