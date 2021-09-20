import {
    Button,
    Theme,
    H5,
    H4,
    H1,
    P,
    Link
} from '../styles'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Socials from './socials'

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  


const MediaSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: ${Theme.spacing.medium};

    @media ${Theme.breakpoints.mobileL} {
        padding: ${Theme.spacing.small};
    }

    & > hr {
        width: 80%;
        max-width: 1400px;
    }

    
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (min-width: 1000px) {
        flex-direction: row;
    }
`

const Gallery = styled.div`
`

const Posts = styled.div`
    max-width: 50%;
    padding: 20px;

    @media screen and (max-width: 1000px) {
        max-width: 100%;
    }
`
const posts = [
    { title: 'Title', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'link', timestamp: 'timestamp'},
    { title: 'Title', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'link', timestamp: 'timestamp'},
    { title: 'Title', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'link', timestamp: 'timestamp'}
]


const MediaSection = ({heading, body, buttonText, buttonSrc}) => {
    return (
        <MediaSectionWrapper>
            <hr />
            <H1>Gallery</H1>
            <ContentWrapper>
                <Gallery>
                    <ImageGallery items={images} />
                </Gallery>
                <Posts>
                    {
                        posts.map((post, index) => {
                            return (
                                <div key={index} style={{paddingTop: '10px'}}>
                                    <H5>{post.title}</H5>
                                    <P>{post.body}</P>
                                    <Link href={post.link}>Read More</Link>
                                </div>
                            )
                        })
                    }
                </Posts>
            </ContentWrapper>
            <H4>Contact us here</H4>
            <Socials />
            <hr />
        </MediaSectionWrapper>
    )
}

export default MediaSection;