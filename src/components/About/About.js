import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import { connect } from 'react-redux';
import { getRedirect } from '../../ducks/reducer';
import ScrollAnimation from 'react-animate-on-scroll';
import './About.css';


class About extends Component {

    componentDidMount() {
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    render() {
        return (
            <div className="page">
                <div className='main'>
                    <Switch>
                        <Route exact path='/about' render={() =>
                            <div className='content'>
                                <div className='subnav'>
                                    <Link to='/about' className='subnavlinks'>About<div className="line"></div></Link>
                                    <Link to='/about/contact' className='subnavlinks'>Contact<div className="line"></div></Link>
                                </div>
                                <h1 className='contenttitle'>About Bowers and Wilkins</h1>
                                <p>Bowers & Wilkins has a long history of technological innovation in its pursuit of the perfect loudspeaker. Whether it’s through the innovative use of materials such as Kevlar and Diamond, new solutions to complex engineering conundrums, or ‘eureka moments’ of brilliance, Bowers & Wilkins engineers constantly strive to produce the best possible sound.</p>
                                <div className="timeline">
                                    <div className="event">
                                        <div className="eventdot">1965</div>
                                        <div className='eventline'></div>
                                        <div className="eventbody">
                                            <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1965--Beginnings.jpg' alt='Beginnings' className="eventimg" />
                                            <div className="eventtext">
                                                <h1>Beginnings</h1>
                                                <div>Bowers & Wilkins is now a very large company, with distribution chains and customers all over the world. But it started life with John Bowers hand-assembling speaker systems for local clients in Worthing, West Sussex, in the back of the electrical store that he ran with his friend Roy Wilkins.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <div className="eventdot">1966</div>
                                        <div className='eventline'></div>
                                        <div className="eventbody">
                                            <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1966--Electronics-Ltd.jpg' alt='B&W Electronics Ltd.' className="eventimg" />
                                            <div className="eventtext">
                                                <h1>B&W Electronics Ltd.</h1>
                                                <div>Following a bequest from an elderly lady called Miss Knight, John Bowers founds B&W Electronics Ltd. Because she was so impressed with John Bowers' knowledge of classical music, and so pleased with the loudspeakers that he had made for her, Miss Knight left him £10,000 in her will to develop a business.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1967</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1968</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1969</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1970</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1970--DM70.jpg' alt='DM70' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>DM70</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Without the DM70, Bowers’ dream of the perfect loudspeaker might have remained a head-in-the-clouds fantasy. Critics agreed with Bowers & Wilkins’ engineers that the sound from its 11-module, electrostatic midrange/high-frequency unit was a revelation. With its cool, curved slimline cabinet, the DM70 changed the shape of loudspeaker design for ever.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1971</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1972</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1973</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1974</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1974--Kevlar.jpg' alt='Kevlar' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Kevlar</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Trials of driver cone materials revealed that Kevlar®, a fabric used in bulletproof vests, could break up standing waves as efficiently as it stopped bullets. The ochre yellow Kevlar midrange cone was to become a Bowers & Wilkins patent and a hallmark of the natural sound of its speakers.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1975</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1975--Kenneth-Grange.jpg' alt='Kenneth Grange' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Kenneth Grange</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Bowers & Wilkins appoints Kenneth Grange, founding partner of Pentagram and one of the UK’s leading designers, to work on the design of its loudspeaker cabinets. The relationship produced some outstanding loudspeakers, right up to and including the Signature Diamond in 2005</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1976</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1977</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1978</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1979</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1979--801.jpg' alt='801' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>801</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>The original 801 heralded the modern era of high-end speaker design. Superior drive units isolated in separate chambers produced sound of unheard-of-realism and made the 801 a fixture in top studios and audiophiles’ homes – a tradition upheld by later 800 Series loudspeakers.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1980</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1981</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1981--Steyning.jpg' alt='Steyning Research Establishment' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Steyning Research Establishment</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>John Bowers creates the now world-famous Steyning Research Establishment, often dubbed ‘University of Sound’ by those journalists that visit. SRE houses a team of specialist acoustic and electronics engineers who have a wealth of modelling, testing and design tools at their disposal.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1982</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1983</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1984</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1985</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1986</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1986--Matrix.jpg' alt='Matrix' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Matrix 1, 2, and 3</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Having worked wonders with speaker components, Bowers & Wilkins turned its attention to the structure that held them all together. What the cabinet needed was backbone. Matrix™, with its interlocking panels, pushed the bass attack of speakers a big step further.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1987</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1987--John-Bowers.jpg' alt='John Bowers' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>John Bowers</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>John Bowers passes away.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1988</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1988--Abbey-Road.jpg' alt='Abbey Road Studios' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Abbey Road Studios</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Abbey Road Studios adopts the Bowers & Wilkins Matrix 801 in its studios. This relationship continues today and Abbey Road’s engineers are frequent visitors to the Steyning Research Establishment. The Bowers & Wilkins 800D is the reference monitor at Abbey Road today.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1989</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1990</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1991</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1992</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1993</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1993--Nautilus.jpg' alt='Nautilus' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Nautilus</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>After five years of research, Bowers & Wilkins’ engineers stepped out of the box and created the Nautilus™. Straight sides disappeared and along with them almost every trace of cabinet distortion. Form imitated nature and the music that emerged was so real it could almost be touched. Many years later, Bowers & Wilkins is still manufacturing the Nautilus, for truly discerning customers the world over.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1994</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1995</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1996</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1997</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">1998</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--1998--Nautilus-800-series.jpg' alt='800 Series' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Nautilus 800 Series</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Nautilus changed everything. Bowers & Wilkins speakers would never look or sound the same again. It would take time to convert the no-holds-barred approach of Nautilus for commercial speakers, but the technology trickle-down got under way with the highly-regarded Nautilus 800 Series.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">1999</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2000</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2001</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--2001--Signature-800.jpg' alt='Signature 800' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Signature 800</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>The exclusive Signature 800 loudspeaker was created to celebrate Bowers & Wilkins’ 35th birthday. Building on the strengths of the existing Nautilus 800 Series, the Signature 800 also showed off the company's increased cabinet making skills with a beautiful ‘Tigers Eye’ gloss finish.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2002</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2003</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2004</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2005</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--2005--Diamond-Domes.jpg' alt='Diamon Domes' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Diamond Domes</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Diamonds aren’t just for the highlife: they’re for high notes too. It wasn’t easy for Bowers & Wilkins to improve any further on the performance of its aluminium tweeter domes, but trials with a dome of synthetic diamond unearthed a stunning discovery. Until mankind develops the hearing of bats, it’s the sweetest tweeter we’ll ever hear.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2006</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2007</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--2007--Jaguar-Car-Audio.jpg' alt='Jaguar Car Audio' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Jaguar Car Audio</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Dream sound for a dream car. That was the request for the Jaguar C-XF concept car. Hence the call from Jaguar to the engineers at Bowers & Wilkins, and the start of a relationship that has since resulted in ground-breaking audio systems in desirable cars such as the XK, XF and the XJ.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2008</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2009</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2010</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History--2010--P5.jpg' alt='P5' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>P5</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Bowers & Wilkins debut pair of headphones was a true statement of intent. The luxurious, leather-clad P5 mobile hi-fi headphones allowed iPod® and iPhone® users to experience Bowers & Wilkins sound wherever they went for the first time.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2011</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2012</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeIn">
                                        <div className="dot">2013</div>
                                    </ScrollAnimation>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2014</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History_2014-Sound-System_Primavera.jpg' alt='Sound System' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Sound System</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>Taking True Sound to more people than ever before, the Sound System debuted at Barcelona’s Primavera Sound festival before moving on to WOMAD and other shows. These giant speaker stacks delivered pristine audio to the live arena in a manner never before experienced.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2015</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History_2015_Zeppelin-Wireless.jpg' alt='Zeppelin Wireless' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Zeppelin Wireless</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>The third generation Zeppelin was the best sounding so far. It lost its characteristic dock, but instead gained Bluetooth aptX™ and Spotify Connect to complement its predecessor’s AirPlay wireless streaming.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2015</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History_2015_Continuum-Cones.jpg' alt='Continuum Cone' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>Continuum Cone</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>First deployed in the 800 Series Diamond, these revolutionary midrange cones are the result of an eight-year research and development project that went through over 80 iterations. The Continuum cone delivers pristine midrange performance by effectively negating the break-up behaviour that can adversely affect this all-important part of the spectrum.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <ScrollAnimation animateIn="zoomIn">
                                            <div className="eventdot">2016</div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateIn="fadeInLeft">
                                            <div className='eventline'></div>
                                        </ScrollAnimation>
                                        <div className="eventbody">
                                            <ScrollAnimation animateIn="fadeInRight">
                                                <img src='http://www.bowers-wilkins.com/Images/SeriesFeature/xlarge/History_2016_Anniversary_Logo.jpg' alt='50th Anniversary' className="eventimg" />
                                            </ScrollAnimation>
                                            <div className="eventtext">
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <h1>50th Anniversary</h1>
                                                </ScrollAnimation>
                                                <ScrollAnimation animateIn="fadeInRight">
                                                    <div>In 1966 John Bowers wanted better speakers. Five decades later the company he founded is a global leader in sound. Bowers & Wilkins is incredibly proud to celebrate its 50th anniversary – and even more proud that the ethos, passion and drive of its founder is still a vital element in its continuing success.</div>
                                                </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aboutfooter"></div>
                            </div>} />
                        <Route path='/about/contact' component={Contact} />
                    </Switch>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, { getRedirect })(About);