<template>
    <router-link 
            :to="{ name: 'event-show', params: {id : '1'} }"
    >  
        <div>
            <span>@ {{ event.time }} on {{ event.date }} </span>
            <h4> {{ event.title }} @ {{ event.location }}</h4>
            <span> {{ event.attendees.length }} people are going </span>
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
                    date: ' Tues Aug 19, 2018',
                    location: ' The National Harbor',
                    time: '6:00',
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

<style scoped>

h4{
    color: orange;
}
</style>