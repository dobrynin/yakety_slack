# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references channel), indexed
private     | boolean   | default: false

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
moderator_id| integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | string    |

## subscriptions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
channel_id  | integer   | not null, foreign key (references channels), indexed
