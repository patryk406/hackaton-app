# Hi, this is newsletter app.

**After download || clone** for starting server you need to type in terminal
`yarn start`

**Create .env.local file outside your src & public file**

# Keys & id that you need in your `env` file

REACT_APP_API_KEY= **There you need to type your api key**
REACT_APP_DB_ID=**There you need to type your database id**
**As a database im using [AirTable](https://airtable.com/)**

REACT_APP_SECRET_CODE=**There you need to type your secred code**
*it's your choice what password u select*

REACT_APP_MAIL_USER=**There you need to type your mail user id**
REACT_APP_MAIL_TEMPLATE=**There you need to type your mail template id**
REACT_APP_MAIL_KEY=**There you need to type your mail key**
**As a mailing api im using [MailJs](https://www.emailjs.com/)**

# This app is created with this stack of tools , so any other db or mailing api may create trouble or need to refactoring code.

**DB Structure**

In Airtable i have 2 tables

First is `subscribers`

with columns:

email type email
name type single line text
created type created time

Second is `campaigns`

with columns:

subject type single line text
content type long text
created type created time
status type single select

It's important to create the same structure if you want to use this app else there can be problem when posting new campaigns or subscribers. If you add any field more then there for sure will be error.


**Tech stack:**
*React* *Hooks* *Fetch* *Chakra-ui* *Router* *Atom Design*