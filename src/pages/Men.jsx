import React from 'react'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Men = () => {
    const sec1Img = [
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg',
        'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg'
    ]
    const sec2Img = [
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg'
    ]
    const sec3Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg'
    ]
    const sec4Img = [
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/85fa3b9b-9e7c-43a5-9de0-1cb32f3180151637149111314-MP-Farah.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/480f4bde-1d72-4517-be6d-af2dfef7528e1637149111337-MP-Collective.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/cadd8457-b8ec-464c-9bc6-6082a24075591637149111331-MP-OriginalPenguin.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/e185b9a2-0c12-4379-a85c-a4ceed2fe9931637149111326-MP-D1Milano.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/ab5c5029-d24f-4789-979c-d4910801ea191637149111321-MP-HUGOBoss.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/621ce33b-3383-4347-99bf-2038b95f27151637149369429-MP-Ducati.jpg'
    ]

    const sec5Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg'
    ]

    const sec6Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg'
    ]

    const sec7Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg'
    ]

    const sec8Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png'
    ]
    return (
        <div className='men-comp'>
            <Carousel className='mt-5'>
                <Carousel.Item interval={1000}>
                    <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg' text="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg' text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg' text="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg' text="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg' text="Third slide" />
                </Carousel.Item>
            </Carousel>

            <section className='section1 men-sec1-box container mt-5'>
                <h4>Biggest Deals On Top Brands</h4>
                <div className='d-flex justify-content-center mt-5 flex-wrap'>
                    {sec1Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div className='box mb-2 me-2'>
                                <img className='img-fluid' src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section2 container mt-5 men-sec2-box">
                <h4>Categories To Bag</h4>
                <div className='mt-5 d-flex justify-content-between flex-wrap'>
                    {sec2Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section3 container mt-5 men-sec3-box">
                <h4>Explore Top Brands</h4>
                <div className='d-flex justify-content-between flex-wrap mt-5'>
                    {sec3Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section4 mt-5 container men-sec4-box">
                <h4>MYNTRA LUXE</h4>
                <div className='d-flex justify-content-between mt-5 flex-wrap'>
                    {sec4Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section5 mt-5 container men-sec5-box">
                <h4>Trending In Indian Wear</h4>
                <div className='d-flex justify-content-between mt-5 flex-wrap'>
                    {sec5Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section6 mt-5 container men-sec6-box">
                <h4>Trending In Sports Wear</h4>
                <div className='d-flex justify-content-between mt-5 flex-wrap'>
                    {sec6Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section7 mt-5 container men-sec7-box">
                <h4>Trending In Footwear</h4>
                <div className='d-flex justify-content-between mt-5 flex-wrap'>
                    {sec7Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section8 mt-5 container men-sec8-box">
                <h4>Trending In Accessories</h4>
                <div className='d-flex justify-content-between mt-5 flex-wrap'>
                    {sec8Img.map((e, index) => (
                        <Link to={'/listProduct/men'} key={index}>
                            <div key={index} className='box'>
                                <img src={e} alt='' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Men