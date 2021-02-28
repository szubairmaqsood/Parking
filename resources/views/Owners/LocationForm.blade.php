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
        <title>Enter Location Form</title>
    </head>

     
    <body class="antialiased">
      @include('inc.messages');
      {{ Form::open(array('url' => 'OwnerLocationFormSubmit', 'method' => 'post')) }}
    <div class="container">
       <h2>Enter Location Information</h2>

       <div class="form-group">
        <label for="Name">Name:</label>
        <input type="text" class="form-control" id="Name" name="Name" required>
      </div>

      <div class="form-group">
        <label for="Latitude">Latitude:</label>
        <input type="text" class="form-control" id="Latitude" name="Latitude" required>
      </div>

      <div class="form-group">
        <label for="Longitude">Longitude:</label>
        <input type="text" class="form-control" id="Longitude" name="Longitude" required>
      </div>

      <div class="form-group">
        <label for="NumberOfParkingSpots">Number of Parking Spots:</label>
        <input type="Number" class="form-control" id="NumberOfParkingSpots" name="NumberOfParkingSpots" min=0 required>
      </div>

      <div class="form-group">
        <label for="PerSpotCharge">Per Spot Charge:</label>
        <input type="Number" class="form-control" id="PerSpotCharge" name="PerSpotCharge" min=0 required>
      </div>

      <label for="OpeningTime">Select Opening Time:</label>
      <input type="time" id="OpeningTime" name="OpeningTime">

      <label for="ClosingTime">Select a Closing:</label>
      <input type="time" id="ClosingTime" name="ClosingTime">





    

    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div id="root">
     </div>
    </div>
      <div>
      </form>



    </body>
    <script>
    $(window).on('load', function() {
    <script  type="text/javascript" src="{{ asset('js/app.js')}}"></script>
    </script>
</html>
