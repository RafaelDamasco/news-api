<p align="center">
  <img src="https://user-images.githubusercontent.com/29737013/192361073-4c510cd1-c7d9-496a-8d86-c3eb5b778957.png" />
</p>

## The News API

This is a simple api to query the news from the api Gnews <https://gnews.io/>

## Clone this repo

    git clone https://github.com/RafaelDamasco/the-news-api

## Go to the server folder

    cd server

## Install

    npm install

## Run the api

    npm run start:dev

# Testing the API

You can use the Postman to test the api, but first you need to register on <https://gnews.io/> to receive the API_KEY. Then create an .env and put your api-key on a variable called API_TOKEN

## Get list of breaking news

### Request

`GET http://localhost:5000/news`

### Response

![image](https://user-images.githubusercontent.com/29737013/192366803-9f08a5bb-4611-451d-b519-a6d1ac21753d.png)

## Searching for the word 'CEO'.

### Request

`GET http://localhost:5000/news/search?q=CEO`

![image](https://user-images.githubusercontent.com/29737013/192367121-292ab75c-31d2-4e92-a737-bf42967e4946.png)

## Searching for the word 'CEO', on title, or if you want you can search in the description (ex: in=description).

### Request

`GET http://localhost:5000/news/search?in=title&q=CEO`

![image](https://user-images.githubusercontent.com/29737013/192367532-044fca9c-1ddc-418b-94ca-c0595007d9fb.png)

## Searching for the word 'CEO', on title, in Portuguese.

### Request

`GET http://localhost:5000/news/search?in=title&q=CEO&lang=pt`

![image](https://user-images.githubusercontent.com/29737013/192367722-374efdff-83f0-4882-a7b8-97e2530b313b.png)

## Front-end (Developing...)
