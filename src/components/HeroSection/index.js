import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
/* import Video from '../../videos/programming.mp4'  */

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer id='home'>
        <HeroBg>
            {/* <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4'/>  */}
        </HeroBg>
        <HeroContent>
            <HeroH1>Association for Computing Machinery</HeroH1>
            <HeroP>
            Hello! Welcome to ACM.
            </HeroP>
            <HeroP>
                We are a student run organization at CU Denver that devotes time to learning about technology 
                through team based projects with peers in our community.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="page1" 
                onMouseEnter = {onHover} 
                onMouseLeave = {onHover}
                primary={true}
                dark={false}
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true'
                offset={-80}>
                    Learn More {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection