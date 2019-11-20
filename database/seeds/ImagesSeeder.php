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
            ['path' => '/public/images/alfredo_zoodles.jpg'],
            ['path' => '/public/images/almond_berry_pie.jpg'],
            ['path' => '/public/images/avocado_blueberry_walnut_salad.jpg'],
            ['path' => '/public/images/avocado_salad.jpg'],
            ['path' => '/public/images/bbq_brisket_chop_salad.jpg'],
            ['path' => '/public/images/black_truffle_mac_and_cheese.jpg'],
            ['path' => '/public/images/bread_and_spread.jpg'],
            ['path' => '/public/images/cajun_wings_with_bleu_cheese_dip.jpg'],
            ['path' => '/public/images/ceviche_with_celery.jpg'],
            ['path' => '/public/images/chicken_gorgonzola_risotto.jpg'],
            ['path' => '/public/images/fallow_deer_loin.jpg'],
            ['path' => '/public/images/fois_gras.jpg'],
            ['path' => '/public/images/gypsy_chicken.jpg'],
            ['path' => '/public/images/lox_salad.jpg'],
            ['path' => '/public/images/miso_ramen.jpg'],
            ['path' => '/public/images/mushroom_risotto.jpg'],
            ['path' => '/public/images/pickled_camembert.jpg'],
            ['path' => '/public/images/pork_loin_with_salad.jpg'],
            ['path' => '/public/images/pork_tenderloin_salad.jpg'],
            ['path' => '/public/images/pulled_pork_salad.jpg'],
            ['path' => '/public/images/roasted_pork_tenderloin.jpg'],
            ['path' => '/public/images/salmon_fillet.jpg'],
            ['path' => '/public/images/shio_ramen_no_noodles.jpg'],
            ['path' => '/public/images/veal_and_ribs.jpg'],
            ]);
    }
}
