import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemCard = ({ item }) => {
    // console.log(item);
    
    return (
        <CardWrap to={`/character/${item.char_id}`}>
            <Image>
                <img src={item.img} alt={item.name} />
            </Image>
            
            <Detail>
                <h3>
                    Name: {item.name}
                </h3>
                <DetailItem>
                    <span>Occupation : </span>
                </DetailItem>
                <Occupations>
                    {item.occupation?.map((occu, id) => (
                        <li key={id}>{occu}</li>
                    ))}
                </Occupations>
                
                <DetailItem>
                    <span>Date of birth : </span>
                    {item.birthday}
                </DetailItem>
                <DetailItem>
                    <span>Status : </span>
                    {item.status}
                </DetailItem>
            </Detail>
        </CardWrap>
    )
}

const CardWrap = styled(Link)`
    box-shadow: 2px 4px 10px rgba(72, 127, 90, .2);
    cursor: pointer;
    transition: all.5s;
    border-radius: 3px;
    overflow: hidden;
    max-width: 250px;
    background: #fff;

    &:hover {
        box-shadow: 2px 4px 10px rgba(72, 127, 90, .5);
    }
`

const Image = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        vertical-align: top;
    }
`

const Detail = styled.div`
    padding: 10px 15px;
`


const DetailItem = styled.p`
    margin: 8px 0;

    span {
        font-weight: 600;
    }
`

const Occupations = styled.ul`
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 24px;
    padding-left: 30px;
`

export default ItemCard
