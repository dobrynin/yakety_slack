```js
{
  currentUser: {
    id: 3,
    username: 'DapperDan',
    email: 'user@email.com'
  }

  forms: {
    signUp: {errors: []},
    login: {errors: []},
    createMessage: {errors: ["body can't be blank"]}
  }

  messages: {
    4: {
      id: 4,
      user_id: 5,
      channel_id: 6,
      body: 'TestTestTest',
      created_at: '05-13-17'
    },

    7: {
      id: 7,
      user_id: 8,
      channel_id: 9,
      body: 'MoreTests!',
      created_at: '05-14-17'
    }
  }

  channels: {
    10: {
      id: 10,
      name: 'THE TEST HAS BEGUN',
      moderator_id: 14,
      description: 'this is a test channel^'
    }

    11: {
      id: 11,
      name: 'This channel is NOT a test',
      moderator_id: 15,
      description: 'No testing allowed here',
    }
  }

  users: {
    12: {
      id: 12,
      username: 'Ulysses',
      email: "test123email.com",
    }

    13: {
      id: 13,
      username: 'S_Spielberg',
      email: "testhater@email.org"
    }
  }
}
