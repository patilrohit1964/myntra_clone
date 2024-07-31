import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaRegHeart } from 'react-icons/fa'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
const ListProduct = () => {

    const [data, setData] = useState([]);
    const [sortSelect, setSelect] = useState(null);
    const { category } = useParams();
    const [search, setSearch] = useState(null);

    async function getDataWithCategory() {
        let data = axios.get(`http://localhost:3000/beautyProducts`, {
            params: {
                category: category,
                _sort: "price",
                _order: sortSelect,
                q: search
            }
        })
        let result = (await data).data;
        setData(result);
    }

    useEffect(() => {
        getDataWithCategory();
    }, [sortSelect, search]);

    return (
        <div className='listProduct-comp'>
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <Form.Control type='search' placeholder='type here for search products' onChange={(e) => setSearch(e.target.value)} className='w-25' />
                <Form.Select className='w-25 ms-5' onChange={(e) => setSelect(e.target.value)}>
                    <option value="">Sorted by</option>
                    <option value="asc">Low To High</option>
                    <option value="desc">High To Low</option>
                </Form.Select>
            </div>
            <div className='d-flex justify-content-center flex-wrap mt-5'>
                {data.length > 0 ? data.map((e, index) => (
                    <Card style={{ width: '15rem' }} className='mb-3 text-center me-2' key={index}>
                        <Link to={`/prDetail/${e.id}`}>
                            <Card.Img src={e.image} alt={e.description} />
                            <Card.Body>
                                <span>{e.rating} <FaStar className='text-primary' /> | {e.ratingCount}</span>
                                <Card.Title className='pt-2'>{e.title}</Card.Title>
                                <Card.Text className='text-secondary m-0'>{e.description}</Card.Text><br />
                                <Card.Text><b>{e.price}</b></Card.Text>
                                <div className="cbhover">
                                    <button className='btn border-secondary bg-danger text-white'>
                                        <FaRegHeart /> Wishlist
                                    </button>
                                </div>
                            </Card.Body>
                        </Link>
                    </Card>
                )) : <h1 className='text-center mt-5 ps-5'>Sorry Products Not available!!!</h1>}
            </div>
        </div>
    )
}

export default ListProduct