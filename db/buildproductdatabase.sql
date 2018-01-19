create table products
(product_id serial primary key
, product_name varchar(40)
, product_description text
, product_features text
, product_dimensions varchar(40)
, product_price numeric(10,2)
, category_id integer)

insert into products
(product_name, product_description, product_features, product_dimensions, product_price, category_id)
values
('Nautilus'
,'It’s obvious that Nautilus is no ordinary loudspeaker, even before you listen to it. That’s because it’s the product of no ordinary speaker manufacturer. The Nautilus is the end result of the most ambitious research and development project Bowers & Wilkins has ever undertaken – to create, as near as possible, the perfect loudspeaker'
,'Now recognized as a design classic, the original Nautilus™ is not just our flagship product, but the very pinnacle of technological innovation to which all others must aspire. Traditionally available in Silver, Black or Midnight Blue. Special finishes available on request.'
,'47.6" X 16.9" X 43.5"'
,29999.99,1),
('800 D3'
,'The flagship model in the 800 Series Diamond range is more than a speaker. It’s the culmination of half a century of acoustic research and engineering, and the pinnacle of audio performance, offering unmatched levels of clarity and realism.'
,'3-way floorstanding optimized matrix vented-box system. 1 x 1" diamond dome tweeter, 1 x 6" Continuum cone FST™ midrange, 2 x 10" Aerofoil cone bass units. Power handling 1000W.'
,'47.9" x 16.3" x 24.1"'
,14999.99,1),
('802 D3'
,'The 802 D3 delivers pristine, high-performance sound in any environment. Its Diamond tweeter partners with a Continuum cone to ensure revealing natural sound that will leave you speechless.'
,'3-way floorstanding optimized matrix vented-box system. 1 x 1" diamond dome tweeter, 1 x 6" Continuum cone FST™ midrange, 2 x 8" Aerofoil cone bass units. Power handling 500W.'
,'47.7" x 15.4" x 23"'
,10999.99,1),
('803 D3'
,'The 803 D3 is a completely new speaker. The most compact headed model Bowers & Wilkins has ever made, it boasts many of the qualities of its larger siblings, but in a room-friendly size.'
,'3-way floorstanding optimized matrix vented-box system. 1 x 1" diamond tweeter, 1 x 5" Continuum cone FST™ midrange, 2 x 7" Aerofoil cone bass units. Power handling 500W.'
,'45.7" x 13.1" x 19.6"'
,8499.99,1),
('804 D3'
,'The 804 D3 delivers incredibly high-performance sound in a traditional loudspeaker form with a smaller footprint.'
,'3-way floorstanding optimized matrix vented-box system. 1 x 1" diamond tweeter, 1 x 5" Continuum cone FST™ midrange, 2 x 6.5" Aerofoil cone bass units. Power handling 200W.'
,'40.1" x 9.4" x 13.6" '
,4499.99,1),
('805 D3'
,'The 805 D3 is the only loudspeaker of its size and type to feature studio-grade technology in the form of a Diamond dome tweeter.'
,'2-way bookshelf optimized matrix vented-box system. 1 x 1" diamond tweeter, 1 x 6.5" Continuum cone bass midrange. Power handling 120W.'
,'16.7" x 9.4" x 13.6"'
,2999.99,1),
('HTM1 D3'
,'The HTM1 D3 is the perfect centre for people who demand the very best in home theatre performance.'
,'3-way optimized matrix vented-box system. 1 x 1" diamond tweeter, 1 x 6" Continuum cone FST™ midrange, 2 x 8" Aerofoil cone bass units. Power handling 500W.'
,'13" x 33.5" x 13.5"'
,5999.99,1),
('HTM2 D3'
,'The highly capable HTM2 D3 centre speaker is the ideal partner for the smaller speakers in the 800 Series Diamond range'
,'3-way optimized matrix vented-box system. 1 x 1" diamond tweeter, 1 x 5" Continuum cone FST™ midrange, 2 x 6.5" Aerofoil cone bass units. Power handling 200W.'
,'11.9" x 28.4" x 12.8"'
,3999.99,1),
('DB1'
,'The DB1 is the most advanced subwoofer Bowers & Wilkins has ever produced. Perfect for home theatre and Hi-Fi.'
,'Active balanced-drive closed-box subwoofer system. 2000W Class D Hypex amplifier, 2 x 12" Aerofoil cone drive units in a balanced configuration, Digital preamplifier with Dynamic EQ, App-based set-up and BT-LE control.'
,'18.1" x 16.9" x 16.1"'
,4499.99,1),
('702 S2'
,'With three dedicated Aerofoil™-Profile bass drivers and a solid body tweeter housing on top, the 702 S2 brings the goosebump-inducing clarity and detail of studio-quality sound to your home audio set-up.'
,'3-way system, 1" Decoupled Carbon DomeTM solid body tweeter on top, 6" ContinuumTM cone FSTTM midrange, decoupled, 3 x 6.5" Aerofoil Profile bass units. Power handling 300W.'
,'42.8" x 7.9" x 14.3"'
,2249.99,1),
('703 S2'
,'A big speaker in every sense, the 703 S2 has both the grace and power to bring every element of your music to life, from delicate nuances to monstrous bass lines.'
,'3-way system, 1" Decoupled Carbon Dome tweeter, 6" Continuum cone FST midrange, decoupled, 2 x 6.5" Aerofoil Profile bass units. Power handling 200W.'
,'39" x 7.9" x 12.6"'
,1749.99,1),
('704 S2'
,'Looks can be deceiving. Despite its slim dimensions, the 704 S2 has the commanding presence of a much larger speaker, thanks to advanced technologies such as a dedicated Continuum™ cone FST™ midrange'
,'3-way system, 1" Decoupled Carbon Dome tweeter, 5" Continuum cone FST midrange, decoupled, 2 x 5" Aerofoil Profile bass units. Power handling 150W.'
,'36.4" x 6.5" x 10.9"'
,1249.99,1),
('705 S2'
,'This uncompromising two-way speaker reveals subtle nuances in music others miss. Its high performance features include a solid body tweeter-on-top design borrowed from the 800 Series Diamond. Price is per pair.'
,'2-way system, 1" Decoupled Carbon Dome solid-body tweeter on top, 6.5" Continuum bass / midrange. Power handling 120W.'
,'16" x 7.8" x 12.2" '
,2499.99,1),
('706 S2'
,'With its larger bass/midrange unit, the 706 S2 delivers a sound that feels fully formed and entirely true to life, with outstanding detail, spaciousness and musical insight into recordings. Price is per pair.'
,'2-way system, 1" Decoupled Carbon Dome tweeter, 6.5" Continuum bass / midrange. Power handling 120W.'
,'13.4" x 7.8" x 11.9"'
,1799.99,1),
('707 S2'
,'The 707 S2’s two-way design makes for a sound that feels remarkably cohesive. That’s down to the purity of its components, including a Continuum™ cone bass/midrange driver and a Carbon Dome™ tweeter. Price is per pair.'
,'2-way system, 1" Decoupled Carbon Dome tweeter, 5" Continuum bass / midrange. Power handling 100W.'
,'11" x 6.5" x 10.9" '
,1199.99,1),
('HTM71 S2'
,'Designed to be paired with larger speakers in the range, this three-way centre-channel speaker delivers unprecedented power and transparency, for totally convincing voice reproduction.'
,'3-way system, 1" Decoupled Carbon Dome tweeter, 4" Continuum FST midrange, decoupled, 2 x 6.5" Aerofoil Profile bass drive units. Power handling 200W.'
,'8.6" x 23.2" x 11.9"'
,1349.99,1),
('HTM72 S2'
,'HTM72 is a great choice for home cinema set-ups in smaller rooms, where space is at a premium. Partner it up with the more compact 700 Series speakers, such as the 706 or the 704.'
,'2-way system, 1” Decoupled Carbon Dome tweeter, 2 x 5" Continuum bass/midrange. Power handling 120W.'
,'6.6" x 18.9" x 10.8"'
,799.99,1),
('DB4S'
,'Give your home cinema set-up the bass impact it deserves with DB4S – a powerful, classically styled single driver subwoofer that is a perfect match for the 700 Series.'
,'Active closed-box subwoofer system. 1000W Class D Hypex amplifier, 1 x 10" Aerofoil cone drive units, Digital preamplifier with Dynamic EQ, App-based set-up and BT-LE control.'
,'14.8" x 14.1" x 14.5"'
,799.99,1),
('683 S2'
,'The largest speaker in the 600 Series. This floorstander is ideal for audiophile stereo and home theatre applications in larger rooms, delivering serious performance and amazing value.'
,'Decoupled Double Dome 1" aluminum tweeter w/ Nautilus tube loading. 6" woven Kevlar cone FST midrange. 2 x 6.5" dual layer aluminum cone bass driver. Flowport.'
,'38.8" x 7.5" x 14.3"'
,824.99,1),
('684 S2'
,'Room-filling sound without a room-filling speaker cabinet. Slimmer than ever before, the 684 S2 offers an amazing combination of floorstander power, audio performance and unbeatable value.'
,'Decoupled Double Dome 1" aluminum dome tweeter w/ Nautilus tube loading. 2 x 5" Kevlar cone bass/mid. Flowport.'
,'36.2" x 6.3" x 9.2" '
,574.99,1),
('685 S2'
,'At home on a stand or bookshelf, the versatile 685 S2 is ideal for stereo and home theatre uses in most rooms. And performance is enhanced with the addition of a Decoupled Double Dome tweeter. Price per pair.'
,'Decoupled Double Dome 1" aluminum dome tweeter w/ Nautilus tube loading. 6.5" Kevlar cone bass/mid. Flowport.'
,'13.5" x 7.5" x 12.8"'
,699.99,1),
('686 S2'
,'Small is beautiful. The 686 S2 is the most compact speaker in the series, but don’t underestimate its power and precision. That is thanks to a new Decoupled Double Dome tweeter and improved design. Price per pair.'
,'Decoupled Double Dome 1" aluminum dome tweeter w/ Nautilus tube loading. 5" Kevlar cone bass/mid. Flowport.'
,'12.4" x 6.3" x 9" '
,549.99,1),
('HTM61 S2'
,'The perfect partner for the 683 S2 in a commanding home theatre system, this true three-way centre speaker features two 6.5-inch drivers, an FST midrange and a Decoupled Double Dome tweeter.'
,'Decoupled Double Dome aluminum dome tweeter w/ Nautilus tube loading. 4" Kevlar cone FST midrange. 2 x 6.5" dual-layer alumilnum cone bass. Flowport.'
,'8.6" x 23.2" x 12"'
,749.99,1),
('HTM62 S2'
,'Ideal at the centre of most home theatre systems, the HTM62 S2 is the smaller centre speaker that still excels at delivering power and precision.'
,'Decoupled Double Dome 1" aluminum dome tweeter w/ Nautilus tube loading. 5" Kevlar cone bass/mid. Flowport.'
,'6.3" x 18.9" x 11"'
,449.99,1),
('DS3'
,'The DS3 is a wall-mounted surround speaker that can operate in either ‘dipole’ or ‘monopole’ modes, to create an authentic all-enveloping effect of the auditorium in a large space.'
,'2-way closed-box selectable dipole / monopole surround speaker. 5" Kevlar bass / mid., 2 x 3" midrange / tweeter, 1" metal dome Nautilus tweeter. Power handling 100W.'
,'9.8" x 15" x 6"'
,849.99,1),
('ASW610'
,'The ASW610 has a long-throw 250mm driver that allows it to move the large volumes of air needed for high-quality low-frequency output, and its audiophile-standard 200W Class D amplifier keeps the compact unit running cool.'
,'Active, closed-box subwoofer, 1 x 10" paper/Kevlar® cone bass driver, 200 watt Class D amplifier.'
,'12.2" x 12.2" x 14.8"'
,649.99,1),
('ASW608'
,'For big sound in smaller spaces, you can’t beat the ASW608, the most compact of the 600 Series subwoofers.'
,'Active, closed-box subwoofer, 1 x 8" paper/Kevlar® cone bass driver, 200 watt Class D amplifier.'
,'10.2" x 10.2" x 13"'
,499.99,1),
('M-1'
,'The M-1 loudspeaker can be used on its own, with a subwoofer in a 2.1 system, or as part of one of our Mini Theatre systems.'
,'2-way vented monitor. 4" woven glass fiber cone bass / midrange. 1" tweeter. Swivel mounting bracket. Power handling 100W.'
,'9.8" x 4.5" x 6.4"'
,249.99,1),
('PV1D'
,'This curvaceous sub uses its 400 Watts of genuine power to deliver incredibly agile bass from an iconic design. It will change the way you view subwoofers.'
,'Active closed-box subwoofer. Pressure Vessel™ enclosure. 2 x 8" bass, 400W amplifier, 5 presets. DSP, RS232, trigger preset switching. Stereo Line In (2x RCA Phono) Speaker Level In (5m cable supplied) '
,'13.5" x 10.6" x 14.1"'
,1699.99,1),
('CCM8.5 D'
,'CCM8.5 D is a two-way in-ceiling speaker. It features a decoupled Diamond dome 25mm (1 inch) tweeter and a single 180mm (7-inch) bass/mid Continuum driver. The drivers are located in a continuously rotatable mini-baffle which allows the user to ‘toe in’ the drivers for the best performance.'
,'2-way in ceiling system. 1" Diamond Dome tweeter w/ Nautilus tube, 7" Continuum bass/midrange driver w/ anti-resonance plug. Rotatable aluminum mini-baffle allows toe-in. Flowport.'
,'13.8" x 13.8" x 7"'
,2999.99,1),
('CCM7.3'
,'The CCM7.3 is a three-way speaker featuring true audiophile technologies such as a Nautilus tube-loaded 25mm(1in) soft dome tweeter, a 100mm (4in) FST™ Kevlar® mid-range and two 130mm (5in) paper/Kevlar bass drivers.'
,'3-way in-ceiling system, 1" Nautilus tube loaded soft dome tweeter, 4" Blue Kevlar cone FST midrange, 2 x 5" Paper/Kevlar cone bass drivers'
,'14" x 14" x 7.2"'
,1499.99,1),
('CCM7.4'
,'The mid-point for in-ceiling speakers in the CI 700 range, the CCM7.4 features a wealth of high performance technologies, including two 130mm (5in) bass/midrange Kevlar® drivers.'
,'2-way in-ceiling system, 1"Nautilus Tube loaded soft dome tweeter, 2 x 5" Blue Kevlar cone bass/midrange'
,'14" x 14" x 7.2"'
,999.99,1),
('CCM7.5'
,'While it might be the entry level speaker in the CI700 in-ceiling range, the CCM7.5 certainly doesn’t skimp on high-spec features.'
,'2-way in-ceiling system, 1" Nautilus Tube loaded soft dome tweeter, 6" Blue Kevlar cone bass/midrange'
,'14" x 14" x 7.2"'
,749.99,1),
('CCM Cinema 7'
,'CCM Cinema 7 is a down-firing, in-ceiling speaker with drivers angled to the mounting surface so they can be directed to the listener.'
,'2-way in-ceiling system, 1" Nautilusswirl loaded aluminium dome tweeter,7" Blue Kevlar cone bass/midrange'
,'11.4" x 4.5"'
,699.99,1),
('CCM682'
,'A high performance ceiling-mount speaker featuring a 200mm (8in) Kevlar cone bass/midrange driver with a rigid die-cast chassis, and a Nautilus swirl-loaded aluminium dome tweeter.'
,'2-way in-ceiling system, 1in Nautilus swirl loaded aluminum dome tweeter, 8in Blue Kevlar cone bass/midrange. Features a  larger magnet and voice coil than CCMC83.'
,'9.9 x 4.8'
,599.99,1),
('CCM683'
,'The CCM683 features a 200mm (8in) Kevlar® cone bass/midrange driver and a Nautilus swirl-loaded aluminium dome tweeter that pivots for adjustable off-axis treble response.'
,'2-way in-celing system, 1in Nautilus Swirl loaded aluminum dome tweeter, 8in Blue Kevlar cone bass/midrange'
,'9.9 x 4.8'
,424.99,1),
('CCM684'
,'The entry point among the CI 600 range of 8in in-ceiling speakers, the two-way CCM684 features a 200mm (8in) woven glass fibre cone bass/midrange driver and a soft dome tweeter.'
,'2-way in-ceiling system, 1in soft dome tweeter, 8in Black Glassfibre cone bass/midrange'
,'9.9 x 4.8'
,299.99,1),
('CCM662'
,'The top 6in in-ceiling speaker in the CI 600 series. This high-performance speaker features a Nautilus swirl-loaded 25mm (1in) aluminium dome tweeter that pivots for adjustable off-axis treble response.'
,'2-way in-ceiling system, 1in Nautilus swirl loaded aluminum dome tweeter, 6in Blue Kevlar cone bass/ midrange. Features a larger magnet and voice coil than CCM663.'
,'8 x 4.8'
,499.99,1),
('CCM663'
,'This high-performance 6in in-ceiling speaker features a Nautilus swirl-loaded 25mm (1in) aluminium dome tweeter that pivots for adjustable off-axis treble response.'
,'2-way in-ceiling system,  1in Nautilus swirl loaded aluminum  dome tweeter, 6in Blue Kevlar  cone bass/midrange '
,'8 x 4.8'
,349.99,1),
('CCM664'
,'The CCM664 features an adjustable, tilt-offset 25mm (1in) soft dome tweeter, and a 150mm (6in) woven glassfibre bass/midrange driver.'
,'2-way in-ceiling system, 1in soft dome tweeter, 6in Black Glassfiber cone bass/midrange'
,'8 x 4.8'
,274.99,1),
('CCM665'
,'The entry-point in the CI600 in-ceiling range, the CCM665 is perfect for smaller listening areas like bathrooms or kitchens.'
,'2-way in-ceiling system, 1in  soft dome tweeter, 6in Black Glassfiber cone bass/ midrange '
,'8 x 4.8'
,199.99,1),
('CCM632'
,'CCM632 is an in-ceiling speaker designed to deliver a full range of sound at high quality in a very small space.'
,'Single driver in-ceiling system, 3in paper cone full-range'
,'4.5 x 3.4'
,249.99,1),
('CCM382'
,'The CCM382 is a two way, in-ceiling loudspeaker.'
,'2-way in-ceiling system  1in soft dome tweeter  8in polypropylene cone bass/midrang'
,'9.8 x 3'
,199.99,1),
('CCM362'
,'The CCM362 is a two way, in-ceiling loudspeaker.'
,'2-way in-ceiling system 1in soft dome tweeter 6in polypropylene cone bass/midrange'
,'7.9 x 2.7'
,149.99,1),
('CWM8.3'
,'CWM 8.3 is a three-way, in-wall loudspeaker. It features a Carbon Braced Tweeter, a 5in Kevlar FST drive unit and two 7in carbon fibre reinforced Rohacell low frequency drivers.'
,'3-way in-wall system. 1" Diamond Dome tweeter w/ Nautilus tube,  5" Continuum FST midrange driver,  7" Aerofoil Bass drivers, Aluminium  mini baffle can be turned through  90 degrees. Flowport.'
,'34" x 9.4" x 3.4"'
,4499.99,1),
('CWM8.5'
,'CWM8.5 is a two-way in-wall speaker. It features a decoupled Diamond dome 25mm (1 inch) tweeter and a single 180mm (7-inch) bass/mid Continuum driver.'
,'2-way in-wall system. 1" Diamond Dome tweeter w/ Nautilus tube, 7" Continuum bass/midrange driver w/ anti-resonance plug. Flowport.'
,'15.5" x 9.09" x 3.4"'
,2499.99,1),
('CWM7.3'
,'Our top range in-wall speaker, the CWM7.3 is a mighty three-way unit bringing together tried and tested audiophile technologies with new innovations specially developed for custom installation'
,'3-way in-wall system, 1" Nautilus  Tube loaded soft dome tweeter, 4"  Blue Kevlar cone FST midrange,  2 x 6" paper Kevlar cone bass drivers'
,'28" x 9.9" x 3.6"'
,1499.99,1),
('CWM7.4'
,'The mid-point in the CI700 range of in-wall speakers, the CWM7.4 has a more manageable size than the CWM7.3, but comes with a similarly impressive set of features.'
,'2-way in-wall system, 1" Nautilus Tube loaded soft dome tweeter, 6" Blue Kevlar cone bass/midrange'
,'15.4" x 8.9" x 3.6"'
,799.99,1),
('CWM7.5'
,'The entry-point in our CI700 in-wall speaker range, the CWM7.5 is the smallest of the three speakers but comes packed with superb, reference-quality features.'
,'2-way in-wall system, 1" Nautilus Tube loaded soft dome tweeter, 5" Blue Kevlar cone bass/midrange'
,'13" x 7.4" x 3.6"'
,599.99,1),
('CWM Cinema 7'
,'CWM Cinema 7 contains four top-quality drivers and a tweeter. It is designed for use as a front left, centre or right speaker - for serious power and audio quality, with simple installation.'
,'2 1/2-way in-wall system, 1" Nautilus Tube loaded aluminum dome tweet, 4" Blue Kevlar cone bass/midrange, 4" paper cone bass'
,'5.8" x 23.5" x 3.1"'
,849.99,1),
('CWM663'
,'The CWM663 features a 150mm (6in) blue Kevlar® bass/midrange driver housed in a die-cast chassis, providing extra rigidity for cleaner, faster bass.'
,'2-way in-wall system, 1"  Nautilus tube loaded aluminum dome tweeter, 6" Blue Kevlar cone bass/midrange'
,'10.9" x 7.2" x 3.3"'
,374.99,1),
('CWM664'
,'The CWM664 has the same basic features and dimensions as the CWM663, but uses a soft dome Nautilus tube-loaded tweeter'
,'2-way in-wall system, 1" soft dome tweeter, 6" Black Glassfibre cone bass/midrange'
,'10.9" x 7.2" x 3.3"'
,274.99,1),
('CWM652'
,'The CWM652 features a 130mm (5in) blue Kevlar® bass/midrange driver is housed in a die-cast chassis, providing extra rigidity for cleaner, faster bass.'
,'2-way in-wall system, 1" Nautilus Tube loaded aluminum dome tweeter, 5" Blue Kevlar cone bass/midrange'
,'8.9" x 6" x 3.3"'
,274.99,1),
('CWM362'
,'The CWM362 is a two way, in-wall loudspeaker.'
,'2-way in-wall system, 1" soft dome tweeter, 6" polypropylene cone bass/ midrange'
,'10.9" x 7.2" x 2.5"'
,199.99,1),
('P9 Signature'
,'P9 Signature, our largest over-ear headphone, exemplifies all of the acoustic and design innovation skills we have amassed in our 50 year journey. P9 Signature raises the bar for performance from a mobile headphone.'
,'50th Anniversary, wired luxurious  over ear headphone with noise  isolation.'
,899.99,3),
('PX'
,'Noise cancelling wireless headphones. PX combines incredible sound with adaptable noise cancellation, 22-hour battery life and intuitive controls that respond naturally to your behaviour. '
,'Wireless headphone with  adaptive noise cancellation and  Mobile App. Responds naturally  to listener. Bluetooth aptX HD  streaming, 22 hour battery life'
,399.99,3),
('P5 Wireless'
,'On-ear wireless headphones which offer an enticing blend of great sound and stunning design all wrapped in luxurious black leather. Super cool and super sounding.'
,'Wireless on-ear headphone with Bluetooth aptX streaming and noise isolation. 17 hour battery life.'
,299.99,3),
('P3 Series 2'
,'Lightweight and foldable, providing size defying bass and musical dynamics. P3 Series 2 will fit easily into your life and coat pocket.'
,'Wired light weight on-ear  headphone with premium leather  finish and noise isolation.'
,149.99,3),
('C5 Series 2'
,'Ergonomic in-ear headphones. Powerful bass and a user adjustable design make C5 Series 2 one of best lightweight audio experiences around.'
,'Wired in-ear headphone with secure loop design, tangle-free cable, noise isolation.'
,149.99,3),
('BMW 7 Series'
,'The Bowers & Wilkins Diamond Surround Sound System has been designed exclusively for the BMW 7 Series. This sound system is the first of its kind, featuring studio-level acoustic technologies never before seen in a commercial car including Diamond Dome tweeters. The result is a truly revelatory audio experience – and a giant leap forward for in-car sound.'
,'The Diamond Surround Sound System is perfectly integrated into the cabin of the new BMW 7 Series – acoustically and aesthetically. Tuned by the people responsible for the 800 Series Diamond, it utilises stainless steel speaker grilles, which have audio-ideal Fibonacci patterned holes that allow more sound to pass through and blend into the luxurious interior. Subtle illumination on the Mirror-sail tweeters is designed to highlight the Diamond tweeter and the Nautilus spiral technology.'
,4),
('BMW 5 Series'
,'With the audio system for the BMW 5 Series, our singular goal was to produce a sound experience that feels as though you are there with the artist in the studio. From the outset, the engineering teams from BMW and Bowers & Wilkins joined forces to create an audio system featuring advanced acoustic technologies such as Diamond tweeters, which works in harmony with the car’s interior architecture to deliver an incredibly realistic, completely enveloping audio experience.'
,'The Diamond Surround Sound System is perfectly integrated into the cabin of the new BMW 5 Series – acoustically and aesthetically. Tuned by the people responsible for the 800 Series Diamond louspeakers, it utilises stainless steel speaker grilles, which have audio-ideal Fibonacci patterned holes that allow more sound to pass through whilst blending into the luxurious interior. Subtle illumination on the sail tweeters is designed to highlight the Diamond tweeter and the Nautilus spiral technology.'
,4),
('Maserati Quattroporte'
,'For nearly a century, the trident marque has been a symbol of uncompromising automotive excellence, and the latest in Maserati’s line of luxury saloon cars delivers on that promise. It also offers a truly immersive in-car acoustic experience, thanks to the Bowers & Wilkins premium surround system. Extraordinary sound for an extraordinary car.'
,'The premium surround system raises the bar for acoustic detail and clarity in a Maserati. What’s more, the system’s architecture and advanced digital features produce truly immersive surround sound from any position in the car. So nobody misses out on the experience.'
,4),
('Maserati Ghibli'
,'This elegantly styled sport sedan features is at the forefront of a new breed of Maserati automobile, writing the next chapter of the legend. It comes with the option of the Bowers & Wilkins premium surround system, carefully tuned to match the character of the car’s internal architecture, and deliver true sound on the move.'
,'The premium surround system raises the bar for acoustic detail and clarity in a Maserati. What’s more, the system’s architecture and advanced digital features produce truly immersive surround sound from any position in the car. So nobody misses out on the experience.'
,4),
('Maserati Levante'
,'The Levante is the first of its kind: a Maserati SUV. Every detail of the optional Bowers & Wilkins Surround Sound system is designed and acoustically optimised specifically for the Levante’s larger cabin space, following an intensive engineering and design collaboration between Maserati and Bowers & Wilkins teams. It delivers uncompromised, best-in-class results.'
,'The Surround Sound System raises the bar for acoustic detail and clarity in a Maserati. What’s more, the system’s architecture and advanced digital features produce truly immersive surround sound from any position in the car. So nobody misses out on the experience.'
,4),
('McLaren 540C'
,'The McLaren 540C boasts the best power-to-weight ratio of any sports car in its sector and is capable of an amazing 124.0mph in 10.5 seconds. It also boasts a class-leading sound system in the shape of the new Bowers & Wilkins Audio System, featuring Tweeter-on-Top technology.'
,'It’s the subtle nuances that make all the difference to audio within a sports car. The McLaren 540C’s audio system delivers spine-tingling detail and spaciousness thanks to tried and tested technologies, including Bowers & Wilkins Tweeter-on-Top technology. A Tweeter-on-Top centre speaker minimises acoustic reflection from the windscreen and removes cabinet coloration, resulting in a sound that’s more detailed and true to life.'
,4),
('McLaren 570S'
,'The initial car in McLaren’s exciting Sports Series range, the 570S Coupé is equally at home on the track as it is on the open road. The addictive driving experience is complemented by the Bowers & Wilkins Audio System, a 12-speaker system including a center-mounted Tweeter-on-Top high-frequency driver.'
,'It’s the subtle nuances that make all the difference to audio within a sports car. The McLaren 570S audio system delivers spine-tingling detail and spaciousness thanks to tried and tested technologies, including Bowers & Wilkins Tweeter-on-Top technology. A Tweeter-on-Top centre speaker minimises acoustic reflection from the windscreen and removes cabinet coloration, resulting in a sound that’s more detailed and true to life.'
,4),
('McLaren 570GT'
,'The McLaren 570GT is the most refined and road-biased McLaren yet, designed with a focus on day-to-day usability and long distance comfort. The luxurious interior of the 570GT is the perfect home for the Bowers & Wilkins Audio System, where its pristine surround sound perfectly meets the entertainment needs of the longer drives that the 570GT is designed for.'
,'It’s the subtle nuances that make all the difference to audio within a sports car. The McLaren 570GTs audio system delivers spine-tingling detail and spaciousness thanks to tried and tested technologies, including Bowers & Wilkins Tweeter-on-Top technology. A Tweeter-on-Top centre speaker minimises acoustic reflection from the windscreen and removes cabinet coloration, resulting in a sound that’s more detailed and true to life.'
,4),
('Volvo XC90'
,'Attention to detail. It’s what raises Volvo’s latest luxury SUV above the competition. You could say the same for the XC90’s in-car audio system. Featuring core Bowers & Wilkins technologies, the system is designed to convey the detail in music – creating a sound that feels more spacious and lifelike than ever.'
,'The larger space inside the XC90 allows the sound to immerse you in a way that smaller cars struggle with. The 19‐speaker XC90 system is powered by a high-quality Class D amplifier, and seamlessly integrated into the cabin architecture. Each speaker has been positioned for optimum acoustics and the most immersive sound possible. Wherever you choose to sit.'
,4),
('Volvo S90'
,'The S90 combines cutting edge technology and quality materials, beautifully put together with attention to detail and consideration. The same is true of its Bowers & Wilkins Audio system: high-end speaker technologies and materials are carefully located in the luxurious interior. The result: an executive car, with pristine sound.'
,'The 19-speaker S90 system is powered by a high-quality Class D amplifier, and seamlessly integrated into the cabin architecture. Each speaker has been positioned for optimum acoustics and tuned by expert ears to produce the most realistic immersive sound possible. This intensive collaboration between Volvo Cars and Bowers & Wilkins engineers creates fantastic sound, wherever you sit in the car.'
,4)

