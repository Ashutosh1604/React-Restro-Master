import React from 'react'
import './Menu.css'
import vegStarter from './photos/veg-starter.jpg'
import nonVegStarter from './photos/nonveg-starter.jpg'
import vegMain from './photos/veg-main.jpg'
import nonVegMian from './photos/nonveg-main.jpg'
import drink from './photos/drink (2).jpg'
import sweets from './photos/sweets.jpg'

export default function Menu() {
  return (
    <>
    {/*STARTER*/}
    <div className="container">
    <div class="menu mt-5">
        <div class="menu-text ">
            <h1 class="font1">MENU</h1>
            <hr/>
        </div>
        <h1 class="heading">STARTERS</h1>

        <div class="starter-items row">

            <div class="veg-starters col-md-4 ">

                <figure><img src={vegStarter} alt="veg"/></figure>


                <div class="v-item">

                    <h2>PANEER TIKKA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>

                <div class="v-item">
                    <h2>DAHI VADA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>PANI PURI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>MASALA DOSA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>IDLI SAMBAR</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>BHEL PURI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>BREAD PADORA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>ALOO SAMOSA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
            </div>


            <div class="nonveg-starters col-md-4">
                <figure><img src={nonVegStarter} alt="nonveg"/></figure>

                <div class="nv-item">
                    <h2>CHICKEN TIKKA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>SEEKH KEBABS</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>FISH & CHICKEN PAKORA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>TANDOORI PRAWNS</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHICKEN SPRING ROLL</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHICKEN KEBAB</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHICKEN PATTIES</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>MUTTON KEBAB</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
            </div>


        </div>

    </div>

    </div>





   <div className="container">
    <div class="main-course ">
        <h1 class="heading mt-5 mb-5">MAIN COURSE</h1>
        <div class="maincourse-items row ">

       
            <div class="veg-main col-md-4">

                <figure><img src={vegMain} alt="veg"/></figure>


                <div class="v-item">

                    <h2>BUTTER NAAN</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>

                <div class="v-item">
                    <h2>PANEER MASALA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>KADAHI PANEER</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>VEG BIRYANI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>MIX VEG</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>RUMALI ROTI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>KOFTE</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>DAAL MAKHANI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>ALOO PARATHA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>SOYA CHAAP</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>RAITA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>MIX SALAD</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>YELLOW DAAL</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>RAJMA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="v-item">
                    <h2>BASMATI RICE</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
            </div>


            <div class="nonveg-main col-md-4">
                <figure><img src={nonVegMian} alt="nonveg"/></figure>

                <div class="nv-item">
                    <h2>BUTTER CHICKEN</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>MUTTON CURRY</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>FISH CURRY</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHICKEN BERIYANI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>PRAWN CURRY</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHETTINAD BIRYANI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>TANDOORI CHICKEN</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>BAKED FISH</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHICKEN CHETTINAD</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>CHICKEN FRIED RICE</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>EGG BUTTER MASALA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>EGG KEEMA</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>FISH PULUSU</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>GONGURA CHICKEN FRY</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
                <div class="nv-item">
                    <h2>HYDERABADI BIRYANI</h2>

                    <h3>$20.00</h3>
                </div>
                <hr/>
            </div>
            </div>
            </div>
   </div>
    






   <div class="Drink-desert ">
                <h1 class="heading mt-5 mb-5">DRINKS & DESERTS</h1>
                <div class="drink-desert-items row">
        
                    <div class="drinks col-md-4">
        
                        <figure><img src={drink} alt="drink"/></figure>
        
        
                        <div class="drink">
        
                            <h2>MASALA CHAI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
        
                        <div class="drink">
                            <h2>LASSI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>JAL JEERA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>ROOH AFZA SHARBAT</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>JIGARTHANDA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>SHIKANJI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>AAM PANNA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>BUTTER MILK</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>BADAM MILK</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>FILTER COFFEE</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>SUGAR CANE JUICE</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>CHAACH</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>NOON CHAI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>BURANSH JUICE</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="drink">
                            <h2>QAHWA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                    </div>
        
        
                    <div class="Deserts col-md-4">
                        <figure><img src={sweets} alt="desert"/></figure>
        
                        <div class="desert">
                            <h2>GULAB JAMUN</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>GAJAR KA HALWA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>SANDESH</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>MODAK</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>AAM SHRIKHAND</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>RAS MALAI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>PAYASAM</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>SHAHI TUKDA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>PHIRNI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>BADAM KULFI</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>MOONG DAAL HALWA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>THANDAI MOUSSE</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>KIMAMI SEWAIYAN</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>KESAR GUJIYA</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                        <div class="desert">
                            <h2>SEVIYAN KHEER</h2>
        
                            <h3>$20.00</h3>
                        </div>
                        <hr/>
                    </div>
                    </div>
                    </div>
                    


    </>
  )
}
