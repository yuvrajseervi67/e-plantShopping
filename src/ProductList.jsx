import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(true);
    const [addedToCart, setAddedToCart] = useState({});

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores and purifies surrounding air.", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to the room while removing toxins.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care for and cleans airborne toxins.", cost: "$22" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Purifies air and has medicinal gel inside leaves.", cost: "$10" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729961255-cc3a4469978e?q=80&w=1170&auto=format&fit=crop", description: "Sweet fragrance, promotes relaxation.", cost: "$18" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent, also used in cooking.", cost: "$15" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg", description: "Refreshing aroma, used for teas and garnish.", cost: "$12" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Fresh citrusy smell, relieves stress.", cost: "$14" },
                { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Strong fragrant spring blooming flowers.", cost: "$22" }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop", description: "Thrives in low light and needs minimal water.", cost: "$25" },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Fast growing vine, tolerates neglect well.", cost: "$14" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/agave-482963_1280.jpg", description: "Extremely hardy and survives harsh conditions.", cost: "$20" },
                { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2017/02/08/17/42/succulent-2049561_1280.jpg", description: "Thick glossy leaves, needs very little watering.", cost: "$16" },
                { name: "Succulent Mix", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", description: "Assorted drought-tolerant resilient plants.", cost: "$18" },
                { name: "Chinese Evergreen", image: "https://cdn.pixabay.com/photo/2020/02/15/11/51/flower-4850731_1280.jpg", description: "Attractive patterned foliage for low light.", cost: "$22" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.location.reload();
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
        setShowPlants(false);
    };

    const handleContinueShopping = (e) => {
        if (e) e.preventDefault();
        setShowCart(false);
        setShowPlants(true);
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ height: '50px', width: '50px' }} />
                        <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none', color: 'white' }}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                                <i style={{ color: 'white', fontSize: '14px' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px' }}>
                    <div>
                        <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
                            <h1 className="cart" style={{ display: 'inline-flex', alignItems: 'center', margin: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="40" width="40">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L42.3,72Z" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                    <path d="M30.4,40a8,8,0,0,0,0,16l11.9,1.7L68.7,164.4A32,32,0,0,0,99.6,188H180a32,32,0,0,0,30.9-23.6l19.5-68.4" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                </svg>
                                <span className="cart_quantity_count" style={{ backgroundColor: '#ff3d00', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '14px', marginLeft: '5px' }}>
                                    {totalQuantity}
                                </span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((categoryObj, index) => (
                        <div key={index} className="product-list">
                            <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>{categoryObj.category}</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                                {categoryObj.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '250px', textAlign: 'center' }}>
                                        <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
                                        <div className="product-title" style={{ fontWeight: 'bold', margin: '10px 0' }}>{plant.name}</div>
                                        <div className="product-description" style={{ fontSize: '13px', color: '#666', height: '40px' }}>{plant.description}</div>
                                        <div className="product-price" style={{ margin: '10px 0', fontWeight: 'bold' }}>{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                            style={{
                                                backgroundColor: addedToCart[plant.name] ? '#9E9E9E' : '#4CAF50',
                                                color: 'white',
                                                padding: '8px 16px',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
