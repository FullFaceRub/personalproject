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
,699.99,1)