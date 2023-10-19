import React from 'react'
import Image from 'next/image'

const SearchBar: React.FC = () => {
    return (
        <div className='w-100 mb-3 mb-lg-0'>
            <div className='position-relative'>
                <input className='w-100 custom-input' type="text" placeholder='Buscar' />
                <button className='btn position-absolute' style={{ right: '0' }}>
                    <Image src="/svg/search.svg" alt="logo" width={25} height={25} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar
