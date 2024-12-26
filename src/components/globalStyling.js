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
    grid-column: 1;
    grid-row: 3;

    @media (min-width: 840px) {
        grid-column: 1 / 3;
        grid-row: 2;
}
`
export const GridItemTwo = styled.div`
    grid-column: 1;
    grid-row: 2;

    @media (min-width: 840px) {
        grid-column: 3 / 5;
        grid-row: 2;
        display: flex;
        align-items: flex-end;    }

`
export const GridItemThree = styled.div`
    grid-column: 1;
    grid-row: 4;
    
    @media (min-width: 840px) {
        grid-column: 1 / 5;
        grid-row: 3;
        background-color: beige;
    }
`
export const GridItemFour = styled.div`
    grid-column: 1;
    grid-row: 5;
    
    @media (min-width: 840px) {
        grid-column: 3 / 5;
        grid-row: 4;
    }
`
export const GridItemFive = styled.div`
    grid-column: 1;
    grid-row: 6;

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

export const CardBox = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.selectedColor)};
    color: ${(props) => (props.textColor)};
    padding: 20px 10px;
    gap: 10px;

@media (min-width: 840px) {
    flex-direction: row;
    padding: 50px 60px 60px 60px;
    gap: 50px;
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
