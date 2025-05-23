<template>
    <div class="topbar">
        <div class="container">
            <div class="topBarName">
                <strong>Vue JS</strong>
            </div>
            <div class="topmenubar">
                <ul>
                    <li v-for="(item, index) in topmenuItems" :key="index" :class="{ 'no-separator': index === topmenuItems.length - 1 }">
                        <a class="menuanchor" href="#" @click.prevent="handleMenuClick(item)">
                            <font-awesome-icon :icon="['fas', item.icon]" /> 
                            <span class="menu-text">{{ item.name }}</span>
                            <span class="lineBreakDesign">|</span>
                        </a>

                        <!-- language dropdown list -->
                        <transition ref="languageModel" name="fade" v-if="item.name === 'Language' && showMultiLanguage">
                            <ul style="display:grid; margin-top: 10px;" v-if="showMultiLanguage" class="language-dropdown">
                                <li @click="selectLanguage('English')">English</li>
                                <li @click="selectLanguage('বাংলা')">বাংলা</li>
                                <li @click="selectLanguage('Español')">Español</li>
                            </ul>
                        </transition>
                        
                    </li>

                </ul>
                <!-- Login form under the anchor with arrow -->
                <div ref="loginModel"
                    v-show="showLoginForm"
                    class="login-dropdown"
                    @click.stop
                >
                    <div class="arrow-up"></div>
                    <div class="login-form-wrapper">
                        <div class="login-header">
                            <span class="brand"><strong><u>TRAVELER</u></strong></span>
                            <button class="close-btn" @click="toggleLoginForm">×</button>
                        </div>

                        <p class="subtitle">
                            Log in or <a href="#" class="register-link">Register</a> if you’re not a member yet
                        </p>

                        <form class="loginForm" @submit.prevent="handleLogin">
                            <div class="form-group" :class="{ active: emailFocused || email }">
                                <label>Email</label>
                                <input
                                    type="email"
                                    v-model="email"
                                    @focus="emailFocused = true"
                                    @blur="emailFocused = !!email"
                                    class="form-control"
                                    required
                                />
                            </div>

                            <div class="form-group password-wrapper" :class="{ active: passwordFocused || password }">
                                <label>Password</label>
                                <input
                                    :type="showPassword ? 'text' : 'password'"
                                    v-model="password"
                                    @focus="passwordFocused = true"
                                    @blur="passwordFocused = !!password"
                                    class="form-control"
                                    required
                                />
                                <span class="eye-icon" @click="togglePassword">
                                    {{ showPassword ? '🙈' : '👁️' }}
                                </span>
                            </div>

                            <div class="checkbox-wrapper">
                                <input type="checkbox" id="remember" />
                                <label for="remember">Remember me</label>
                            </div>

                            <button type="submit" class="login-btn">Log In</button>

                            <div class="forgot-link">
                                <a href="#">Have you forgotten your password?</a>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <!-- Reservation Panel -->

    <div v-if="showReservation">
        <Reservation @close-reservation-method="toggleReservationTemplate"  @reservation-submit="reservationHandle" 
        v-model:localizer="localizer"
        v-model:pin="pin"
        :localizer-focused="localizerFocused"
        :pin-focused="pinFocused"
        @update:localizerFocused="localizerFocused = $event"
        @update:pinFocused="pinFocused = $event"
    />
    </div>
</template>

<script>
import Reservation from './topbarComponents/ReservationDiv.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPhone, faBriefcase, faLanguage } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faPhone, faBriefcase, faLanguage)

export default {
    name: 'TopBar',
    components: {
        Reservation
    },
    data() {
        return { 
            email: '',
            password: '',
            showPassword: false,
            emailFocused: false,
            passwordFocused: false,
            localizer: '',
            pin: '',
            localizerFocused: false,
            pinFocused: false,
            topmenuItems: [
                { name: '+8801307665311', link: '/', icon: 'phone' },
                { name: 'My Reservation', link: '/rooms', icon: 'briefcase' },
                { name: 'Log In', link: '/about', icon: 'user' },
                { name: 'Language', link: '/contact', icon: 'language' }
            ], 
            showLoginForm: false,
            showReservation: false,
            showMultiLanguage: false,
        }
    },
    methods: {
        togglePassword() {
            if(this.password !== ''){
                this.showPassword = !this.showPassword;
            }
        },
        toggleLoginForm() {
            setTimeout(() => {
                this.showLoginForm = !this.showLoginForm;
            }, 0);
        },
        toggleReservationTemplate() {
            this.showReservation = !this.showReservation;
        },
        toggleLanguageDropDown() {
            this.showMultiLanguage = !this.showMultiLanguage;
        },
        reservationHandle() {
            console.log("Reservation Submitted:", this.localizer, this.pin);
            
        },
        handleMenuClick(item) {
            if (item.name === 'Log In') {
                this.toggleLoginForm();
            } else if (item.name === 'My Reservation') {
                this.toggleReservationTemplate();
            } else if (item.name === 'Language') {
                this.toggleLanguageDropDown();
            }
        },

        selectLanguage(name){
            console.log('Selected language:', name);
            this.showMultiLanguage = false;
        },

        handleClickOutside(event) {
            const loginEl = this.$refs.loginModel;
            if (
                this.showLoginForm &&
                loginEl &&
                !loginEl.contains(event.target)
            ) {
                this.showLoginForm = false;
            }

            
            if (
                this.showMultiLanguage &&
                event.target.closest('.language-dropdown') === null &&
                event.target.closest('.menuanchor') === null
            ) {
                this.showMultiLanguage = false;
            }
        }

    },

    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    
}
</script>

