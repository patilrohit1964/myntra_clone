import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextData } from '../context/ContextApp';
import Loading from '../components/Loading';

const Home_Living = () => {


    const sec1Img = [
        'https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg',
        'https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg',
        'https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg',
        'https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg',
        'https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563925069-kitchen.jpg',
        'https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563958962-bath.jpg'
    ]

    const texts = [
        "Bed Sheets",
        "Bedding Seats & Bed Covers",
        "Blankits, Quits & Dohars",
        "Pillow & Pillow Covers",
        "Cushion & Cushion Covers",
        "Curtains",
        "Mats & Dhurries",
        "Carpets",
        "Bed Sheets",
        "Bedding Seats & Bed Covers",
        "Blankits, Quits & Dohars",
        "Pillow & Pillow Covers",
        "Cushion & Cushion Covers",
        "Curtains",
        "Mats & Dhurries",
        "Carpets",
        "Bed Sheets",
        "Bedding Seats & Bed Covers",
        "Blankits, Quits & Dohars",
        "Pillow & Pillow Covers",
        "Cushion & Cushion Covers",
        "Curtains",
        "Mats & Dhurries",
        "Carpets",
        "Bed Sheets",
        "Bedding Seats & Bed Covers",
        "Blankits, Quits & Dohars",
        "Pillow & Pillow Covers",
        "Cushion & Cushion Covers",
        "Curtains",
        "Mats & Dhurries",
        "Carpets",
        "Bed Sheets",
        "Bedding Seats & Bed Covers",
        "Blankits, Quits & Dohars",
        "Pillow & Pillow Covers",
        "Cushion & Cushion Covers",
        "Curtains",
        "Mats & Dhurries",
        "Carpets",
    ]

    const sec2Img = [
        'https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg',
        'https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg',
        'https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg'
    ]

    const sec3Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/13606c4a-14e9-48e4-a56a-a9c3979e7db21650971940091-swayam_logo_new_1980_x_1280.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/ff6b8a0b-83fa-4f9f-bbb3-0fc51fd9454a1647517771374-updated-logo.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/9830dff5-9056-402f-9bf0-ba3ead0abcaf1647499996169-SPACES---LOGO-01--BEDBATHRUGS-.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/06f9e39d-a4d4-4ba4-b4cb-960c87ff5d511647499996189-M-S-Logo.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/1/a38e440e-1ff7-4092-acbe-46d74b38384a1551443106457-Home-page-Desktop-Brands_13.jpg'
    ]
    return (
        <div className='home-living-comp'>
            <div className='container mt-5' style={{ height: '301px' }}>
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg" alt="" />
            </div>

            <section className="section1 mt-5 container d-flex justify-content-between">
                <div className='first-div'>
                    <h4>NICE TO SEE YOU, COME ON IN!</h4>
                    <div className='hl-sec1-box d-flex justify-content-center mt-5 flex-wrap'>
                        {sec1Img.map((el, index) => (
                            <Link to={'/listProduct/home_living'} key={index}>
                                <div className='mb-3 box ms-2'>
                                    <img src={el} alt="internet problem" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='text-left second-div text-secondary'>
                    <p>Furshings & Bed Linen</p>
                    <ul className='list-unstyled d-lg-block'>
                        {texts.map((el, index) => (
                            <li className='mb-2' key={index}>{el}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="section2">
                <div>
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg" alt="" />
                    <div className='d-flex justify-content-between flex-wrap hl-sec2-box container pb-5'>
                        {sec2Img.map((el, index) => (
                            <Link to={'/listProduct/home_living'} key={index}>
                                <div className='mb-3 box'>
                                    <img src={el} alt="internet problem" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section3 container pb-5">
                <div>
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478696928-Home-page-Desktop_16.jpg" alt="" />
                    <div className='d-flex justify-content-between hl-sec3-box'>
                        {sec3Img.map((el, index) => (
                            <Link to={'/listProduct/home_living'} key={index}>
                                <div className='mb-3 box'>
                                    <img src={el} alt="internet problem" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Living