<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card class="mx-2 my-2 elevation-3">
          <v-card-media src="/static/images/css.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Tokominggu</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="teal" @click="dialog = true">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-card class="mx-2 my-2 elevation-3">
          <v-card-media src="/static/images/html.png" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Indoxxi</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="teal" @click="dialog1 = true">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <v-carousel hide-delimiters>
              <v-carousel-item v-for="(pic,i) in tokominggu" :src="pic.src" :key="i"></v-carousel-item>
            </v-carousel>
        <v-card-title>
          <span class="headline">Toko minggu</span>
        </v-card-title>
        <v-card-text>
          <h2 class="text-xs-left">Background</h2>
          <p class="text-xs-left">Berdiri sejak 1980, mulanya Toko Minggu hanyalah sebuah toko yang menjual kain batik untuk memenuhi kebutuhan akan kain dan pakaian batik bagi masyarakat Bobotsari.namun sekarang ini tokominggu menjelma menjadi sebuah toko yang bukan hanya menjual kain batik, akan tetapi juga menjual berbagai kebutuhan pokok lainya seperti makanan, kebutuhan rumah tangga, dan lain - lain, semakin berkembangnya tokominggu, maka kebutuhan akan pemesanan barang semakin meningkat, maka dari itu untuk memudahkan user, dibuatlah apliksi ini untuk menunjang pemesanan</p>
          <h2 class="text-xs-left">My Work</h2>
          <p class="text-xs-left">saya bertanggung jawab membuat prototype desain dan implementasinya kedalam program</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click.native="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-dialog v-model="dialog1" persistent max-width="700px">
      <v-card>
        <v-card-media src="/static/images/gallery/spi1.png" height="400px">
        </v-card-media>
        <v-card-title>
          <span class="headline">Movies Apps</span>
        </v-card-title>
        <v-card-text>
          <h2 class="text-xs-left">Background</h2>
          <p class="text-xs-left">Saya mencaoba mendesain ulang situs film indonesia, yaitu indoxxi namun dalam bentuk aplikasi android/Ios</p>
          <h2 class="text-xs-left">My Work</h2>
          <p class="text-xs-left">saya bertanggung jawab membuat prototype desain dan implementasinya kedalam program</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click.native="dialog1 = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  name: 'Home',
  data: () => {
    return {
      tokominggu: [
        { src: '/static/images/gallery/tk2.png', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/tk3.png', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/tk1.png', title: 'Software Engineer (Sep 2016 - present)' }
      ],
      dialog1: false,
      dialog: false,
      currentDialog: {}
    }
  },
  methods: {
    openDialog (data) {
      this.currentDialog = data
      this.dialog = true
    }
  }
}
</script>

<style scoped>
</style>
