# Quicargo Wireframe Application

In this application user can able to enter logistics details as per the requirements.

- Route, Pickup and Delivery address and country.
- Side Navmenu which contains information about my deliveries and history,Add New Delivery.
- Freight Details,type goods,volume,and weight information.
- Date and Time for pickup and delivery.
- Google Map for route details.

## Features

- On an application load successfully user will able to see form for enter details information and map on ui.
- I also added validation for pickup and delivery address,country,volume count, pickup and delivery date.
- User can see his user name on header right side.
- I include google map for pickup and delivery locations,which provide zoom in and zoom out facilities.
- Date and time picker added to choose specific date and time.

## Technology

### Frontend

- Frontend stack is **React-typescript,hooks and Scss,Font Awesome icons and React hook from for validation purpose.**
- Application cover unit test cases in **React testing library and jest (30 test cases in total)** which covers all **input controls with different conditions**
- **Goole Map** used for showing direction purpose.
- Runs the app in the development mode.
- Open **http://localhost:3000** to view it in the browser.

## Installation

```sh
clone repo
cd quickcargo
npm install
npm start
```

## Run Test

```sh
npm test
```

## Preview

![Demo](image/demo.png?raw=true 'Title')
