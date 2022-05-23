import styled from 'styled-components'

const WIDTH_BREAK = '700px'

const StyledFlex = styled.div`
    display: flex;
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-position: rigth;
    background-repeat: no-repeat;
    backgound-size: cover;

    width: 100%;
    heigth: 100vh;

    @media(max-width: ${WIDTH_BREAK}) {
        display: none;
    }
`
const StyledContainer = styled.div`
    Background-color: ${props => props.theme.white};
    padding: 30px 50px;

    @media (min-width: ${WIDTH_BREAK}) {
        min-width: calc(${WIDTH_BREAK} - 100px);
    }

    @media (max-width: ${WIDTH_BREAK}) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
`

function ImageWithSpace ({ children, image }) {
    return (
        <StyledFlex>
            <StyledImage image={image} />
            <StyledContainer>
                {children}
            </StyledContainer>
        </StyledFlex>
    )
}

ImageWithSpace.defaultProps = {
    image: 'coffee-background.jpg'
}

export default ImageWithSpace