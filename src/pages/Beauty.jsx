import React, { useEffect, useState } from 'react'
import { FaSearch, FaStar, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';
const Beauty = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [selectVal, setSelectVal] = useState(null);
    const [checkboxVal, setCheckBox] = useState(null);
    const [startVal, setStart] = useState(NaN);
    const [end, setEnd] = useState(1000);
    // fetch data from json
    function getData() {
        axios.get("http://localhost:3000/beautyProducts", {
            params: {
                _page: page,
                _limit: 10,
                _sort: "price",
                _order: selectVal,
                category: checkboxVal,
            }
        })
            .then(e => setData(e.data))
            .catch(e => console.log(e))
    };


    // event handlings
    // // tp firestore
    // async function firestoreData(){
    //     let ans=await getDocs(collection(db,'users')).then(e=>{return e})
    //     console.log(ans);
    // }
    useEffect(() => {
        // firestoreData();
        getData();
    }, [page, selectVal, checkboxVal]);
    return (
        <div className='beauty-comp'>
            <div className='d-flex'>
                <aside>
                    <div className='text-center p-3'>
                        <span>Home / <b>Personal Care</b></span>
                        <p><b>Personal Care</b> - <span className='text-secondary'>102464 items</span></p>
                    </div>
                    <p className='ps-4'><b>Filters</b></p>
                    <hr />
                    <div>
                        <ul className='list-unstyled ps-4'>
                            <li className='d-flex align-items-center mb-2' value="men"><input type="radio" name="gender" className='d-inline-block me-3' /><b>Men</b></li>
                            <li className='d-flex align-items-center mb-2' value="women"><input type="radio" name="gender" className='d-inline-block me-3' /><b>Women</b></li>
                            <li className='d-flex align-items-center mb-2' value="boy"><input type="radio" name="gender" className='d-inline-block me-3' /><b>Boy</b></li>
                            <li className='d-flex align-items-center mb-2' value="girl"><input type="radio" name="gender" className='d-inline-block me-3' /><b>Girl</b></li>
                        </ul><hr />
                        <p className='ps-4 d-flex justify-content-between w-75 align-items-center'>
                            <b>CATEGORIES</b>
                            <FaSearch />
                        </p>
                        <ul className='list-unstyled ps-4' onChange={(e) => setCheckBox(e.target.name)}>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="lipstick" />Lipstick</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="nailPolish" />Nail Pollish</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="perfume" />Perfume</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="massageOil" />Massage Oils</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="faceWash" />Face Wash and Cleanser</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="bindi" />Bindi</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="serum" />Serum and Gel</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="skinCare" />Skin Care Combo</li>
                            <li className="text-danger ps-4 pt-2">+173 more</li>
                        </ul><hr />
                        <p className='ps-4 d-flex justify-content-between w-75 align-items-center'>
                            <b>BRAND</b>
                            <FaSearch />
                        </p>
                        <ul className='list-unstyled ps-4'>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="lipstick" id="" />Comet Busters</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="nail" id="" />PERPAA</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="perfume" id="" />MI FASHION</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="massage" id="" />NOY</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="face" id="" />DEV HERBS</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="bindi" id="" />MENJEWELL</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="serum" id="" />ME-ON</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="skin" id="" />FORFOR</li>
                            <li className="text-danger ps-4 pt-2">+1720 more</li>
                        </ul><hr />

                        <p className='ps-4'><b>PRICE</b></p>
                        <ul className='list-unstyled ps-4'>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="20" id="" />Rs.21 to Rs.11493</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="40" id="" />Rs.21 to Rs.22965</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="60" id="" />Rs.21 to Rs.34437</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="80" id="" />Rs.21 to Rs.45909</li>
                        </ul><hr />

                        <p className='ps-4 d-flex justify-content-between w-75 align-items-center'>
                            <b>COLOR</b>
                            <FaSearch />
                        </p>
                        <ul className='list-unstyled ps-4'>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="lipstick" />White</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="nail" />Pink</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="perfume" />Multi</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="massage" />Black</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="face" />Brown</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="bindi" />Red</li>
                            <li className='d-flex align-items-center mb-2'><input type="checkbox" className='d-inline-block me-3' name="serum" />Green</li>
                            <li className="text-danger ps-4 pt-2">+39 more</li>
                        </ul><hr />

                        <p className='ps-4'><b>DISCOUNT RANGE</b></p>
                        <ul className='list-unstyled ps-4'>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />10% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />20% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />30% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />40% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />50% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />60% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />70% and above</li>
                            <li className='d-flex align-items-center mb-2'><input type="radio" name="discount" id="" className='d-inline-block me-3' />80% and above</li>
                        </ul>
                    </div>
                </aside>
                <div style={{ width: '85vw' }}>
                    <div className='sorted-beauty d-flex pt-5 mt-3 justify-content-between align-items-center pb-1'>
                        <div className='d-flex justify-content-center align-items-center ps-3'>
                            <p className='me-3 mt-1'>Bundles <IoMdArrowDropdown /></p>
                            <p className='me-3 mt-1'>Country of Origin <IoMdArrowDropdown /></p>
                            <p className='me-3 mt-1'>Size <IoMdArrowDropdown /></p>
                        </div>
                        <Form.Select name="" id="" className='w-25' onChange={(e) => setSelectVal(e.target.value)}>
                            <option value="">Sorted by:Recommended</option>
                            <option value="whatNew">What's New</option>
                            <option value="popular">Popularity</option>
                            <option value="discount">Better Discount</option>
                            <option value="desc">Price:High to Low</option>
                            <option value="asc">Price:Low to High</option>
                            <option value="rating">Cutomer Rating</option>
                        </Form.Select>
                    </div><hr />
                    <div className="d-flex justify-content-around flex-wrap align-items-center">
                        {data.length > 0 ? data.map((e, index) => (
                            <Card style={{ width: '15rem' }} className='mb-3 text-center' key={index}>
                                <Link to={`/prDetail/${e.id}`}>
                                    <Card.Img src={e.image} alt={e.description} />
                                    <Card.Body>
                                        <span>{e.rating} <FaStar className='text-primary' /> | {e.ratingCount}</span>
                                        <Card.Title className='pt-2'>{e.title}</Card.Title>
                                        <Card.Text className='text-secondary m-0'>{e.description}</Card.Text><br />
                                        <Card.Text><b>{e.price}</b></Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        )) : <h1 className='text-center mt-5 ps-5'>Sorry Products Not available!!!</h1>}
                    </div>
                    <div className='data-btns d-flex justify-content-center mt-5 align-items-center w-50 bg- m-auto'>
                        <button className="btn btn-secondary p-2 me-2" onClick={(e) => setPage(page - 1)} disabled={page == 1}>Previous</button>
                        <h4>{page}</h4>
                        <button className="btn btn-secondary p-2 ms-2" onClick={(e) => setPage(page + 1)} disabled={data.length==0}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beauty