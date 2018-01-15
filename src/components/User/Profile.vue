<template>
<v-container mt-5 mb-5>
<v-layout row>
  <v-flex xs12>

<div>

       <v-card-title>
      Scores through 1/11/2018
      <v-spacer></v-spacer>
    </v-card-title>

    <v-data-table
      v-bind:headers="headers"
      v-bind:items="Scores"
      v-bind:search="search"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.weeks * 3 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.average }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ Math.floor((220 - props.item.average) * .9) }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center"><a :href="`tel:${props.item.phone}`">{{ props.item.phone }}</a></td>
        
      </template>
    </v-data-table>
  </div>


      </v-flex>
  </v-layout>
  </v-container>
</template>


<script>
  export default {
    data() {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        
      headers: [
      {text: 'Bowler', value: 'bowler'},
      {text: 'Games'},
      {text: 'Average', value: 'average'},
      {text: 'Handicap'},
      {text: 'Phone', value: 'phone'},

    ]
      }
    },
    computed: {
      Scores () {
        return this.$store.getters.loadedProfile
      }
    }

  }
</script>

<style>
th.column.sortable.text-xs-right{
  text-align:center !important;
  padding:10px !important;
}
th.column.sortable.active.asc.text-xs-right{
  max-width:50px !important;
  padding:10px !important;
}

td.text-xs-center {
max-width:50px !important;
padding:10px !important;
}


</style>