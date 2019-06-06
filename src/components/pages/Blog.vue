<template>
  <v-container>
    <h2 style="color:white" class="text-xs-center">Disini Kalian Bisa melihat catatan, Materi Kuliah, Dokumentasi Pelajaran <br> dan tutorial programming saya</h2>
    <br>
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
          <div class="text-xs-right">            
            <v-btn fab dark color="indigo" @click="openDialog(work)"><v-icon dark>add</v-icon></v-btn>
          </div>
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
          <h2 class="text-xs-left">Overview</h2>
          <p class="text-xs-left">{{ currentDialog.background }}</p>
          <h2 class="text-xs-left">Materi Yang Dipelajari</h2>
          <p class="text-xs-left">{{ currentDialog.work }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="amber accent-4" flat @click.native="dialog = false">Close</v-btn>
          <v-btn dark color="indigo" target= "_blank" :href="currentDialog.url">Selengkapnya ....</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="text-xs-right">
    <v-btn onclick="window.open('https://youtube.com', '_blank')" color="indigo" dark  >
        Kunjungi Blogg
        <v-icon dark left>arrow_forward</v-icon>
        </v-btn>
        </div>
  </v-container>
</template>

<script>
export default {
  name: 'Blog',
  data: () => {
    return {
      works: [
        { title: 'Pemrograman Web | Jquery, HTML, CSS', subtitle: 'Belajar Membuat File Html', url: 'http://127.0.0.1:8000/', img: '/static/images/html.png', background: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?', work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?' },
        { title: 'Dasar Pemrograman | C Programming', subtitle: 'Belajar Mengenal Bahasa C', url: '#', img: '/static/images/C.png', background: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?', work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?' },
        { title: 'Android Studio', subtitle: 'Belajar Pemrograman Mobile dengan Java', url: '#', img: '/static/images/android.png', background: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?.', work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?' },
        { title: 'Sistem Digital', subtitle: 'Belajar dasar Microcontroller ', url: '#', img: '/static/images/digital.png', background: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?.', work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?' },
        { title: 'Arsitektur Komputer', subtitle: 'Belajar Microcontroller dan Prinsip SAP', url: '#', img: '/static/images/arkom.png', background: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?', work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?' },
        { title: 'Desain Grafis | Coreldraw X7', subtitle: 'Belajar Desain Grafis menggunakan Coreldraw ', url: '#', img: '/static/images/corel.png', background: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?', work: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint explicabo vero obcaecati totam asperiores, ipsum aliquid dolorem quasi molestiae dicta error deserunt minus ullam debitis dolore autem ipsa? Perspiciatis esse aspernatur voluptatibus est quas alias exercitationem saepe aut laudantium doloribus, ipsam nam natus voluptates ullam cum sed, molestiae delectus?' }
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
