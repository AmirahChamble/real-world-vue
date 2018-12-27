<template>
    <router-link 
        id="eventWrapper"
        :to="{ name: 'event-show', params: {id : '1'} }"
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
        data(){
            return{
                event: {
                    id: 1,
                    title: 'Beach Cleanup',
                    date: ' Tuesday Jan 2nd, 2019',
                    location: ' The National Harbor',
                    time: '6:00pm',
                    attendees: [
                        {id:'abc123', name:'Amirah Chamble'},
                        {id:'abc124', name:'Kelly Green'},
                        {id:'abc125', name:'Shamone Blythe'},
                        {id:'abc126', name:'Mira Yoon'}
                    ]
                }
            }
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