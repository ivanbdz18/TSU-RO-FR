<template>
  <form>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100 md-size-100 ">
            <md-field>
              <label>Research Title</label>
              <md-input v-model="researchtitle" type="text" required></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Co Authors</label>
              <md-input v-model="coauthor1" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Co Authors</label>
              <md-input v-model="coauthor2" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Co Authors</label>
              <md-input v-model="coauthor3" type="text" required></md-input>
            </md-field>
          </div> -->
          <div class="md-layout-item md-size-60">
      <md-field>
        <label for="movies">Movies</label>
        <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
          <md-option value="fight-club">Fight Club</md-option>
          <md-option value="godfather">Godfather</md-option>
          <md-option value="godfather-ii">Godfather II</md-option>
          <md-option value="godfather-iii">Godfather III</md-option>
          <md-option value="godfellas">Godfellas</md-option>
          <md-option value="pulp-fiction">Pulp Fiction</md-option>
          <md-option value="scarface">Scarface</md-option>
        </md-select>
      </md-field>

      <div>
        <strong>Selected movies:</strong>
        {{ selectedMovies }}
      </div>
    </div>
          <div class="md-layout-item md-size-60">
            <!-- <md-input type="file" name="datafile" class="md-raised md-success"></md-input> -->
            <md-field>
              <label>Insert File</label>
              <md-file v-model="files" accept="image/*" multiple required/>
              </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-primary" @click="upload">Upload</md-button>
          </div>
        </div>
  </form>
</template>

<script> // TODO
export default {
  name: 'upload-research',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedMovies: [],
      leadresearcher: null,
      coauthor1: null,
      coauthor2: null,
      coauthor3: null,
      researchtitle: null,
      files: null
    }
  },
  methods: {
    async upload () {

    }
  }
}

</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>
