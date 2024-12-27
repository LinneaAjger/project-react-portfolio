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
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;

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
    }
`
export const GridItemFive = styled.div`
    grid-row: 9;

    @media (min-width: 840px) {
    grid-column: 1 / 3;
    grid-row: 5;
    }
    `

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;    
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

    @media (min-width: 840px) {
        flex-direction: row;
        padding: 40px 20px 40px 20px;
        gap: 30px;
        }
    @media (min-width: 1024px) {
        padding: 50px 60px 60px 60px;
        gap: 50px;
        max-width: 590px;

    }
`

export const CardText = styled.div`
@media (min-width: 668px) {
    width: 50%;
}`

export const Span = styled.span`
    font-style:italic;
`

export const TitleTertiary = styled.h3`
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${(props) => (props.selectedColor)};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
    margin-top: ${(props) => (props.marginTop)};
    `

export const TitleQuaternary = styled.h4`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.5rem;
    /* color: #285841; */
    color: #7260c0;
    text-transform: uppercase;
    margin: 0.5rem 0rem;

`

export const IconGroup = styled.div`
    position: ${(props) => (props.position)};
    top: ${(props) => (props.top)};
    right: ${(props) => (props.right)};
    display: flex;
    width: 100%;
    justify-content:${(props) => (props.justifyContent)};
    gap: 10px;
  `

export const SingleTag = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    line-height: 0.9rem;
    background-color: #ffe7c0;
    margin: 10px 8px 0px 0px;
    padding: 3px 8px;
    border-radius: 2px;
    width: fit-content;
    white-space: nowrap;
`
