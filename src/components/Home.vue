<template >
<v-container id="nomarge">
  <v-layout row wrap>
    <v-flex xs12 text-align-center>
<v-carousel hide-controls hide-delimiters>
  <v-carousel-item id="picheight"
    v-for="pics in pics" 
    :src="pics.imageUrl"
    :key="pics.id">
    <v-flex xs12 class="text-xs-center">
    <div id="title">
      Pazdernik
    </div>
        <div id="title">
      Bowling
    </div>
    </v-flex>
    </v-carousel-item>
</v-carousel>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data() {
      return {pics: [
       { imageUrl: 'https://images8.alphacoders.com/372/372210.jpg', id: 'asdjfoijlekmfiamlkmi', title:'PazdernikBowling!'},
      { imageUrl: 'https://images4.alphacoders.com/614/614184.jpg', title:'PazdernikBowling!'},
      { imageUrl: 'https://images7.alphacoders.com/429/429525.jpg', title:'PazdernikBowling!'}
      ]
    }
  }
  }
</script>
<style scoped>
#title{
color:white;
font-size:6rem;
text-shadow: 0 3px 0 black;
}

#nomarge{
  margin:auto auto;
 }

 .carousel{
   min-height: 90vh;
 }




</style>

