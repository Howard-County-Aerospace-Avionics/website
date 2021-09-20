import {
    Button,
    Theme,
    H2,
    P,
} from '../styles'
import styled from 'styled-components'

const InfoSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${Theme.colors.white};
    padding: ${Theme.spacing.medium};
    @media ${Theme.breakpoints.mobileL} {
        padding: ${Theme.spacing.small};
    }

    & > H2 {
        margin-top: 50px;
        margin-bottom: 25px;
    }

    & > P {
        margin-bottom: 40px;
        width: 80%;
        max-width: 1400px;
        text-align: center;
    }
    & > Button {
        margin-top: 20px;
        margin-bottom: 40px;
    }
`

const InfoSection = ({heading, body, buttonText, buttonSrc, id}) => {
    return (
        <InfoSectionWrapper id={id}>
            <H2>{heading}</H2>
            <P>{body}</P>
            <Button href={buttonSrc}>{buttonText}</Button>
        </InfoSectionWrapper>
    )
}

export default InfoSection;