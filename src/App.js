import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./App.css"

// import required modules
import { Navigation } from "swiper";

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
max-width: 500px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 768px) {
  width: 100%;
}
`
const Title = styled.h1`
text-align: center;

`
const SubTitle = styled.h3`
text-align: center;
`

export default function App() {
  return (
    <Wrapper>
      <Container>
        <Title>Title</Title>
        <SubTitle>Subtitle</SubTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Container>
    </Wrapper>
  );
}
