<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $passwords = [
            '12345678',
            '87654321',
            '11223344',
            '55667788',
            'password',
            'drowssap',
            '44332211',
            '88776655',
            'fuckthis',
            'sihtkcuf'
        ];

        $faker = Faker\Factory::create('cs_CZ');
        User::truncate();
        
        for ($i = 0; $i < count($passwords); $i++) {
            $restaurant = new User;

            $restaurant->insert([
                'first_name' => $faker->firstName(),
                'last_name' => $faker->lastName(),
                'user_name' => $faker->userName(),
                'date_of_birth' => $faker->date(),
                'email' => $faker->email(),
                'password' => Hash::make($passwords[$i])
            ]);
        }
    }
}
