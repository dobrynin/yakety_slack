class Channel < ApplicationRecord
  validates :name, presence: true
  validates :DM, inclusion: { in: [true, false] }
end
