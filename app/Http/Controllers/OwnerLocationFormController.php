<?php

namespace App\Http\Controllers;
use App\Models\Location;
use Illuminate\Http\Request;

class OwnerLocationFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        if (Location::where('name', '=', $request->input("Name"))->count() > 0) {
            // user found
            //error_log('This email already exists');
            return redirect('/OwnerLocationForm')->with('error','Name already in Use');
         }

        else{

        if($request->input("OpeningTime")>$request->input("ClosingTime"))
        {
            return redirect('/OwnerLocationForm')->with('error','Opening Time should be less then Closing time');
        }

        else{
        $Location=new Location();
        $Location->name=$request->input("Name");
        $Location->Latitude=$request->input("Latitude");
        $Location->Longitude=$request->input("Longitude");
        $Location->NumberOfParkingSlots=$request->input("NumberOfParkingSpots");
        $Location->PerSpotCharge=$request->input("PerSpotCharge");
        $Location->OpeningTime=$request->input("OpeningTime");
        $Location->ClosingTime=$request->input("ClosingTime");
        $Location->LocationStatus=1;
        $Location->OwnerID=1;
        $saved=$Location->save();

        if(!$saved){
            return redirect('/OwnerLocationForm')->with('error','Some error has occured,Please try again');
        }
        else{
            return 'Location Added Successfully';
        }
    }
    }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
