import React from 'react'

const Beauty = () => {
    return (
        <div>
            <aside>
                <div className='text-center p-3'>
                    <span>Home / <b>Personal Care</b></span>
                    <p><b>Personal Care</b> - <span className='text-secondary'>102464 items</span></p>
                </div>
                <p className='ps-4'><b>Filters</b></p>
                <hr />
                <div>
                    <ul className='list-unstyled ps-4'>
                        <li><input type="radio" name="gender" className='d-inline-block me-3' /><b>Men</b></li>
                        <li><input type="radio" name="gender" className='d-inline-block me-3' /><b>Women</b></li>
                        <li><input type="radio" name="gender" className='d-inline-block me-3' /><b>Boy</b></li>
                        <li><input type="radio" name="gender" className='d-inline-block me-3' /><b>Girl</b></li>
                    </ul><hr />
                </div>
            </aside>
        </div>
    )
}

export default Beauty