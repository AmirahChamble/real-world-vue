<template>
    <div>
        <h1> Event Listings </h1>

        

        <EventCard v-for="event in events" :key="event.id" :event="event"/>
        

    </div>
</template>

<style scoped lang="scss">

    @import './src/styles/variables';
    

    h1{
        color: $color-pink;
        margin: 50px 0px;
        font-size: 4rem;
        text-shadow: 2px 2px 2px $color-blue;//rgba(0, 0, 0, 0.3);
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default{
    components:{
        EventCard
    },
    data() {
        return{
            events: [],
        }
    },
    //call API's during the created lifecyle
    created(){
        EventService.getEvents()
        .then(response => { 
            console.log(response.data) 
            this.events = response.data
        })

        .catch(error => {
            console.log('There was an error : ' + error.response)
        })
    }
};
</script>
