# Coop Exchange Task Manager

Welcome to the Coop Exchange Task Manager application. This application allows you to create, edit and manage tasks. You can also add notes and attachments to your tasks and receive an email when a new task is created.

I have opted to make this is a single page application using Vue.js and Inertia.js. I decided on Vue.js as it is a very scalable framework and is very easy to use. I opted for Inertia.js as it allows me to use Vue.js in a Laravel application without having to create an API.

For scale and growth, I believe Vue is the best option as it is very easy to maintain and there is a large pool of developers who are familiar with the framework.

Many of the features of the application are using the reactive nature of Vue.js to update the UI without having to refresh the page. This makes the application feel more like a desktop application than a web application. These features would not be possible with standard blade templates, this includes the ability to add notes to tasks and quickly edit the task.

The application also includes updating of profile information, password, 2 factor authentication and browser sessions.

For the attachments feature I have implemented a package from Spatie called [Laravel Media Library](https://spatie.be/docs/laravel-medialibrary/v11/introduction). This package allows you to easily store media against a model and store it in the database.

The below documentation will allow you to run the application locally however I have also hosted the application on AWS using Octane on the backend for fast resonse times. 
You can view the application here: https://coop-exchange-task-manager.jj-software.co.uk/login

If you would like to register this can be done here: https://coop-exchange-task-manager.jj-software.co.uk/register or alternatively a test user is setup with seed data, you can login using the following credentials:

- Email: test@example.com
- Password: test123


## Documentation

To get started clone the GitHub repo using the below command:

``` bash
git clone https://github.com/jsandfordhughes/CoopExchangeTaskManager.git
```

Once downloaded, cd into the folder and run the following command

``` bash
composer install && npm install && npm run build
```

Now you need to copy the .env.example file to .env.

Once you have the .env file setup you need to run the migrations and seeders

``` bash
php artisan migrate --seed
```

You are now ready to use the application. To start a local webserver run

``` bash
php artisan serve
```

The feedback in the terminal will tell you what address and port the server is running on. You can now access the application at this address.

The default login details are: 
- Email: test@example.com
- Password: test123

## Testing

To run the tests

``` bash
php artisan test
```
