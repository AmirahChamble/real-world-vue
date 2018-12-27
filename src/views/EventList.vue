<template>
    <div>
        <h1> Event Listing </h1>

        

        <EventCard/>

    </div>
</template>

<style scoped>
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
