import React, { createContext, useState } from 'react';

export const FoodContext = createContext();

export const FoodList = (props) => {
    const [foods, setFood] = useState([
        {
            name:'Bagel and Cream Cheese',
            slogan:'How we dream about our future',
            price:6.99,
            image:'../Resources/Breakfast/breakfast4.png',
            category: 'breakfast'
        },
        {
            name:'Breakfast Sandwich',
            slogan:'How we dream about our future',
            price:9.99,
            image:'../Resources/Breakfast/breakfast2.png',
            category: 'breakfast'
        },
        {
            name:'Baked Chicken',
            slogan:'How we dream about our future',
            price:10.99,
            image:'../Resources/Breakfast/breakfast3.png',
            category: 'breakfast'
        },
        {
            name:'Eggs Benedict',
            slogan:'How we dream about our future',
            price:8.99,
            image:'../Resources/Breakfast/breakfast1.png',
            category: 'breakfast'
        },
        {
            name:'Toast Croissant Fried Egg',
            slogan:'How we dream about our future',
            price:19.99,
            image:'../Resources/Breakfast/breakfast6.png',
            category: 'breakfast'
        },
        {
            name:'Full Breakfast Fried Toast Brunch',
            slogan:'How we dream about our future',
            price:3.99,
            image:'../Resources/Breakfast/breakfast5.png',
            category: 'breakfast'
        },
        {
            name:'Healthy Meal Plan',
            slogan:'How we dream about our future',
            price:23.99,
            image:'../Resources/lunch/lunch6.png',
            category:'lunch'
        },
        {
            name:'Fried Chicken Bento',
            slogan:'How we dream about our future',
            price:9.99,
            image:'../Resources/lunch/lunch5.png',
            category:'lunch'
        },
        {
            name:'Tarragon Rubbed Salmon',
            slogan:'How we dream about our future',
            price:6.99,
            image:'../Resources/lunch/lunch3.png',
            category:'lunch'
        },
        {
            name:'Indian Lunch',
            slogan:'How we dream about our future',
            price:8.99,
            image:'../Resources/lunch/lunch4.png',
            category:'lunch'
        },
        {
            name:'Beef Steak',
            slogan:'How we dream about our future',
            price:15.99,
            image:'../Resources/lunch/lunch1.png',
            category:'lunch'
        },
        {
            name:'Honey-Soy-Glazed Salmon With Peppers',
            slogan:'How we dream about our future',
            price:7.99,
            image:'../Resources/lunch/lunch2.png',
            category:'lunch'
        },
        {
            name:'Salmon With Grape Fruit & Lentil Salad',
            slogan:'How we dream about our future',
            price:9.99,
            image:'../Resources/Dinner/dinner6.png',
            category:'dinner'
        },
        {
            name:'Lemony Salmon Piccata',
            slogan:'How we dream about our future',
            price:10.99,
            image:'../Resources/Dinner/dinner2.png',
            category:'dinner'
        },
        {
            name:'Pork Tenderloin With Quinoa Pilaf',
            slogan:'How we dream about our future',
            price:12.99,
            image:'../Resources/Dinner/dinner5.png',
            category:'dinner'
        },
        {
            name:'French Fries With Cheese',
            slogan:'How we dream about our future',
            price:8.99,
            image:'../Resources/Dinner/dinner4.png',
            category:'dinner'
        },
        {
            name:'Garlic Butter Baked Salmon',
            slogan:'How we dream about our future',
            price:6.99,
            image:'../Resources/Dinner/dinner3.png'
        },
        {
            name:'Baked Chicken',
            slogan:'How we dream about our future',
            price:9.99,
            image:'../Resources/Dinner/dinner1.png',
            category:'dinner'
        }
    ])
    return (
        <div>
            <FoodContext.Provider value={[foods,setFood]}>
                {props.children}
            </FoodContext.Provider>
        </div>
    );
};





