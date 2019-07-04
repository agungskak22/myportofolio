<template>
  <v-container>
    <h2 style="color:white" class="text-xs-center">Berikut Adalah Riwayat orojek saya yang saya kerjakan <br> selama masa kuliah</h2><br>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="work in works" :key="work.title">
        <v-card class="mx-2 my-2 elevation-3">
          <a target= "_blank" :href="work.url"><v-card-media :src="work.img" height="200px">
          </v-card-media></a>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ work.title }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="teal" @click="openDialog(work)">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <a target= "_blank" :href="currentDialog.url"><v-card-media :src="currentDialog.img" height="400px">
        </v-card-media></a>
        <v-card-title>
          <span class="headline">{{ currentDialog.title }}</span>
        </v-card-title>
        <v-card-text>
          <h2 class="text-xs-left">Background</h2>
          <p class="text-xs-left">{{ currentDialog.background }}</p>
          <h2 class="text-xs-left">My Work</h2>
          <p class="text-xs-left">{{ currentDialog.work }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click.native="dialog = false">Close</v-btn>
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
      works: [
        { title: 'Psikotes Toko Minggu', subtitle: 'Website Psikotes', url: 'https://tokominggu.net/', img: '/static/images/honeycomb.png', background: 'Berdiri sejak 1980, mulanya Toko Minggu hanyalah sebuah toko yang menjual kain batik untuk memenuhi kebutuhan akan kain dan pakaian batik bagi masyarakat Bobotsari.namun sekarang ini tokominggu menjelma menjadi sebuah toko yang bukan hanya menjual kain batik, akan tetapi juga menjual berbagai kebutuhan pokok lainya seperti makanan, kebutuhan rumah tangga, dan lain - lain, semakin berkembangnya tokominggu, maka kebutuhan akan pegawai juga semakin meningkat, maka dari itu dibutuhkan sistem informasi yang bisa menyeleksi pegawai dengan menggunakan tes psikotes.', work: 'saya Bertanggung jawab untuk membuat tampilan antar muka dan membuat tampilan untuk test psikotes, website ini menggunakan front end framework bootstrap dan Jquerry sedangkan untuk bagian Back End nya menggunakan Laravel 5.6, lalu untuk database nya menggunakan mariaDB.' },
        { title: 'Sneaker.in', subtitle: 'Website Pencuci Sepatu', url: 'https://sneakerin.thekingcorp.org/', img: '/static/images/xiaobandeng.png', background: 'Sneakerin merupakan sebuah website yang menyediakan layanan pembersihan sepatu yang berada di babarsari, Yogyakarta.', work: 'saya Bertanggung jawab untuk membuat tampilan antar muka, Backend dan perancangan database, Sneaker.in menggunakan front end framework bootstrap dan Jquerry sedangkan untuk bagian Back End nya menggunakan PHP 7, lalu untuk database nya menggunakan mariaDB.' },
        { title: 'Sehatin', subtitle: 'Sebsite Kesehatan', url: 'https://sehati.thekingcorp.org/', img: '/static/images/palmdrive.png', background: 'Sehatin merupakan sebuah website kesehatan yang bertujuan agar para pasien (Pendonor darah dan penerima donor khususnya) yang ingin melsayakan donor tidak perlu repot repot untuk melsayakan proses administrasi ke rumah sakit, mereka daoat dengan mudah mendaftar dan melsayakan registrasi di website ini dan website ini akan mengirimkan biodata pendonor kerumah sakit yang dituju, jadi pendonor dapat mengatur sendiri jadwal donor mereka, selain itu ada fitur lainya yaitu adalah asuransi dan juga imunisasi', work: 'saya Bertanggung jawab untuk membuat tampilan antar muka dan membuat tampilan Admin, pada bagian front end, website ini menggunakan  Vue JS, dan untuk admin menggunakan Vuetifyjs sedangkan untuk bagian Back End nya menggunakan Laravel 5.6, lalu untuk database nya menggunakan mariaDB.' },
        { title: 'Database Kota Surakarta', subtitle: 'Website Kota Surakarta', url: 'https://joyosuran.yafetrakan.com/', img: '/static/images/joyosuran.png', background: 'sebuah Sistem informasi yang digunakan untuk Mencatat daftar kependudukan dikota surakarta, Solo. didalam website ini kita dapat melihat perumahan penduduk yang ada di sekitaran kota solo, yang posisinya diambil dari foto bangunan tersebut berdiri', work: 'saya bertanggung jawab membuat bagian front end, sistem informasi ini menggunakan front end framework yaitu bootstrap dan jquery, sedangkan untuk backend nya menggunakan Laravel 5.6 dan databsenya menggunakan mariaDB' },
        { title: 'Thenun', subtitle: 'Backend Android', url: 'https://project1.yafetrakan.com/', img: '/static/images/thenun.png', background: 'Thenun merupakan sebuah aplikasi android yang digunakan untuk mengetahui seberapa efesiensi mesin tenun dengan menggunakan barcode scanner', work: 'saya bertanggung jawab untuk membuat tampilan antar muka aplikasi android dan juga barcode scanner, pada aplikasi ini menggunakan librarry ZXing ("Zebra Crossing") barcode scanning library, bootstrap untuk tampilan website dan juga laravel 5.6 untuk backendnya' },
        { title: 'Atma Pedia', subtitle: 'Android Food Apps', url: 'https://github.com/kadalcj/AtmaPediaOrder-v3', img: '/static/images/atmapedia.png', background: 'Atma Pedia merupakan sebuah aplikasi pemesanan makanan di kantin Universitas Atma Jaya Yogyakarta, yang harapanya nanti adalah mahasiswa tidak perlu lagi khawatir apabila makanan dikantin habis atau tutup, tinggal pesan dan nanti mahasiswa tinggal ambil pesanan tersebut, aplikasi ini juga dilengkapi dengan Paypal API sehingga dimudahkan untuk pembayaranya ', work: 'saya bertanggung jawab untuk membuat tampilan antar muka, backend, dan juga perancangan database. pada aplikasi ini menggunakan firebase untuk databasenya, sedangkan untuk bahasa pemrograman nya menggunakan JAVA' },
        { title: 'Yesplis', subtitle: 'Platform Penjualan Tiket', url: 'https://yesplis.com/', img: '/static/images/yes.png', background: 'yesplis adalah sebuah platform penjualan tiket dan juga event manager yang berbasis website', work: 'saya bertanggung jawab untuk membuat tampilan antar muka, yesplis dibangun menggunakan laravel dan juga vue js' }

      ],
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
