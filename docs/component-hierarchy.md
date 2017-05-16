## Component Hierarchy

**SplashPageContainer**
 - SplashPage

**AuthFormContainer**
 - AuthForm

**Home**
 - HeaderContainer
 - NavContainer
 - MessagesIndexContainer

**NavContainer**
 - Nav
  - User Information
  - ChannelIndexContainer
  - DirectMessageIndexContainer

**MessagesIndexContainer**
 - MessageIndex
  - MessageIndexItem
 - MessageFormContainer

**ChannelIndexContainer**
 - ChannelIndex
  - ChannelIndexItem

**DirectMessageIndexContainer**
 - DirectMessageIndex
  - DirectMessageIndexItem
  - DirectMessageFormContainer

**HeaderContainer**
 - Channel Name
 - Channel Member Count
 - Channel Description

**MessageFormContainer**
 - MessageForm

 **DirectMessageFormContainer**
 - DirectMessageForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "Splash"    |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/messages" | "Redirect to default thread route" |
| "/messages/:threadId" | "Home" |
