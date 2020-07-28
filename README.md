# Full Stack Expense-Tracker

The app was built to enable users to log their income and expenses. Users can view their balance, log their transactions, and view total income and expenses. The app allows dynamic updates to the browser. The app implements ReactJS as the frontend, used React Hooks and Context API to manage the Global State, and implements ExpressJS and MongoDb for the backend.

Link to app: [Expense-Tracker](https://afternoon-hamlet-18985.herokuapp.com/)

## Technologies Used
* ReactJS
* ExpressJS
* Mongoose
* NodeJS
* React Hooks
* Context API
* Axios
* Morgan
* dotenv
* Colors
* HTML
* CSS

## Usage

Install dependencies

```bash
npm install 
cd client
npm install
```

### Mongo connection setup

Edit your /config/config.env file to include personalised MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```


## Potential Improvements

* Add oAuth functionality for login system (Enable personalised expense tracker for each user)
* Dark mode
* Scroll bar for Transactions component
