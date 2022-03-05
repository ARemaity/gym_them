<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request) {
            $fields = Validator::make($request->only('email','password'), [
            'email' => 'email:rfc|required|string',
            'password' => 'required|string',
        ]);
        if ($fields->fails()) {
                        return response(['message'=>'Invalid Credentials'], 400);




        }

        // Check email
        $user = User::where('email',$request->email)->first();

        // Check password
        if(!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
             
            'token' => $token
        ];

        return response($response, 201);
    }

public function logout(){

    auth()->user()->tokens()->delete();//ignore the error

}
// public function register(Request $request) {
//     $fields = $request->validate([
//         'name' => 'required|string',
//         'email' => 'required|string|unique:users,email',
//         'password' => 'required|string'
//     ]);

//     $user = User::create([
//         'name' => $fields['name'],
//         'email' => $fields['email'],
//         'password' => bcrypt($fields['password'])
//     ]);

//     $token = $user->createToken('myapptokenabo7akeya')->plainTextToken;

//     $response = ['token' => $token];

//     return response($response, 201);
// }

}
 