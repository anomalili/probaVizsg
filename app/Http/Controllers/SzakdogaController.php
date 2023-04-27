<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Szakdoga;

class SzakdogaController extends Controller
{
 public function index(){
    $reg = Szakdoga::all();
    return $reg;
 }   
 public function torles( $id){
    Szakdoga::find($id)->delete();
 }   
 public function modositas(Request $request, $id){
    $update = Szakdoga::find($id);
    $update->szakdoga_nev =$request->szakdoga_nev ;
    $update->githublink =$request->githublink ;
    $update->oldallink =$request->oldallink ;
    $update->tagokneve =$request->tagokneve ;
 }   
 public function tarol(Request $request){
    $store = new Szakdoga();
    $store->szakdoga_nev = $request->szakdoga_nev;
    $store->githublink = $request->githublink;
    $store->oldallink = $request->oldallink;
    $store->tagokneve = $request->tagokneve;
    $store->save();
        return redirect('/')->with('status', 'Sikeres!');
 }   
}
