json.extract! user, :id, :username, :avatar_url
json.channels user.channels.map(&:id)