update products
set product_image = '/images/1.jpg'
where product_id = 1;
update products
set product_image = '/images/2.png'
where product_id = 2;
update products
set product_image = '/images/3.png'
where product_id = 3;
update products
set product_image = '/images/4.png'
where product_id = 4;
update products
set product_image = '/images/5.png'
where product_id = 5;
update products
set product_image = '/images/6.png'
where product_id = 6;
update products
set product_image = '/images/7.png'
where product_id = 7;
update products
set product_image = '/images/8.png'
where product_id = 8;
update products
set product_image = '/images/9.png'
where product_id = 9;
update products
set product_image = '/images/10.jpg'
where product_id = 10;
update products
set product_image = '/images/11.jpg'
where product_id = 11;
update products
set product_image = '/images/12.jpg'
where product_id = 12;
update products
set product_image = '/images/13.jpg'
where product_id = 13;
update products
set product_image = '/images/14.jpg'
where product_id = 14;
update products
set product_image = '/images/15.jpg'
where product_id = 15;
update products
set product_image = '/images/16.jpg'
where product_id = 16;
update products
set product_image = '/images/17.jpg'
where product_id = 17;
update products
set product_image = '/images/18.jpg'
where product_id = 18;
update products
set product_image = '/images/19.jpg'
where product_id = 19;
update products
set product_image = '/images/20.jpg'
where product_id = 20;
update products
set product_image = '/images/21.jpg'
where product_id = 21;
update products
set product_image = '/images/22.jpg'
where product_id = 22;
update products
set product_image = '/images/23.jpg'
where product_id = 23;
update products
set product_image = '/images/24.jpg'
where product_id = 24;
update products
set product_image = '/images/25.jpg'
where product_id = 25;
update products
set product_image = '/images/26.jpg'
where product_id = 26;
update products
set product_image = '/images/27.jpg'
where product_id = 27;
update products
set product_image = '/images/28.jpg'
where product_id = 28;
update products
set product_image = '/images/29.png'
where product_id = 29;
update products
set product_image = '/images/30.jpg'
where product_id = 30;
update products
set product_image = '/images/31.jpg'
where product_id = 31;
update products
set product_image = '/images/32.jpg'
where product_id = 32;
update products
set product_image = '/images/33.jpg'
where product_id = 33;
update products
set product_image = '/images/34.jpg'
where product_id = 34;
update products
set product_image = '/images/35.jpg'
where product_id = 35;
update products
set product_image = '/images/36.jpg'
where product_id = 36;
update products
set product_image = '/images/37.jpg'
where product_id = 37;
update products
set product_image = '/images/38.jpg'
where product_id = 38;
update products
set product_image = '/images/39.jpg'
where product_id = 39;
update products
set product_image = '/images/40.jpg'
where product_id = 40;
update products
set product_image = '/images/41.jpg'
where product_id = 41;
update products
set product_image = '/images/42.jpg'
where product_id = 42;
update products
set product_image = '/images/43.jpg'
where product_id = 43;
update products
set product_image = '/images/44.jpg'
where product_id = 44;
update products
set product_image = '/images/45.jpg'
where product_id = 45;
update products
set product_image = '/images/46.jpg'
where product_id = 46;
update products
set product_image = '/images/47.jpg'
where product_id = 47;
update products
set product_image = '/images/48.jpg'
where product_id = 48;
update products
set product_image = '/images/49.jpg'
where product_id = 49;
update products
set product_image = '/images/50.jpg'
where product_id = 50;
update products
set product_image = '/images/51.jpg'
where product_id = 51;
update products
set product_image = '/images/52.jpg'
where product_id = 52;
update products
set product_image = '/images/53.jpg'
where product_id = 53;
update products
set product_image = '/images/54.jpg'
where product_id = 54;
update products
set product_image = '/images/55.jpg'
where product_id = 55;
update products
set product_image = '/images/56.jpg'
where product_id = 56;
update products
set product_image = '/images/57.jpg'
where product_id = 57;
update products
set product_image = '/images/58.png'
where product_id = 58;
update products
set product_image = '/images/59.png'
where product_id = 59;
update products
set product_image = '/images/60.png'
where product_id = 60;
update products
set product_image = '/images/61.png'
where product_id = 61;
update products
set product_image = '/images/62.jpg'
where product_id = 62;
update products
set product_image = '/images/63.jpg'
where product_id = 63;
update products
set product_image = '/images/64.jpg'
where product_id = 64;
update products
set product_image = '/images/65.jpg'
where product_id = 65;
update products
set product_image = '/images/66.jpg'
where product_id = 66;
update products
set product_image = '/images/67.jpg'
where product_id = 67;
update products
set product_image = '/images/68.jpg'
where product_id = 68;
update products
set product_image = '/images/69.jpg'
where product_id = 69;
update products
set product_image = '/images/70.jpg'
where product_id = 70;
update products
set product_image = '/images/71.jpg'
where product_id = 71;
update products
set product_image = '/images/72.jpg'
where product_id = 72;