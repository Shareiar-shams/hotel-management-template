<template>
    <nav class="nav">
        <div class="container">
            <!-- Logo -->
            <div class="logo">
                <img :src="logoAttributes.logoSrc" :height="logoAttributes.logoHeight" :alt="logoAttributes.logoAlt">
            </div>

            <!-- Sidebar Navigation -->
            <div ref="sidebar" :class="isMenuOpen ? 'sidebar' : 'main_list'" @click.stop>
                <ul>
                    <li v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="item.link">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>

            <!-- Toggle Button -->
            <div class="media_button">
                <button ref="toggleButton" @click="responsiveMenu" :class="{ 'active': isMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            logoAttributes: {
                logoSrc: require('@/assets/logo.png'),
                logoAlt: "Company Logo",
                logoHeight: "50px"
            },
            menuItems: [
                { name: 'Home', link: '/' },
                { name: 'Rooms', link: '/rooms' },
                { name: 'About', link: '/about' },
                { name: 'Contact Us', link: '/contact' }
            ],
            isMenuOpen: false
        }
    },
    methods: {
        responsiveMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenuOnClickOutside(event) {
            if (
                this.isMenuOpen && 
                this.$refs.sidebar && 
                this.$refs.toggleButton && 
                !this.$refs.sidebar.contains(event.target) && 
                !this.$refs.toggleButton.contains(event.target)
            ) {
                this.isMenuOpen = false;
            }
        },
        handleResize() {
            if (window.innerWidth > 768) {
                this.isMenuOpen = false;
            }
        },
    },
    mounted() {
        document.addEventListener("click", this.closeMenuOnClickOutside);
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.closeMenuOnClickOutside);
        window.removeEventListener("resize", this.handleResize);
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    /* Navbar */
    .nav {
        background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ff512f), color-stop(100%, #dd2476));
        background-image: -moz-linear-gradient(left, #ff512f, #dd2476);
        background-image: -webkit-linear-gradient(left, #ff512f, #dd2476);
        background-image: linear-gradient(to right, #ff512f, #dd2476);
        width: 100%;
        background-color: rgba(205, 205, 224, 0.8);
        transition: background-color 0.3s ease-in-out;
    }

    /* Container */
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin: 0 5%;
    }

    /* Logo */
    .logo img {
        margin-top: 10px;
        height: 50px;
    }

    /* Navigation Menu */
    .main_list {
        display: flex;
    }

    .main_list ul {
        list-style: none;
        display: flex;
        padding: 0;
    }

    .main_list ul li {
        margin: 0 15px;
    }

    .main_list ul li a {
        text-decoration: none;
        color: #413636;
        text-transform: uppercase;
        font-size: 16px;
        position: relative;
        transition: color 0.3s ease-in-out;

    }

    /* Hover Effect */
    .main_list ul li a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background: #aa8f8f;
        bottom: -3px;
        left: 50%;
        transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }

    .main_list ul li a:hover::after {
        width: 100%;
        left: 0;
    }

    .main_list ul li a:hover {
        color: #e0d3d3;
    }

    /* Mobile View */
    .media_button {
        display: none;
    }

    /* Sidebar Animation */
    .sidebar {
        position: fixed;
        top: 0;
        left: -250px;
        width: 250px;
        height: 100vh;
        background: rgba(205, 205, 224, 0.9);
        padding-top: 60px;
        transition: transform 0.4s ease-in-out;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        z-index: 500;
    }

    .sidebar ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar ul li {
        padding: 15px;
        text-align: center;
    }

    .sidebar ul li a {
        color: #413636;
        text-decoration: none;
        font-size: 18px;
        transition: color 0.3s ease-in-out;
    }

    .sidebar ul li a:hover {
        color: #dac7c7;
        background: #742727;
    }
    
    /* Slide-In Effect */
    .sidebar {
        transform: translateX(-100%);
    }

    .sidebar.sidebar {
        transform: translateX(0);
    }

    /* Toggle Button */
    .media_button button {
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 40px;
        right: 15px;
        z-index: 1100;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;
    }

    .media_button button span {
        width: 30px;
        height: 3px;
        background: #413636;
        transition: all 0.3s ease-in-out;
    }

    /* Toggle Animation */
    .media_button button.active span:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
    }

    .media_button button.active span:nth-child(2) {
        opacity: 0;
    }

    .media_button button.active span:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
    }

    /* Responsive Styles */
    @media screen and (max-width: 768px) {
        .main_list {
            display: none;
        }

        .media_button {
            display: block;
        }

        .sidebar {
            left: 0;
        }
    }
</style>
