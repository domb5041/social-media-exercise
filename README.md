# developer-exercise

This is a Rails 6 web application setup with React 17 and Typescript 4. 

Created for you is an API for 3 resources; `User`, `Post`, `Comment`, and `Image`.

Your challenge is to create a kind-of social media platform in React using this API. You could create an instagram clone, but it's encouraged you come up with your own design.

Feel free to expand the API and add more functionality, but it's not required.

## API
[API Documentation](doc/api/index.md)

_____

### Getting started

Fork this repo and run the following commands from inside the directory to get setup.

#### Setup rails
##### Install ruby (using rbenv)
```
brew install rbenv
```
```
rbenv install
```
#### Install gems
```
gem install bundler
```
```
bundle install
```
#### Setup database
```
rails db:setup
```

#### Setup npm
##### Install node (using nvm)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
```
nvm install
```
##### Install packages
```
nvm use
```
```
npm install -g yarn
```
```
yarn install
```

_____

### Starting the server
This will start rails and the webpack-dev-server. Webpack is setup with hot reloading.
```
foreman start
```

_____

### Javascript

Webpack will compile plain Javascript (.js/.jsx) and Typescript (.ts/.tsx) files. 

React components live in [app/javascript/components](app/javascript/components). You can either use rails views to embed the components (eg. [app/views/home/show.html.erb](app/views/home/show.html.erb)) or setup a single page web app using `react-router` (or something similar). 

### CSS

Rails is setup with bootstrap 4 to get you started. Feel free to remove bootstrap and add the library of your choosing (or go fully custom if thats how you roll). Custom CSS can be added in [app/assets/stylesheets/application.scss](app/assets/stylesheets/application.scss).

_____

## Submitting your work

Once you're done add [@mrmattnewell](https://github.com/mrmattnewell), [@t-c-k](https://github.com/t-c-k), and [@etherz10](https://github.com/etherz10) to your forked repo for review.