<style scoped>
    .topbar {
        width: 100%;
        height: 20px;
        position: absolate;
    }
    .topBarName strong{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 12px;
        font-style: oblique;
    }
    /* Container */
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 5%;
    }
    /* Topber Menu */
    .topmenubar {
        display: flex;
    }

    .topmenubar ul {
        list-style: none;
        display: flex;
        gap: 10px;
        padding: 0;
        margin: 0;
    }

    .topmenubar ul li {
        margin: 0 10px;
    }

    .topmenubar ul li .menuanchor {
        text-decoration: none;
        color: #413636;
        font-size: 14px;
        position: relative;
        transition: color 0.3s ease-in-out;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    /* Hover Effect */
    .topmenubar ul li .menuanchor:hover {
        color: #aa8f8f;
        cursor: pointer;
    }

    .menu-text {
        display: inline;
    }

    .lineBreakDesign {
        display: none;
    }

    .login-dropdown {
        position: absolute;
        right: 1%;
        top: 6%;
        background-color: #e4d9d9;
        border: 1px solid #ddd;
        padding: 20px;
        width: 350px;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(34, 33, 33, 0.1);
        z-index: 1100;
        animation: fadeInDown 0.3s ease;
    }

    /* Upward triangle arrow */
    .arrow-up {
        position: absolute;
        top: -10px;
        left: 40%;
        width: 5px;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #d1cbcb;
        z-index: 10;
        filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
    }
    /* Log In Form Style */
    .login-form-wrapper {
        padding: 20px;
        font-family: Arial, sans-serif;
        border-radius: 8px;
        position: relative;
    }
    
    .login-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .brand {
        font-size: 30px;
    }

    .title {
        font-size: 12px;
        color: #333;
        font-weight: bold;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 30px;
        cursor: pointer;
        color: #444;
    }

    .subtitle {
        font-size: 12px;
        margin: 10px 0;
        color: #222;
    }

    .register-link {
        color: goldenrod;
        text-decoration: none;
        font-weight: bold;
    }

    .loginForm {
        width: 100%;
    }

    .form-group {
        position: relative;
        margin-bottom: 20px;
    }

    .form-group input {
        width: 100%;
        padding: 14px 10px 6px 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
    }

    .form-group label {
        position: absolute;
        top: 14px;
        left: 12px;
        color: #aaa;
        font-size: 14px;
        transition: 0.3s ease;
        pointer-events: none;
    }

    .form-group.active label,
    .form-group input:focus + label {
        top: -8px;
        left: 10px;
        font-size: 12px;
        background: white;
        padding: 0 4px;
        color: #333;
    }

    /* Password Wrapper */
    .password-wrapper {
        position: relative;
    }

    .eye-icon {
        position: absolute;
        right: 10px;
        top: 5px;
        cursor: pointer;
        font-size: 16px;
        user-select: none;
    }

    /* Checkbox & Button */
    .checkbox-wrapper {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }

    .login-btn {
        width: 100%;
        padding: 12px;
        background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ff512f), color-stop(100%, #dd2476));
        background-image: -moz-linear-gradient(left, #ff512f, #dd2476);
        background-image: -webkit-linear-gradient(left, #ff512f, #dd2476);
        background-image: linear-gradient(to right, #ff512f, #dd2476);
        color: #fff;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
    }

    .forgot-link {
        text-align: center;
        margin-top: 12px;
    }

    .forgot-link a {
        color: #9e7171;
        font-size: 12px;
        text-decoration: none;
    }
    /* Animation */
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Hide menu-text and show | only on small screens */
    @media (max-width: 768px) {
        .menu-text {
            display: none;
        }

        .lineBreakDesign {
            display: inline-block;
            color: #181717;
            padding: 0 5px;
            margin-right: -15px;
            font-size: 16px;
            line-height: 1;
        }

        /* Hide | for last item */
        .no-separator .lineBreakDesign {
            display: none;
        }

        .login-dropdown {
            position: absolute;
            right: 2%;
            background-color: #e4d9d9;
            border: 1px solid #ddd;
            padding: 20px;
            width: 300px;
            height: 100%;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(34, 33, 33, 0.1);
            z-index: 1100;
            animation: fadeInDown 0.3s ease;
        }

        /* Upward triangle arrow */
        .arrow-up {
            position: absolute;
            top: -10px;
            left: 70%;
            width: 5px;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #d1cbcb;
            z-index: 10;
            filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1));
        }

        .language-dropdown {
            right: 2%;
            min-width: 100px;
            max-width: 100px;
            margin-top: 10px;
        }

    }

    .language-dropdown {
        position: absolute;
        background: #ffffff;
        padding: 0.5rem 0;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-top: 10px;
        list-style: none;
        z-index: 1500;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        animation: pulse 1s infinite;
    }

    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .language-dropdown li {
        padding: 10px 16px;
        cursor: pointer;
        color: #333;
        transition: background 0.2s ease, color 0.2s ease;
        position: relative;
    }

    .language-dropdown li + li {
        border-top: 1px solid #eee;
    }

    .language-dropdown li:hover {
        background: #f5f5f5;
        color: #000;
    }



    
    /* Fade animation */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.0s;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

</style>