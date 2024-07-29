import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='container'>
            <footer className='pb-5'>
                <div className="div1 d-flex mt-5 container justify-content-between">
                    <div >
                        <p>ONLINE SHOPPING</p>
                        <Link>Men</Link><br />
                        <Link>Women</Link><br />
                        <Link>Kids</Link><br />
                        <Link>Home & Living</Link><br />
                        <Link>Beauty</Link><br />
                        <Link>Gift Cards</Link><br />
                        <Link>Myntra Insider</Link>
                        <p className='mt-4'>USEFUL LINKS</p>
                        <Link>Blog</Link><br />
                        <Link>Careers</Link><br />
                        <Link>Site Map</Link><br />
                        <Link>Corporate Information</Link><br />
                        <Link>Whitehat</Link><br />
                        <Link>Cleartrip</Link>
                    </div>
                    <div>
                        <p>CUSTOMER POLICIES</p>
                        <Link>Contact Us</Link><br />
                        <Link>FAQ</Link><br />
                        <Link>T&C</Link><br />
                        <Link>Terms Of Use</Link><br />
                        <Link>Track Orders</Link><br />
                        <Link>Shipping</Link><br />
                        <Link>Cacellation</Link><br />
                        <Link>Returns</Link><br />
                        <Link>Privacy policy</Link><br />
                        <Link>Grivance Officer</Link>
                    </div>
                    <div>
                        <p>EXPERIENCE MYNTRA ON MOBILE</p>
                        <Link><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_yjGkJY0aKRmyBLHnM2c41Cut9cD6IJ6ZA&s" alt="" width={200} /></Link><br />
                        <p className='mt-3'><b>Keep in Touch</b></p>
                        <div className='ft-icons'>
                            <Link className='d-flex justify-content-between'>
                                <FaFacebook />
                                <FaTwitter />
                                <FaYoutube />
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p>PRDOUCT GURRANTY</p>
                        <p className='text-center'>
                            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" height={40} width={48} />
                            <span><b>100% ORIGINAL guarantee</b> for <br /> all products at myntra.com</span>
                        </p>
                        <p>
                            <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" width={48} height={49} />
                            <span className='text-center'><b>Return within 14days of </b><br />receiving your order</span>
                        </p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p>Popular Searches</p>
                    <span className='text-secondary'>Sherwani  Track Pants  Blazers  Sweaters For Men  Men Wedding Dresses  Kurta Pajama  Raincoats  Shorts  Trousers  Waistcoat  Inner Wear  Nightwear  Jeans  Shirts  Jogger Jeans  Men Suits  T Shirts  Sweatshirts  Jackets For Men  Tracksuits  Ripped Jeans  Ethnic Wear  Hoodies  Raksha Bandhan Gifts  Watches  Shoes  Belts  Swimwear  Dhotis  Boxers  Vests  Thermals  Socks  Shrugs  Bracelets  Rings  Sunglasses  Headphones  Wallets  Helmets  Caps  Mufflers  Gloves  Ties  Cufflinks  Men Sandals  Floaters  Flip Flops  Trunks  Bags</span>
                </div>
                <div className='mt-3 d-flex justify-content-between text-secondary'>
                    <span>In case of any concern, Contact Us</span>
                    <span>© 2024 www.myntra.com. All rights reserved.</span>
                    <span>A Flipkart company</span>
                </div>
                <hr />
                <div>
                    <p>MEN’S SHOPPING AT MYNTRA: A SUPERIOR EXPERIENCE</p>
                    <span className='text-secondary'>Myntra is one of the best sites when it comes to online shopping for men. The finest of material, superior design and unbeatable style go into the making of our men’s shopping collection. Our range of online shopping men’s wear, accessories, footwear and personal care products are second to none. Compared with other men’s shopping sites, Myntra brings you the best price products which won’t hurt your pocket. With seasonal discounts on trendy casual wear, suits, blazers, sneakers and more, online shopping for men at Myntra just gets even more irresistible!</span>

                    <p className='mt-3'>ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED</p>
                    <span className='text-secondary'>At Myntra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of awesome products at Myntra:</span>

                    <div className='ms-3 mt-3 text-secondary'>
                        <span>
                            1.Opt for a charming yet laid-back look with cool T-shirts and casual shirts worn with stylish jeans, casual trousers or shorts. Stay sharp and sophisticated with our smart options in formal shirts and trousers. Look dapper when meeting your clients in our smooth suits. Put on trendy blazers for formal occasions. On your online men’s clothes’ shopping journey, make sure you include kurtas, jackets and sherwanis from our festive wear collection. Stay warm and comfortable in sweaters and sweatshirts. Get fit and ready for adventure, with our sports and active wear collection.
                        </span><br />
                        <span className='d-inline-block mt-2'>
                            2.Once you are done with your online men’s clothes’ shopping, make sure you pick up the right accessories to complement your look. Whether you are travelling to work or outside the city our wide variety of bags, backpacks and luggage collection will ensure you are well-packed. Our beautiful watches and smart watches work well to enhance your overall style quotient. Reach out for our sunglasses during the summers – let your eyes stay protected while you opt for maximum swag.
                        </span><br />
                        <span className='d-inline-block mt-2'>
                            3.Bring impeccable style to your shoe closet with our incredible collection of footwear for men. Look classy during formal and semi-formal occasions with derbies, loafers and oxfords. Stay hip and happening in parties with boat shoes, monks and brogues from our casual men’s footwear range. Lead an active lifestyle with sneakers and running shoes from our sports footwear selection. Pick up sandals, floaters and flip-flops for a trip to the beach. We also host socks in our men’s online shopping collection. That’s basically everything under one roof!
                        </span>
                    </div>

                    <div className='text-secondary mt-3'>
                        <span>Make sure you check out fun printed men’s T-shirts featuring your favourite characters from DC Comics and Marvel studios. Relive the magic of your favourite superhero from Justice League. Fly high with Superman, battle the bad guys with Batman, or get trendy in lightning-speed with a Flash T-shirt. Grab our cool Marvel Avengers T-shirts. Stay powered up with the Iron Man, or walk with the warriors in a Thor T-shirt.</span>

                        <span>Our online shopping fashion for mens collection includes even more amazing merchandise such as innerwear, sleepwear, track pants, personal care, wallets, belts and other fashion accessories.</span>
                    </div>

                    <div className='text-secondary mt-3'>
                        <p className='m-0 p-0'><b>MEN’S SHOPPING MADE EASY AT MYNTRA</b></p>
                        <span>Myntra is the most convenient men’s online store, what with our simplified shopping and payment procedures. With just a few clicks of the mouse or taps on your smartphone, you can buy your favorites from the best men’s brands right away.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer