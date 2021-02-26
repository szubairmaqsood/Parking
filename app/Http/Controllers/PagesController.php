<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //This will show Home Screen Of App
    public function Index()
    {
        return view('pages.index');
    }

    //This will show SignIn Of App
    public function SignIn()
    {
        return view('pages.SignIn');
    }


    //This will show Sign Up Screen Of App
    public function SignUp()
    {
        return view('pages.SignUp');
    }
}
