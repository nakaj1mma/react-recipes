import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import { GrPrevious } from 'react-icons/gr'
import { GrNext } from 'react-icons/gr'

interface ArrowProps {
  onClick?: () => void
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <GrPrevious fontSize='1.5rem' color='#00D8FF' />
    </button>
  )
}
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <GrNext fontSize='1.5rem' color='#00D8FF' />
    </button>
  )
}

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    pauseOnFocus: true,
    autoplaySpeed: 4000,
  }
  return (
    <section className='mx-auto max-w-[70rem] text-center '>
      <div className='py-3.5'>
        <Slider {...settings} className='!flex'>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  )
}
