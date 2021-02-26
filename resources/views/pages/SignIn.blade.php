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
        <title>Sign In</title>
    </head>

     
    <body class="antialiased">
      @include('inc.messages');
      {{ Form::open(array('url' => 'SignInSubmit', 'method' => 'post')) }}
    <div class="container">
       <h2>Sign In</h2>

       <div class="form-group">
        <label for="Email">Email:</label>
        <input type="text" class="form-control" id="Email" name="Email" required>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" name="Password" required>
      </div>

      <button type="submit" class="btn btn-primary">Sign In</button>
      <div>
      </form>



    </body>
</html>
