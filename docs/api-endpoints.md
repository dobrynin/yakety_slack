# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users` - retrieve all users
- `POST /api/users` - create a user
- `PATCH /api/users/:id` - update a user
- `DELETE /api/users/:id` - delete a user

### Session

- `POST /api/session` - create a new session (login)
- `DELETE /api/session` - delete a session (logout)

### Channels

- `GET /api/channels` - retrieve all channels
- `POST /api/channels` - create a channel
- `GET /api/channels/:id` - retrieve a channel
- `PATCH /api/channels/:id` - update a channel
- `DELETE /api/channels/:id` - delete a channel

### Subscriptions

- `GET /api/subscriptions/` - retrieve the current user's subscriptions
- `POST /api/subscriptions/:channelId` - create a subscription
- `DELETE /api/subscriptions/:channelId` - delete a subscription

### Messages

- `GET /api/messages` - retrieve all messages
- `POST /api/messages` - create a message
- `PATCH /api/messages/:id` - update a message
- `DELETE /api/messages/:id` - delete a message
- `GET /api/channels/:channelId/messages` - retrieve all messages from a channel
- `GET /api/users/:userId/messages` - retrieve all messages for a user
