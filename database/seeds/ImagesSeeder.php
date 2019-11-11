<?php

use Illuminate\Database\Seeder;
use App\Image;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Image::truncate();
        
        Image::insert([
            ['path' => '/public/images/alfredo_zoodles'],
            ['path' => '/public/images/almond_berry_pie'],
            ['path' => '/public/images/avocado_blueberry_walnut_salad'],
            ['path' => '/public/images/avocado_salad'],
            ['path' => '/public/images/bbq_brisket_chop_salad'],
            ['path' => '/public/images/black_truffle_mac_and_cheese'],
            ['path' => '/public/images/bread_and_spread'],
            ['path' => '/public/images/cajun_wings_with_bleu_cheese_dip'],
            ['path' => '/public/images/ceviche_with_celery'],
            ['path' => '/public/images/chicken_gorgonzola_risotto'],
            ['path' => '/public/images/fallow_deer_loin'],
            ['path' => '/public/images/fois_gras'],
            ['path' => '/public/images/gypsy_chicken'],
            ['path' => '/public/images/lox_salad'],
            ['path' => '/public/images/miso_ramen'],
            ['path' => '/public/images/mushroom_risotto'],
            ['path' => '/public/images/pickled_camembert'],
            ['path' => '/public/images/pork_loin_with_salad'],
            ['path' => '/public/images/pork_tenderloin_salad'],
            ['path' => '/public/images/pulled_pork_salad'],
            ['path' => '/public/images/roasted_pork_tenderloin'],
            ['path' => '/public/images/salmon_fillet'],
            ['path' => '/public/images/shio_ramen_no_noodles'],
            ['path' => '/public/images/veal_and_ribs'],
            ]);
    }
}
