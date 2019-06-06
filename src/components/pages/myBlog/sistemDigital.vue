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
          <h2 class="text-xs-left">Background</h2>
          <p class="text-xs-left">{{ currentDialog.background }}</p>
          <h2 class="text-xs-left">My Work</h2>
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
        { title: 'Pemrograman Web | Jquery, HTML, CSS', subtitle: 'Belajar Membuat File Html', url: 'http://hcdatainc.com', img: '/static/images/html.png', background: 'HoneycombData builds high-performance all-flash storage clusters. It\'s distributed architecture allows a storage cluster to horizontally scale out based on commodity servers. Besides the storage engine, users can manage the cluster and monitor system performance through a web-based UI.', work: 'I am responsible for the development of the web-based application for cluster management and data monitoring. For the past year, I have improved it from many aspects. For example, re-design the layout and design of the UI, re-built front-end project with Angular v5+ and Material Design, apply functional reactive programming to Node.js API design, re-design data processing pipeline with NoSql database.' },
        { title: 'Dasar Pemrograman | C Programming', subtitle: 'Belajar Mengenal Bahasa C', url: 'http://xiaobandeng.palmdrive.cn', img: '/static/images/C.png', background: 'Xiaobandeng is a mobile app developed by PalmDrive engineers. It is a platform for mentors to give online talks and communicate with students.', work: 'This is the homepage I designed using Ionic and AngularJS. I also made it responsive to different media queries. Besides this, I also worked on building a web-based managing system for the app.' },
        { title: 'Android Studio', subtitle: 'Belajar Pemrograman Mobile dengan Java', url: 'http://palmdrive.cn', img: '/static/images/android.png', background: 'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology. I have worked at PalmDrive as an intern web developer for 5 months. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.', work: 'My main contribution on this website was providing multi-language support using Rails Internationalization API and Angular-translate. I also did several front-end design and back-end works.' },
        { title: 'Sistem Digital', subtitle: 'Belajar dasar Microcontroller ', url: 'https://medium.com/sistem-digital', img: '/static/images/digital.png', background: 'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology. I have worked at PalmDrive as an intern web developer for 5 months. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.', work: 'My main contribution on this website was providing multi-language support using Rails Internationalization API and Angular-translate. I also did several front-end design and back-end works.' },
        { title: 'Arsitektur Komputer', subtitle: 'Belajar Microcontroller dan Prinsip SAP', url: 'http://palmdrive.cn', img: '/static/images/arkom.png', background: 'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology. I have worked at PalmDrive as an intern web developer for 5 months. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.', work: 'My main contribution on this website was providing multi-language support using Rails Internationalization API and Angular-translate. I also did several front-end design and back-end works.' },
        { title: 'Desain Grafis | Coreldraw X7', subtitle: 'Belajar Desain Grafis menggunakan Coreldraw ', url: 'http://palmdrive.cn', img: '/static/images/corel.png', background: 'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology. I have worked at PalmDrive as an intern web developer for 5 months. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.', work: 'My main contribution on this website was providing multi-language support using Rails Internationalization API and Angular-translate. I also did several front-end design and back-end works.' }
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
