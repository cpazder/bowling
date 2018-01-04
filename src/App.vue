<template>
  <v-app class = "">
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list>
        <v-list-tile>
<v-list-tile-action>
  <v-icon left>assignment</v-icon>
</v-list-tile-action>
<v-list_tile-content>Schedule</v-list_tile-content>
        </v-list-tile>
                <v-list-tile>
<v-list-tile-action>
  <v-icon left>laptop</v-icon>
</v-list-tile-action>
<v-list_tile-content>Scores</v-list_tile-content>
        </v-list-tile>
                        <v-list-tile>
<v-list-tile-action>
  <v-icon left>supervisor_account</v-icon>
</v-list-tile-action>
<v-list_tile-content>Roster</v-list_tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer >
    <v-toolbar class = "">
    <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
<v-toolbar-title>PazBowling</v-toolbar-title>
<v-spacer></v-spacer>
<v-toolbar-items class = "hidden-xs-only">
<v-btn flat round><v-icon left>assignment</v-icon>Schedule</v-btn>
<v-btn flat round><v-icon left>laptop</v-icon>Scores</v-btn>
<v-btn flat round><v-icon left>supervisor_account</v-icon>Roster</v-btn>
</v-toolbar-items>
    </v-toolbar>
   <main>

   </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>
