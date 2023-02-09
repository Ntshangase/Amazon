# Installation Steps



## Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```

# listen 
use the command: stripe listen --forward-to localhost:3000/api/webhook
-make sure the key you get after running above code is the same as the one in the .env.local file.
-For stripe payment use: ''424242424242'' since we are in test mode there and for the rest you can use any random information

.You should see two yellow '' warn - ....'' messaged after running npm run dev if not please open and save the tailwind.config.js file