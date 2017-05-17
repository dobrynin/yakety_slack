class Channel < ApplicationRecord
  validates :name, :moderator_id, presence: true
  validates :private, inclusion: { in: [true, false] }
end
