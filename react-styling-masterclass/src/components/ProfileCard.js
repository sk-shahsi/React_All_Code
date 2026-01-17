import React from  "react";
import styled from 'styled-components';



const CardContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
    height: 120px;
    background: linear-gradient(135deg, #667eea 0%,#764ba2 100%);
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 20px;

`;

const ProfileImageContainer = styled.div`
        width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 4px solid white;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    background: white;


    img{
         width: 100%;
         height: 100%;
         object-fit: cover;
         display: block;
    }
`;
