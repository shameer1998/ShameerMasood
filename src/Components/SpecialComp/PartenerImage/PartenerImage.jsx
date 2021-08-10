import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import '../PartenerImage/PartenerImage.css'




const PartenerImage = () => {
    return (
        <div class="partener-image">
            <div class="partener-container">
                <img src="./Pictures/food2.jpg" alt=""/>


                <div className="partener-text">
                    <h1>List your restaurant on MagicMeal</h1>
                    <p>
                        Would you like thousands of new customers to taste your amazing food? So would we!
                        It's simple: we list your menu online, help you process orders, pick them up, and deliver them to hungry foodies - in a heartbeat!
                        Interested? Let's start our partnership today!</p>
                        <div className="partener-button">
                        <Button btn_link="/restaurant-signup" title="Become our Business Partener" height="70px" width="500px"/>
                        </div>
                        

                </div>
               
            </div>
         </div>
    );
 }
 
export default PartenerImage;