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

                <div className="{styles.stats}">
                    <div className="{styles.stat}">
                        <span className="{styles.statNumber}">1.2k</span>
                        <span className="styles.statLabel">Followers</span>

                    </div>
                      <div className="{styles.stat}">
                        <span className="{styles.statNumber}">500</span>
                        <span className="styles.statLabel">Following</span>

                    </div>
                      <div className="{styles.stat}">
                        <span className="{styles.statNumber}">1</span>
                        <span className="styles.statLabel">Projects</span>

                    </div>
                </div>
                    <p className="{styles.bio}">Passionate about creating beautyful, user-friendly web experience.
                       love working with React, Typescripte and modern web Techonlogy.
                    </p>

                    <div className="{styles.actions}">
                        <button className="{styles.primaryButton}">Follow</button>
                        <button className="{styles.secondaryButton}">message</button>
                    </div>

            </div>

        </div>

    )
}
export default ProfileCard;