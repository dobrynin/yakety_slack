class Notification < ApplicationRecord
  validates :user_id, uniqueness: { scope: :channel_id }

  belongs_to :user
  belongs_to :channel



  def increment!
    self.count = 0 unless self.count
    self.count += 1
    self.save!
  end

  def reset!
    self.count = 0
    self.save!
  end

  def self.get_notification(user_id, channel_id)
    Notification.find_by(user_id: user_id, channel_id: channel_id) ||
    Notification.new(user_id: user_id, channel_id: channel_id)
  end


end
