import React , { useState} from 'react';

export const Cataloge = () => {
    
    const [showBrands, setShowBrands] = useState(false);
    const [showTypes, setShowTypes] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    
        const cars = [
            { brand: 'Volkswagen', model: 'Golf 7', type: 'SUV', price: 35, image: 'images/Golf7.png' },
            { brand: 'Mercedes', model: 'E Class', type: 'Sedan', price: 50, image: 'images/Golf7.png' },
            // Add more cars with their respective brands, models, types, prices, and images
        ];
        
        const brands = Array.from(new Set(cars.map((car) => car.brand)));
    const types = Array.from(new Set(cars.map((car) => car.type)));

    const toggleBrandList = () => {
        setShowBrands(!showBrands);
        setShowTypes(false); 
    };

    const toggleTypeList = () => {
        setShowTypes(!showTypes);
        setShowBrands(false);
    };

    const selectBrand = (brand) => {
        setSelectedBrand(brand === selectedBrand ? null : brand);
        setShowBrands(false);
    };

    const selectType = (type) => {
        setSelectedType(type === selectedType ? null : type);
        setShowTypes(false);
    };

    const filteredCars = cars.filter((car) => {
        return (!selectedBrand || car.brand === selectedBrand) && (!selectedType || car.type === selectedType);
    });

    return(
        <div className="maincl">
            <div className="upper">
            <h1>Our Fleet</h1>
            <p className="w-50">Looking for an unforgettable experience? Get behind the wheel of one of our many exotic cars for rent. We have them all in the fleet with 
                the best pricing guaranheed and more free miles included if it's speed. Gorgeous looks and the unmistakable roar of a race inspired engine that you're after.</p>
            </div>
            <div className="uppersc">

                <div className="btnsort">
                    <button onClick={toggleBrandList}>Sort By Brands</button>
                    {showBrands && (
                        <div className="brand-list">
                            <ul>
                                {brands.map((brand, index) => (
                                    <li key={index} onClick={() => selectBrand(brand)}>
                                        {brand}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>  

                <button>View Available Cars</button>

                <div className='btnsort'>
                    <button onClick={toggleTypeList}>Sort By Type</button>
                    {showTypes && (
                        <div className="brand-list">
                            <ul>
                                {types.map((type, index) => (
                                    <li key={index} onClick={() => selectType(type)}>
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <button>Low/High Price</button>
            </div>
            <div className="cars">
                {filteredCars.map((car, index) => (
                    <div className="car" key={index}>
                        <div className="carform"></div>
                        <img src={car.image} alt={car.model} />
                        <h2>{car.model}</h2>
                        <h3 className='brandi'>Brand: {car.brand}</h3>
                        <h4 className='brandi'>Type: {car.type}</h4>
                        <h4>Price ${car.price} </h4>
                        <a href="/">More Details</a>
                        <button className="btnbook">Book Now</button>
                    </div>
                ))}
            </div>

                
            
        </div>
    )
}