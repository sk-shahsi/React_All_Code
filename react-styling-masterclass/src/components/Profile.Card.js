import React from "react";
import style from'./ProfileCard.module.css';

const ProfileCard = ()=>{
    return(

        <div className="{styles.profileCard}">
            <div className="{styles.cardHeader}">

                <div className="{styles.profileImage}">
                    <img src=""
                    alt="Profile"/>
                </div>
            </div>
            <div className="{styles.cardBody}">
                <h2 className="{styles.name}">Aashish Ranjan</h2>
                <p className="{styles.title}">Frontent Developer</p>
            </div>

        </div>

    )
}
export default ProfileCard;