# Friesland School 🏫

https://www.frieslandschool.com/

Built with Gatsby with a headless Wordpress backend
CSS is done wih Styled Components
Uses Apollo Client to get live Twitter data from an graphql endpoint I created on Heroku

## Index Page

Uses reusable components to display different posts based on category types.

## Wordpress Content

Creates the pages, posts and archive pages from templates using the createpages method with gatsby-node

## Netlify Serverless function

Built, but not being used is a serverless function that gets live Instagram data for displaying on the home page. Not used while school creates an Instagram account. Currently commented out.
