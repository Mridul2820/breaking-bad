import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Quotes from '../components/Quotes'

const Detail = () => {
    const { id } = useParams()
    const [detailData, setDetailData] = useState()

    useEffect(() => {
        const fetchItems = async () => {
            const detailResult = await axios(`https://www.breakingbadapi.com/api/characters/${id}`)
            setDetailData(detailResult.data[0])
        }

        fetchItems()

         // eslint-disable-next-line
    }, [])

    if(!detailData) return <Loading />

    return (
        <Container>
            <TopWrap>
                <DetailImage>
                    <img src={detailData.img} alt="" />
                </DetailImage>
                <DetailData>
                    <h2>Name : {detailData.name}</h2>
                    <DetailItem>
                        <span>Date of Birth : </span>
                        {detailData.birthday}
                    </DetailItem>
                    <DetailItem>
                        <span>Occupation : </span>
                    </DetailItem>
                    <Occupations>
                        {detailData.occupation?.map((occu, id) => (
                            <li key={id}>{occu}</li>
                        ))}
                    </Occupations>

                    <DetailItem>
                        <span>Status : </span>
                        {detailData.status}
                    </DetailItem>

                    {detailData.nickname &&
                    <DetailItem>
                        <span>Nickname : </span>
                        {detailData.nickname}
                    </DetailItem>
                    }
                    <DetailItem>
                        <span>Portrayed by : </span>
                        {detailData.portrayed}
                    </DetailItem>
                    <DetailItem>
                        <span>Seasons : </span>
                        {detailData.appearance.map((season, i) => (
                            <span key={i}>
                                {i > 0 && ", "}
                                {season}
                            </span>
                        ))}
                    </DetailItem>

                </DetailData>
            </TopWrap>
            <Quotes author={detailData.name} />
        </Container>
    )
}

const Container = styled.div`
    padding: 50px 40px;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    color: #fff;
`

const TopWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

const DetailImage = styled.div`
    width: 250px;
    margin-right: 30px;

    img {
        width: 100%;
    }
`
const DetailData = styled.div``

const DetailItem = styled.p`
    margin: 12px 0;
    font-size: 18px;
    display: flex;

    span {
        font-weight: 600;
        margin-right: 5px;
    }
`

const Occupations = styled.ul`
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 24px;
    padding-left: 30px;
`


export default Detail
