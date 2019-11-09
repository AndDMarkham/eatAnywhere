<?php

use Illuminate\Database\Seeder;
use App\Restaurant;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('cs_CZ');
        Restaurant::truncate();
        
        for ($i = 0; $i < 10; $i++) {
            $restaurant = new Restaurant;

            $restaurant->insert([
                'name' => $faker->company(),
                'address' => $faker->streetAddress(),
                'latitude' => $faker->latitude($min = 50.02, $max = 50.12),
                'longitude' => $faker->longitude($min = 14.28, $max = 14.54),
                'phone' => $faker->phoneNumber(),
                'website_url' => $faker->domainName()
            ]);

        }
    }
}
