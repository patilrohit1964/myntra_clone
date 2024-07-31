import React from 'react'
import Carousel from 'react-bootstrap/esm/Carousel'
import { Link } from 'react-router-dom'
const Kids = () => {
    const kidsCarousel = [
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/0e977afc-87e2-4798-a0d6-bfb05ba796911649782019489-Super-Bottoms_Desk_Banner.jpg',
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg'
    ]

    const sec1Img = [
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/ab69d015-a975-4bda-990c-49e68938f6b31604926460802-19-FavBrands-AllenSollyJuniors.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/fee6018d-c5dd-44b7-b1d1-9b994c1ae1e21604926460545-13-FavBrands-UCB.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4d3f0e9d-1b7a-458e-b05b-75d1f51db0411604926460628-15-FavBrands-NautiNati.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/a505cf6b-beab-4bea-ba8d-06d7302486761604926460589-14-FavBrands-USPA.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/10/5843d479-8331-4c70-9e44-796b984a258e1604993081657-17-FavBrands-MiniKlub--1-.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/20/dc3e538c-bdbe-4df6-b38d-e628f1b18e211605856135445-ShopBybrands-lilpicks.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0bb2a638-7a84-4e75-bbbb-152140d32fd51604926460667-16-FavBrands-Peppermint.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7a43b5cc-7b14-465a-9043-153fe35fb4d91604926460506-12-FavBrands-Gini_Jony.jpg',
        'https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4f79cccf-f8af-4a41-b531-a02ffc8bb1151604926460459-11-FavBrands-YK.jpg'
    ]

    const sec2Img = [
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/cca065d6-f192-44dd-9e12-40be8c5ed9ee1649781648648-H_M.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/00a95486-20dc-42e4-95d9-91242ba7f83b1649781648667-Kids-wear.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/54794130-d358-421b-a73f-1ea5f98330641649781648655-Indian-Wear.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/2d7c5cdb-1859-4883-8ba6-8fa2bc8ace841649781648661-Jeans-_-Trousers.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/d535f930-b28d-4aaa-a3a1-e6cbf43ac18f1649781648685-Redtape.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/603cd248-fa30-43be-b649-55b5ec70e5431649781648679-Max.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/c97dcb69-4b36-4f4a-adde-d473b2e5ae9d1649781648698-Top-Brands.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/46e55402-2a6b-4397-8332-4a786cf6fd801649781648704-Tops-_-Tees.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/489b294a-84f4-4858-8f8e-ca485a36c5811649781648673-Kids-Wear-1.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/38907e29-87e1-46ec-8542-43a29e3c82c81649781648691-Teens-Clothing.jpg',
        'https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/728e97e1-4845-41b8-8830-19e7cb0cf4161649781648642-Baby-Utilities.jpg'
    ]

    const sec3Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f79446fb-46b9-455a-a6c0-4ffe3f58dd071604906586106-23-IconicBrands-H_M.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ba882da-667c-4f6e-a27e-292d0ffe477a1604906586228-26-IconicBrands-MangoKids.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/37147834-2bc5-4cdb-8eb9-68bf0fd48ca01604906586191-25-IconicBrands-Chicco.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f23d49ee-a598-4039-a6cd-33dab8a7e2011604906586056-22-IconicBrands-M_S.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/0f9ec937-304a-433a-9433-5409c556831c1604906586152-24-IconicBrands-TommyHilfiger.jpg'

    ]

    const sec4Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/f20838ab-108c-4fe6-bd74-0dc7551a2bbd1604906586589-34-Essentials-Masks.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3df8a117-4db8-4cb6-ac0e-e60291d957241604906586646-35-Essentials-BabyCare.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/29baf945-9e5b-4f0e-bb05-0ce65c57f9c91604906586502-32-Essentials-Shorts.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/353fd453-6a17-45b9-b3da-a3dfd88121a31604906586547-33-Essentials-Valuepacks.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c22c8c4b-753a-4f90-8def-511d2ed6caf31604906586731-37-Essentials-EthnicWear.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/efc4b19d-179f-4437-961c-839df50299a51604906586690-36-Essentials-Night_innerwear.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/4e6eefd3-3355-4c1c-851e-48a49c97d5b31604906586407-30-Essentials-Onesies.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/33368b8b-8702-4108-96a9-b8fa5b7ed36f1604906586455-31-Essentials-FlipFlop_sandals.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/c75a2039-4199-4174-b1b9-fecd30f7d3f91604906586359-29-Essentials-Tshirts_Tops.jpg'
    ]

    const sec5Img = [
        'https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg',
        'https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg',
        'https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg',
        'https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg',
        'https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb420f64-fea8-4d66-87b7-03c7f7fb6e621604906587041-43-Banner-Uniquely-Myntra.jpg',
        'https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1ac6219d-54b8-484e-813b-c239bb9880141604906587091-44-Banner-ActiveWearStore.jpg'
    ]

    const sec7Img = [
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/df528847-96b6-48cc-9104-064ad788804c1604906588040-61-BudgetBuys-TshirtsUnder499.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/e42fbdcd-31cd-43de-b1eb-0f3f4351e08d1604906588093-62-BudgetBuys-DressesUnder799.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1abffc52-836d-4778-a034-a851b45e43c31604906588162-63-BudgetBuys-EthnicWearUnder999.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1abffc52-836d-4778-a034-a851b45e43c31604906588162-63-BudgetBuys-EthnicWearUnder999.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/8430d7ff-a2f4-496a-bf90-b1c3a8cc7d231604906588272-65-BudgetBuys-ValuePacksUnder799.jpg',
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/af518c66-a610-4ab7-91bf-b343b9c1b8501604906588337-66-BudgetBuys-FootwearUnder699.jpg'
    ]

    const sec8Img = [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/7/19/00da8e7c-c7b2-4386-be22-29e6ce7f93491626685981220-Top-Nav_Life-Style.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3b15613e-57c1-451c-bc7d-66ea2ba0066a1604906588521-69-MoreBrands-PepeJeans.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/aa944cdd-33ff-4576-988d-fe8310cf9db91604906588585-70-MoreBrands-HRXU17.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/3bfd54e9-06ca-4a1c-8286-fc1eb73242661604906588708-72-MoreBrands-Sangria.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/706a41d7-9d15-4b56-81be-2f02bac65ebb1604906588761-73-MoreBrands-Cherokee.jpg'
    ]
    return (
        <div className='kids-comp'>
            <Carousel className='mt-5'>
                {kidsCarousel.map((image, index) => (
                    <Carousel.Item key={index}><img src={image} alt="Kids Wear" /></Carousel.Item>
                ))}
            </Carousel>

            <section className="section1 mt-5">
                <h4 className='container'>FAVOURITE BRANDS</h4>
                <div className='d-flex justify-content-between mt-5 kid-sec1-box flex-wrap'>
                    {sec1Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section2 mt-5">
                <h4 className='container'>Top Picks</h4>
                <div className='d-flex justify-content-between mt-5 kid-sec2-box flex-wrap'>
                    {sec2Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section3 mt-5">
                <h4 className='container'>Iconic Brands</h4>
                <div className='d-flex justify-content-between mt-5 kid-sec3-box flex-wrap'>
                    {sec3Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section4 mt-5">
                <h4 className='container'>Fashion & Essentials</h4>
                <div className='d-flex justify-content-center mt-5 kid-sec4-box flex-wrap'>
                    {sec4Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>

                    ))}
                </div>
            </section>

            <section className="section5 mt-5">
                <h4 className='container'>EXPLORE MORE</h4>
                <div className='d-flex justify-content-center mt-5 kid-sec5-box flex-wrap'>
                    {sec5Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className='section6 mt-5'>
                <h4 className='container'>THE KIDS SPACE</h4>
                <div className='d-flex justify-content-between mt-5 kid-sec6-box flex-wrap'>
                    <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/817ada39-86d3-4162-b10f-443c7d658f541604906587912-59b-Banner-KidsSpace.jpg" alt="" />
                    <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/9906ea02-f0e5-40b8-b6db-ce3c5fd5fcf31604906587854-59a-Banner-KidsSpace.jpg" alt="" />
                </div>
            </section>

            <section className='section7 mt-5'>
                <h4 className='container'>BUDGET BUY</h4>
                <div className='d-flex justify-content-between mt-5 kid-sec7-box flex-wrap'>
                    {sec7Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className='section8 mt-5 pb-5'>
                <h4 className='container'>BUDGET BUY</h4>
                <div className='d-flex justify-content-between mt-5 kid-sec8-box flex-wrap'>
                    {sec8Img.map((e, index) => (
                        <Link to={'/listProduct/kids'} key={index}>
                            <div key={index} className='box mb-3'>
                                <img src={e} alt='Favourite Brands' />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Kids