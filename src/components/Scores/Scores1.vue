<template>
<v-container mt-5 mb-5>
<v-layout row>
  <v-flex xs12>

<div>
     <v-card-title>
      Bowler
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
      v-bind:items="Scores"
      v-bind:search="search"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
                <td style = "width:75px padding:10px" class="text-xs-center">
          <v-edit-dialog
            lazy
          > {{ props.item.bowler }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.bowler"
              single-line
              counter
              :rules="[max25chars]"
              ></v-text-field>
          </v-edit-dialog>
        </td>
        
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.week }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.date }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.gm1 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.gm2 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.gm3 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.total }}</td>

        
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
      {text: 'Bowler', value: 'bowler'},
      {text: 'Week',
      align: 'right',
      sortable: true,
      value: 'week'},
      {text: 'Date', value: 'date', type:Date},
      {text: 'Gm1', value: 'gm1'},
      {text: 'Gm2', value: 'gm2'},
      {text: 'Gm3', value: 'gm3'},
      {text: 'Total', value: 'total'}
    ]
      }
    },
    computed: {
      Scores () {
        return this.$store.getters.loadedScores
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


