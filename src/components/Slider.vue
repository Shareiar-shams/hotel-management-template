<template>
    <!-- Slideshow container -->
    <div class="slideshow-container">

        <!-- Full-width images with number and caption text -->
        <div v-for="(img, index) in images" :key="index" class="mySlides fade">
            <img :src="img" :alt="'Slide ' + index">

            <!-- Text Overlay -->
            <div class="text-overlay">
                <h5>My Company</h5>
                <h2>Welcome to Our Service</h2>
                <h4>Trusted by thousands worldwide</h4>
            </div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>

</template>

<script>
    export default {
        name: 'SlideShow',
        data() {
            return {
                slideIndex: 1,
                autoSlideInterval: null,
                images: [
                    require('@/assets/slider1.avif'),
                    require('@/assets/slider2.avif'),
                    require('@/assets/slider3.avif'),
                    require('@/assets/slider4.avif'),
                    require('@/assets/slider5.webp')
                ]
            };
        },
        methods: {
            plusSlides(n) {
                this.slideIndex += n;
                this.showSlides(this.slideIndex);
                this.resetAutoSlide(); // reset auto slide
            },
            currentSlide(n) {
                this.slideIndex = n;
                this.showSlides(this.slideIndex);
                this.resetAutoSlide(); // reset auto slide
            },
            showSlides(n) {
                const slides = document.getElementsByClassName("mySlides");

                if (n > slides.length) this.slideIndex = 1;
                if (n < 1) this.slideIndex = slides.length;

                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                slides[this.slideIndex - 1].style.display = "block";
            },
            startAutoSlide() {
                this.autoSlideInterval = setInterval(() => {
                    this.plusSlides(1);
                }, 3000);
            },
            resetAutoSlide() {
                clearInterval(this.autoSlideInterval);
                this.startAutoSlide();
            },
            handleKeyDown(e){
                if(e.key === "ArrowRight")
                    this.plusSlides(1);
                else if(e.key === "ArrowLeft")
                    this.plusSlides(-1);
            }
        },
        mounted() {
            this.showSlides(this.slideIndex);
            this.startAutoSlide();
            window.addEventListener("keydown", this.handleKeyDown);
        },
        beforeUnmount() {
            clearInterval(this.autoSlideInterval);
            window.removeEventListener("keydown", this.handleKeyDown)
        }
    };
</script>



<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .slideshow-container {
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    .mySlides {
        display: none;
        height: 100%;
    }

    .mySlides img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 40%;
        width: auto;
        height: 100px;
        padding: 40px 16px 16px 16px;
        color: white;
        background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ff512f), color-stop(100%, #dd2476));
        background-image: -moz-linear-gradient(left, #ff512f, #dd2476);
        background-image: -webkit-linear-gradient(left, #ff512f, #dd2476);
        background-image: linear-gradient(to right, #ff512f, #dd2476);
        font-weight: bold;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        pointer-events: none;
    }
    .slideshow-container:hover .prev,
    .slideshow-container:hover .next {
        opacity: 0.7;
        pointer-events: auto;
    }

    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
    }

    .text-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #ff512f;
        z-index: 10;
        padding: 10px 20px;
    }

    .text-overlay h5 {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    .text-overlay h2 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .text-overlay h4 {
        font-size: 26px;
        font-weight: 400;
    }

    .fade {
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

    /* Responsive Styles */
    @media screen and (max-width: 768px) {
        .mySlides img {
            width: 100%;
            height: 80vh;
            display: block;
            object-fit: cover;
        }
        .prev, .next {
            top: 30%;
        }
    }
</style>
