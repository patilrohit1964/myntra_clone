import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ListProduct = () => {

    const [data, setData] = useState([]);
    const { category } = useParams();
    console.log(category)
    function getDataWithCategory(e) {
        axios.get(`http://localhost:3000/beautyProducts`, {
            params: {
                category: category
            }
        }).then(e => setData(e)).catch(e=>console.log(e));
    }
    useEffect(() => {
        getDataWithCategory();
    }, []);


    return (
        <div>
            {data.length > 0 ? data.map((e, index) => (
                <Card style={{ width: '15rem' }} className='mb-3 text-center' key={index}>
                    <Link to={'/listProduct'}>
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
    )
}

export default ListProduct