import styled from 'styled-components/macro'

export const OuterWrapper = styled.main`
    /* background-color: ${(props) => (props.selectedColor)}; */
    background-image:${(props) => (props.backgroundImage)};

`
export const InnerWrapper = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width: 1270px;

    @media (min-width:1025px) {
        width: 80%;
        max-width: 1300px;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;
    justify-items: center;

    @media (min-width: 840px) {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: auto;
        row-gap: 170px;
        }
`

export const GridItemOne = styled.div`
    grid-row: 3;

    @media (min-width: 840px) {
        grid-column: 1 / 3;
        grid-row: 2;
        margin-top: -110px;
        width: 100%;
}
`
export const GridItemTwo = styled.div`
    grid-row: 2;
    display: flex;
    justify-content: space-around;
    margin-top: -130px;
    margin-bottom: -50px;

    @media (min-width: 840px) {
        grid-column: 3 / 5;
        grid-row: 2;
        display: flex;
        align-items: flex-end;    }

`
export const GridItemThree = styled.div`
    grid-row: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 840px) {
        grid-column: 1 / 5;
        grid-row: 3;
    }
`
export const GridItemFour = styled.div`
    grid-row: 7;
    
    @media (min-width: 840px) {
        grid-column: 3 / 5;
        grid-row: 4;
        display: flex;
        justify-content: flex-end;
    }
`
export const GridItemFive = styled.div`
    grid-row: 9;

    @media (min-width: 840px) {
    grid-column: 1 / 3;
    grid-row: 5;
    }
    `

export const GridTitleOne = styled.h4`
    grid-row: 4;
    margin-top: 20px;
    margin-bottom: -20px;

    @media (min-width: 840px) {
        display: none;
    }
`
export const GridTitleTwo = styled.h4`
    grid-row: 6;
    margin-top: 20px;
    margin-bottom: -20px;

    @media (min-width: 840px) {
        display: none;
    } 
`
export const GridTitleThree = styled.h4`
    grid-row: 8;
    margin-top: 20px;
    margin-bottom: -20px;
    @media (min-width: 840px) {
        display: none;
    }
`

export const CardBox = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.selectedColor)};
    color: ${(props) => (props.textColor)};
    padding: 50px 40px;
    gap: 10px;
    max-width: 470px;
    width: 100%;

    @media (min-width: 840px) {
        flex-direction: row;
        padding: 40px 20px 40px 20px;
        gap: 30px;
        min-width: 420px;
        }
    @media (min-width: 1024px) {
        padding: 40px 30px;
        min-width: 500px;
        max-width: 600px;
        
        h2 {
            min-width: 250px;
        }
    }
`

export const CardText = styled.div`
min-width: 200px;

p {
    margin-top: 10px;
}
`

export const Span = styled.span`
    font-style:italic;
`
