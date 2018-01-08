<template>
  <v-data-table
      v-bind:headers="headers"
      :items="Scores"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.week }}</td>
      <td class="text-xs-right">{{ props.item.bowler }}</td>
      <td class="text-xs-right">{{ props.item.date }}</td>
      <td class="text-xs-right">{{ props.item.gm1 }}</td>
      <td class="text-xs-right">{{ props.item.gm2 }}</td>
      <td class="text-xs-right">{{ props.item.gm3 }}</td>
    </template>
  </v-data-table>
</template>


<script>
  export default {
    data() {
      return {
            headers: [
      {text: 'Week',
      align: 'left',
      sortable: true,
      value: 'week'},
      {text: 'Bowler', value: 'bowler'},
      {text: 'Date', value: 'date'},
      {text: 'Gm1', value: 'gm1'},
      {text: 'Gm2', value: 'gm2'},
      {text: 'Gm3', value: 'gm3'},
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