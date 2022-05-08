import React from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import './Testimonial.css'
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            src: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
            author: "Abdul Mateen",
            job: "Software Engineer",
            msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...",
            star: "★★"
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg",
            author: "Abdul Ullah",
            job: "Hadware Engineer",
            msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...",
            star: "★★★",
        },
        {
            id: 3,
            src: "https://learnworthy.net/wp-content/uploads/2019/10/10-things-every-programmer-should-know.jpg",
            author: "Ali Khan",
            job: "UX/UI designer",
            msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...",
            star: "★★★★"
        },
        {
            id: 4,
            src: "https://miro.medium.com/max/1400/0*ZO6M-ixpsCbd3wGb",
            author: "Asif Ullah",
            job: "Front End Developer",
            msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...",
            star: "★"
        },
        {
            id: 5,
            src: "https://imageio.forbes.com/specials-images/dam/imageserve/1135157668/0x0.jpg?format=jpg&width=1200",
            author: "Kaleem Ullah",
            job: "UX/UI designer",
            msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...",
            star: "★★★★★"
        }
    ];

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>My Clients</span> &nbsp;&nbsp;
                <span>Top Reviews</span>&nbsp;&nbsp;
                <span>About me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "var(skyblue)" }}></div>
            </div>
            {/* Slider */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                grabCursor={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {
                    reviews.map((review, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonials">
                                    <img src={review.src} alt="Img" />
                                    <span>Reviews No: {review.id}</span>
                                    <span>Name: {review.author}</span>
                                    <span>Star: <span className='star'>{review.star}</span></span>
                                    <span>Star: <span className='job'>{review.job}</span></span>
                                    <span>{review.msg}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonial