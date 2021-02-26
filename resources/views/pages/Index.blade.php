<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
         <!-- Latest compiled and minified CSS -->
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
         <!-- jQuery library -->
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
         <!-- Latest compiled JavaScript -->
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <title>{{config('app.name','Parking App')}}</title>
    </head>


    <body class="antialiased">
    <div class="container">
       <h1>This is parking App Home Screen</h1>
      <a href="/SignIn"> <button type="button" class="btn btn-primary">Sign In</button></a>
      <a href="/SignUp"> <button type="button" class="btn btn-primary">Sign Up</button></a>
    </div>
       
    </body>
</html>
