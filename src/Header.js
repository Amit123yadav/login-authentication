import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-images flex-column'>
                            <img src='./images/shoes.jpg' alt='load img' className='img-fluid img-style' />
                            <button className='btn btn-success btn-stylish'>Buy Now</button>
                        </div>
                        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                            <h1 className='display-2'>Online payment made<br />easy for you.</h1>
                            <p className='main-hero-para'>Online payments refer to the electronic exchange of currency through the internet. These payments usually consist of the transfer of monetary funds from a customer's bank or debit or credit card account, into the seller's bank account, in exchange for products or services...</p>
                            <span className='d-flex price-style'>
                                <i className="fa-solid fa-rupee-sign font-style"></i>
                                <i className="fa-solid fa-equals equal-style"></i>
                                <p>1999/-</p>
                            </span>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;