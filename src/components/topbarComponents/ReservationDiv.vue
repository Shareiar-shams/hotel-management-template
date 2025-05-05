<template>
    <div class="reservation-overlay">
        <div class="reservationBox slide-in">
            <div class="container">
                <div class="reservationHeader">
                    <strong>VUE JS Organisation</strong>
                    <button class="close-reservation" @click="$emit('close-reservation-method')">×</button>
                </div>
                <div class="reservationBody">
                    <form @submit.prevent="$emit('reservation-submit')" class="reservationform">
                        <h4 class="title">
                            If you wish to carry out any administrative step by telephone,
                            please contact us at the number 913 342 196 24h/day.
                        </h4>

                        <div class="input-block">
                            <label for="">Localizer</label>
                            <input 
                                type="text" 
                                v-model="localizer"
                                @focus="localizerFocused = true"
                                @blur="localizerFocused = !!localizer"
                                class="form-control"
                                required
                            />
                        </div>

                        <div class="input-block">
                            <label for="">Pin</label>
                            <input 
                                type="text"
                                v-model="pin"
                                @focus="pinFocused = true"
                                @blur="pinFocused = !!pin"
                                class="form-control"
                                required
                            />
                        </div>
                        <button class="square-button">See Booking</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ReservationDiv'
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .reservationHeader strong {
        font-size: 20px;
    }

    .close-reservation {
        color: rgb(15, 14, 14);
        border: 0.5px solid rgb(51, 41, 41);
        opacity: 0.5;
        background-color: #4C4C4C;
        border-radius: 50%;
        font-size: 32px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        padding-bottom: 35px;
    }

    .reservationBody {
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
        background-color: transparent;
        border: medium none;
        border-radius: 0;
        box-shadow: none;
        color: #333;
        font-size: 18px;
        height: 40px;
        padding: 0;
        position: relative;
        top: -20px;
        z-index: 2;
    }

    .reservationform .input-block .form-control:focus label {
        top: 0;
    }

    .reservationform .square-button {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmNTEyZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2RkMjQ3NiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
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
        width: 100%;
    }


</style>