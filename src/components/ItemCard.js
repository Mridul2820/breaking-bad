import React from 'react'
import styled from 'styled-components';

const ItemCard = ({ item }) => {
    // console.log(item);
    
    return (
        <CardWrap>
            <Image>
                <img src={item.img} alt={item.name} />
            </Image>
            
            <Detail>
                <h3>
                    Name: {item.name}
                </h3>
                <DetailItem>
                    Occupation : 
                </DetailItem>
                <Occupations>
                    {item.occupation?.map((occu, id) => (
                        <li key={id}>{occu}</li>
                    ))}
                </Occupations>
                
                <DetailItem>
                    Date of birth : {item.birthday}
                </DetailItem>
                <DetailItem>
                    Status : {item.status}
                </DetailItem>
            </Detail>
        </CardWrap>
    )
}

const CardWrap = styled.div`
    box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
    cursor: pointer;
    transition: all.5s;
    border-radius: 3px;
    overflow: hidden;
    max-width: 250px;

    &:hover {
        box-shadow: 2px 4px 10px rgba(0, 0, 0, .5);
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
`

const Occupations = styled.ul`
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 24px;
    padding-left: 30px;
`

export default ItemCard
