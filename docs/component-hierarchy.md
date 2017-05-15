## Component Hierarchy

**AuthFormContainer**
 - AuthForm

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

**DirectMessageContainer**
 - DirectMessageIndex
  - DirectMessageIndexItem
  - DirectMessageForm

**HeaderContainer**
 -

**MessageFormContainer**
 - MessageForm




**SplashPageContainer**
 - SplashPage
 - SplashPageHeader

**Home**
 - ThreadContainer
 - SidebarContainer
 - HeaderContainer

**ThreadContainer**
 - Thread

**SidebarContainer**
 - Sidebar

**HeaderContainer**
 - Header

**Thread**
 - Messages
 - NewMessage

**Sidebar**
 - SidebarHeader
 - ChannelIndex
 - DirectMessageIndex
 - NewDirectMessageThread

**ChannelIndex**
 - ChannelIndexItem

**DirectMessageIndex**
 - DirectMessageIndexItem

**Header**
 - SpecificThreadHeader
 - GeneralHeader

## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "Splash"    |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/messages" | "Redirect to default thread route" |
| "/messages/:threadId" | "Home" |
