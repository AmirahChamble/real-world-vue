<template>
    <div>
        <h1> Event Listings </h1>

        

        <EventCard/>
        

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

export default{
    components:{
        EventCard
    }
};
</script>
