<template>
<v-container mt-5 mb-5>
<v-layout row>
  <v-flex xs12>

<div>
     <v-data-table
      v-model="selected"
      v-bind:headers="headers"
      v-bind:items="Scores"
      select-all
      v-bind:pagination.sync="pagination"
      item-key="bowler"
      class="elevation-1"
    >
    <template slot="headers" slot-scope="props">
      <tr>
        <th>
          <v-checkbox
            primary
            hide-details
            @click.native="toggleAll"
            :input-value="props.all"
            :indeterminate="props.indeterminate"
          ></v-checkbox>
        </th>
        <th v-for="header in props.headers" :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
            primary
            hide-details
            :input-value="props.selected"
          ></v-checkbox>
        </td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.bowler }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.week }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.date }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.gm1 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.gm2 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.gm3 }}</td>
        <td style = "width:75px padding:10px" class="text-xs-center">{{ props.item.total }}</td>
      </tr>
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
        pagination: {
          sortBy: 'bowler'
        },
        selected: [],
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
    },
    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
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