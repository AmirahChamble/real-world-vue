<template>
    <router-link 
        id="eventWrapper"
        :to="{ name: 'event-show', params: {id : event.id} }"
    >  
        <div>
            <p>{{ event.date }} @ {{ event.time }} </p>
            <h4>
                <span class="title"> {{ event.title }} </span> 
                @ 
                <span class="location"> {{ event.location }} </span>
            </h4>

            <span id="attendeeWrapper">
                <BaseIcon name="users">{{ event.attendees.length }} people are going</BaseIcon>
            </span>
        </div>
    </router-link>
</template>

<script>
    export default{
        props: {
            event: Object
        }
    };
</script>

<style scoped lang="scss">
    

    #attendeeWrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }


</style>