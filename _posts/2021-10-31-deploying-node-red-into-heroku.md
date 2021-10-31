---
date: 2021-10-31 18:30:24
layout: post
title: Deploying Node-RED into Heroku
description: Deploying Node-RED into Heroku
image: /assets/img/uploads/node-red.png
category: blog
tags:
  - Heroku
  - Node-red
  - IoT
  - Arduino
author: e-lab innovations
paginate: false
---
Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.

It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single click.

**Step 1: Create a Heroku account**

To deploy an app on Heroku, you need an account on the platform. It’s quick and easy (and totally free) to sign up. Go ahead and do that now at signup.heroku.com. We’ll wait here.

![Herku Sign Up Page](/assets/img/uploads/heroku-signup.png "Herku Sign Up Page")

**Step 2: Deploy with a Button**

After you're logged in to your shiny new Heroku account, you'll find yourself in the Heroku Dashboard. It says, "Getting Started with Heroku". If you're new to Heroku, select one of the icons that represent your programming language and follow the Getting Started guide to create a new app.

But Heroku offers a way for you to get started even quicker by using a tool called Buttons. With just the click of a button, you can deploy a preconfigured app that has everything it needs, including code, configurations, and add-ons. By creating your first Heroku app with a button, you get a flavour for how easy the platform is to use. You also get a real, functioning Node.js app that you can explore and modify to learn more.

For deploying Node-red, you can directly click the below **Deploy To Heroku** button or go to the [Node-red Heroku app](https://github.com/joeartsea/node-red-heroku) by [@joeartsea](https://github.com/joeartsea) available in Github and read the instructions.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/joeartsea/node-red-heroku)

![Heroku - Create New App page](/assets/img/uploads/heroku-create-app.png "Heroku - Create New App page")

On the Create New App window of Heroku, you want to fill in the required details. By default, the editor is open for anyone to access and modify flows. So you want to fill additional Config Vars for securing the Node-red.

1. App Name: Enter a name to your Node-red app you wish
2. Choose a region - Select a region you wish
3. NODE_RED_PASSWORD: the username to secure the editor with
4. NODE_RED_PASSWORD - the password to secure the editor with

After filling in all the details, click the **Deploy App** button on the bottom.

![Heroku - result](/assets/img/uploads/hroku-deploy-success.png "Heroku - result")

After successful deployment, you can view your Node-red app by clicking the View button. 

![Node-red - landing page](/assets/img/uploads/node-red-landing-page.png "Node-red - landing page")

By clicking **Go to your Node-RED flow editor** available on the landing page will redirect to the actual editor page.

![Node-red - Login page](/assets/img/uploads/node-red-login-page.png "Node-red - Login page")

By entering the username and password you can access the editor.

There is a chance to show '**wrong password'** on the first time, for solving the problem you can update the password on the Heroku dashboard section.

1. Got [dashboard.heroku.com](https://dashboard.heroku.com/)
2. Select the Node-red app
3. Got to settings sections
4. Scroll to Config Vars and update the password

![Heroku - Update Config Vars](/assets/img/uploads/heroku-update-config-vars.png "Heroku - Update Config Vars")

Now you can use your Node-red app hosted in Heroku.

![Node-red - Flow editor](/assets/img/uploads/node-red-flow-editor.png "Node-red - Flow editor")