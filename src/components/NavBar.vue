<template>
    
     <div id="nav">
    <router-link 
        to="/" 
      > Real Worl Events</router-link> |
    <nav>
      <router-link 
        :to="{ name: 'event-list'}" 
      > List </router-link> |

      <router-link 
        :to="{ name: 'event-create'}" 
      > Create Event </router-link> |

      <router-link 
        :to="{ name: 'user', params: {username: 'Amirah'} }" 
      > Amirah </router-link> 
    </nav>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped lang ="scss">
 @import './src/styles/variables';
 @import './src/styles/components/navbar';

</style>