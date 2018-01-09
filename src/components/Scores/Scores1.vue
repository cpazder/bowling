<template>
<v-container mt-5 mb-5>
<v-layout row>
  <v-flex xs12>

<div>
     <v-card-title>
      Date
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Type your name"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="Schedule"
      v-bind:search="search"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
                <td style = "width:75px padding:10px" class="text-xs-center">
          <v-edit-dialog
            lazy
          > {{ props.item.date }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.date"
              single-line
              counter
              :rules="[max25chars]"
              ></v-text-field>
          </v-edit-dialog>
        </td>
        
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler1 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler2 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler3 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler4 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler5 }}</td>
        
        
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
        pagination: {},
      headers: [
      
      {text: 'Date', value: 'date', type:Date},
      {text: 'Bowler1', value: 'bowler1'},
      {text: 'Bowler2', value: 'bowler2'},
      {text: 'Bowler3', value: 'bowler3'},
      {text: 'Bowler4', value: 'bowler4'},
      {text: 'Bowler5', value: 'bowler5'},

    ]
      }
    },
    computed: {
      Schedule () {
        return this.$store.getters.loadedSchedule
      }
    }

  }
</script>

<style>



</style>