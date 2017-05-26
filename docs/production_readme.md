# Yak

[Yak live][heroku]

[heroku]: https://yakety-slack.herokuapp.com/

Yak is a Slack-inspired full-stack web application. It utilizes the
React.js and Redux libraries on the frontend with a Ruby on Rails
backend and a PostgreSQL database.

## Features & Implementation

### Messages and Live Chat

Live Chat is implemented using Action Cable which seamlessly integrates
WebSockets with the rest of the app. For each user, both a messages
channel and a notifications channel are established.

Any messages that are sent to the the user's current channel will be supplied live through the messages channel. When a user receives a message in any channel other than the current channel, a notification is sent to the user
through the notifications channel. Both of these actions are initiated
in the Messages Controller create function.

<!-- On the frontend, users are subscribed to a unique notifications channel when the log in. When a user navigates to a channel, messages are fetched in bulk via an API call to the server. The client's browser also mounts a Socket onto the window and subscribes the user to the corresponding messages channel provided by the server. Thereafter,
the selected channels messages are supplied live to the user until they navigates
elsewhere. -->

### Channels

Any user can create a channel. Upon channel creation, the current user
is set to the moderator and the global channel list is updated. Other users
are then able to select the channel and subscribe to it. 'Channels' and 'Users' are linked through 'Subscriptions', which serves as a joins table.

### Direct Messages

Users can also create Direct Messages. Direct Messages differ from Channels in that they are not public; they are accessible only by selected Users. When a user creates a new direct message group, a new entry is immediately added to the direct message list of each invited user. From then on, any new message will trigger a typical notification.

## Future Directions for the Project

### Search Messages

I plan to implement a fuzzy search of Messages, Channels, and User Profiles.

### Replies and Reactions

I plan to allow users to chain threads off of channels by replying to
individual comments. Additionally, I plan to allow users to reply to each other's
comments with Reactions (Emojis).

### Photos and Giphy

In order to make Yak messaging more versatile and enjoyable, I plan to integrated
support for photo and giphy attachments to messages. A further goal would be to
integrate messages with video-playing APIs such as Youtube and Vimeo.
