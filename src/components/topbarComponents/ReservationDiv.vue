<template>
    <div class="reservation-overlay">
        <div class="reservationBox slide-in">
            <div class="container">
                <div class="reservationHeader">
                    <h2>VUE JS Organisation</h2>
                    <button class="close-reservation" @click="$emit('close-reservation-method')">×</button>
                </div>
                <div class="reservationBody text-center">
                    <form @submit.prevent="$emit('reservation-submit')" class="reservationform">
                        <h4 class="title">
                            If you wish to carry out any administrative step by telephone,
                            please contact us at the number 913 342 196 24h/day.
                        </h4>

                        <div class="input-block">
                            <label for="">Localizer</label>
                            <input 
                                type="text" 
                                @input="$emit('update:localizer', $event.target.value)"
                                @focus="$emit('update:localizerFocused', true)"
                                @blur="$emit('update:localizerFocused', false)"
                                class="form-control"
                                required
                            />
                        </div>

                        <div class="input-block">
                            <label for="">Pin</label>
                            <input 
                                type="text"
                                @input="$emit('update:pin', $event.target.value)"
                                @focus="$emit('update:pinFocused', true)"
                                @blur="$emit('update:pinFocused', false)"
                                class="form-control"
                                required
                            />
                        </div>
                        <button  type="submit" class="square-button">See Booking</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ReservationDiv',
    props: {
        localizerFocused: Boolean,
        pinFocused: Boolean
    }
}
</script>

<style scoped>
    .reservation-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 9999;
        display: flex;
        justify-content: flex-start;
        overflow: auto;
    }

    .reservationBox {
        width: 100%;
        height: 100%;
        padding: 60px 50px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.3);
        animation: slideFromLeft 0.3s ease forwards;
    }

    @keyframes slideFromLeft {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
    }

    .reservationHeader {
        margin-top: -20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .reservationHeader h2 {
        font-weight:bold;
    }

    .close-reservation {
        color: rgb(15, 14, 14);
        border: 0.5px solid rgb(51, 41, 41);
        background-color: #4C4C4C;
        border-radius: 50%;
        font-size: 32px;
        width: 42px;
        height: 42px;
        cursor: pointer;
    }

    .reservationBody {
        margin: auto;
        width: 70%;
        margin-top: 40px;
        align-items: center;
        text-align: center;
    }

    .reservationBody .title{
        font-size: 16px;
        font-weight: 300;
        padding-bottom: 20px;
    }

    .reservationform .form-group {
        margin-bottom: 20px;
    }

    .reservationform .input-block {
        border: solid 1px #FF512F;
        height: 40px;
        padding: 15px;
        position: relative;
        margin-bottom: 20px;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }

    .reservationform .input-block.focus {
        border: solid 1px #fb2900;
    }

    .reservationform .input-block label {
        padding: 0 10px;
        position: absolute;
        left: 8px;
        top: 20px;
        display: block;
        margin: 0;
        font-weight: 300;
        z-index: 1;
        color: #999;
        font-size: 18px;
        line-height: 10px;
    }

    .reservationform .input-block .form-control {
        width: 100%;
        background-color: transparent;
        border: none;
        border-radius: 0;
        box-shadow: none;
        color: #fff;
        font-size: 18px;
        height: 40px;
        padding: 0;
        position: relative;
        top: 10px;
        z-index: 2;
    }

    .reservationform .input-block .form-control:focus label {
        top: 0;
    }

    .reservationform .square-button {
        
        background-size: 100%;
        background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #ff512f), color-stop(100%, #dd2476));
        background-image: -moz-linear-gradient(left, #ff512f, #dd2476);
        background-image: -webkit-linear-gradient(left, #ff512f, #dd2476);
        background-image: linear-gradient(to right, #ff512f, #dd2476);
        color: #fff;
        font-size: 26px;
        text-transform: uppercase;
        font-weight: 700;
        text-align: center;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        padding: 0 60px;
        height: 60px;
        border: none;
        float: right;
    }

    @media (max-width: 768px) {
        .reservationHeader {
            margin: 0 20px;
        }
        .reservationform .square-button {
            max-width: 200px;
            font-size: 16px;
            font-weight: 400;
        }

        .reservationBox {
            padding: 10% 0;
        }

        .close-reservation {
            
            opacity: 1;
            
        }
    }


</style>