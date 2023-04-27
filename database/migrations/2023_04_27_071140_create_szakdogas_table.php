<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Szakdoga;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szakdogas', function (Blueprint $table) {


            $table->id();
            $table->string("szakdoga_nev");
            $table->string("githublink");
            $table->string("oldallink");
            $table->string("tagokneve");
            $table->timestamps();
        });
        Szakdoga::create(['szakdoga_nev'=>'Atlantis Mozi','githublink'=>'github.com','oldallink'=>'oldal.hu', 'tagokneve'=>'Váradi Ákos, Szikora Melinda, Szabó Anett']);
        Szakdoga::create(['szakdoga_nev'=>'Atlantis Mozi','githublink'=>'github.com','oldallink'=>'oldal.hu', 'tagokneve'=>'Váradi Ákos, Szikora Melinda, Szabó Anett']);
        Szakdoga::create(['szakdoga_nev'=>'Atlantis Mozi','githublink'=>'github.com','oldallink'=>'oldal.hu', 'tagokneve'=>'Váradi Ákos, Szikora Melinda, Szabó Anett']);
        Szakdoga::create(['szakdoga_nev'=>'Atlantis Mozi','githublink'=>'github.com','oldallink'=>'oldal.hu', 'tagokneve'=>'Váradi Ákos, Szikora Melinda, Szabó Anett']);
        Szakdoga::create(['szakdoga_nev'=>'Atlantis Mozi','githublink'=>'github.com','oldallink'=>'oldal.hu', 'tagokneve'=>'Váradi Ákos, Szikora Melinda, Szabó Anett']);
        Szakdoga::create(['szakdoga_nev'=>'Atlantis Mozi','githublink'=>'github.com','oldallink'=>'oldal.hu', 'tagokneve'=>'Váradi Ákos, Szikora Melinda, Szabó Anett']);
         
        }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szakdogas');
    }
};
