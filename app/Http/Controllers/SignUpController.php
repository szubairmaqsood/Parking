<?php

namespace App\Http\Controllers;

use App\Models\UserInformation;
use Illuminate\Http\Request;

class SignUpController extends Controller
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

        if (UserInformation::where('email', '=', $request->input("Email"))->count() > 0) {
            // user found
            //error_log('This email already exists');
            return redirect('/SignUp')->with('error','Email already in Use');
         }

        else{

        $UserInformation=new UserInformation();
        $UserInformation->name=$request->input("Name");
        $UserInformation->email=$request->input("Email");
        $UserInformation->password=$request->input("Password");
        $UserInformation->RoleID=$request->input("role");
        $saved=$UserInformation->save();
        if(!$saved){
            return redirect('/SignUp')->with('error','Some error has occured,Please try again');
        }
        else{
            return 'Sign Up SUCCESS';
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
