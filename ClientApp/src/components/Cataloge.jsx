import React , { useState} from 'react';

export const Cataloge = () => {
    
    const [showBrands, setShowBrands] = useState(false);
    const [showTypes, setShowTypes] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [sortByPriceLow, setSortByPriceLow] = useState(false);
    
        const cars = [
            { brand: 'Volkswagen', model: 'Golf 7', type: 'Hatchback', price: 35, image: 'images/cars/Golf7.png' },
            { brand: 'Mercedes', model: 'E Class', type: 'Sedan', price: 50, image: 'images/cars/Mercedes(2).png' },
            { brand: 'Skoda', model: 'Octavia', type: 'Sedan', price: 25, image: 'images/cars/Skoda.png' },
            { brand: 'Porsche', model: 'Cayenne', type: 'SUV', price: 100, image: 'images/cars/Porsche.png' },
            { brand: 'Renault', model: 'Koleos', type: 'SUV', price: 30, image: 'images/cars/Renault.png' },
            { brand: 'Volkswagen', model: 'Passat', type: 'Sedan', price: 30, image: 'images/cars/PassatZi.png' },
            { brand: 'Renault', model: 'Megan', type: 'Sedan', price: 25, image: 'images/cars/RenaultM.png' },
            { brand: 'Volkswagen', model: 'Golf 5', type: 'Hatchback', price: 20, image: 'images/cars/Golf5.png' },
            { brand: 'Lamborghini', model: 'Urus', type: 'SUV', price: 1000, image: 'images/cars/LamborghiniUrus.png' },
            { brand: 'Mercedes', model: 'Maybach S680', type: 'Sedan', price: 1050, image: 'images/cars/Maybach.png' },
            { brand: 'Audi', model: 'A4', type: 'Sedan', price: 25, image: 'images/cars/AUDI.png' },
            { brand: 'BMW', model: '118D', type: 'Hatchback', price: 60, image: 'images/cars/BMW.png' },
            { brand: 'Porsche', model: '911 GT3', type: 'Supercar', price: 950, image: 'images/cars/PorscheGT3.png' },
            { brand: 'Volkswagen', model: 'Passat', type: 'Sedan', price: 40, image: 'images/cars/Passat.png' },
            { brand: 'BMW', model: 'X6', type: 'SUV', price: 850, image: 'images/cars/BMWX6.png' },
            { brand: 'AUDI', model: 'A7', type: 'Sedan', price: 300, image: 'images/cars/AUDIA7.png' },
            { brand: 'RangeRover', model: 'Sport', type: 'SUV', price: 500, image: 'images/cars/RangeRover.png' },
            { brand: 'Kia', model: 'Sportage', type: 'SUV', price: 45, image: 'images/cars/KIA.png' },
            { brand: 'Mercedes', model: 'CLA', type: 'Sedan', price: 150, image: 'images/cars/MercedesCLA.png' },
            { brand: 'BMW', model: 'M5', type: 'Sport', price: 525, image: 'images/cars/BMWM5.png' },
            { brand: 'Jeep', model: 'Wrangler', type: 'Off-road', price: 40, image: 'images/cars/JeepWrangler.png' },
            { brand: 'Skoda', model: 'Fabia', type: 'Hatchback', price: 25, image: 'images/cars/SkodaFabia.png' },
            { brand: 'Kia', model: 'Optima', type: 'Sedan', price: 30, image: 'images/cars/KiaOptima.png' },
            { brand: 'Skoda', model: 'Kodiaq', type: 'SUV', price: 30, image: 'images/cars/SkodaKodiaq.png' },
            
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

    const toggleSortByPrice = () => {
        setSortByPriceLow(!sortByPriceLow);
    };

    let filteredCars = cars.filter((car) => {
        return (!selectedBrand || car.brand === selectedBrand) && (!selectedType || car.type === selectedType);
    });

    filteredCars = [...filteredCars].sort((a, b) => {
        return sortByPriceLow ? a.price - b.price : b.price - a.price;
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

                <button onClick={toggleSortByPrice}>
                    {sortByPriceLow ? 'Sort By High Price' : 'Sort By Low Price'}
                </button>
            </div>
            <div className="cars">
                {filteredCars.map((car, index) => (
                    <div className="car" key={index}>
                        <div className="carform"></div>
                        <img src={car.image} alt={car.model} />
                        <h2>{car.model}</h2>
                        <h3 className='brandi'>Brand: {car.brand}</h3>
                        <h4 className='brandi'>Type: {car.type}</h4>
                        <h3>Price ${car.price} </h3>
                        <a href="/">More Details</a>
                        <button className="btnbook">Book Now</button>
                    </div>
                ))}
            </div>

                
            
        </div>
    )
}