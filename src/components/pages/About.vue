<template>
  <v-flex>
    <v-container>
      <v-layout justify-center>
        <v-flex xs9>
          <v-card color="white" height="1280px">
             <v-flex xs12>
             <v-card flat height="5px" color="pink lighten-1">
             </v-card>
             </v-flex>
             <v-layout justify-center row wrap>
              <v-flex xs12 sm4 style="margin-top:25px">
               <img src="static/images/agung.png" height="280px" width="283px">
             </v-flex>
             <v-flex xs12>
             <div class="black--text black--text" style="margin-top:20px">
              <h2>Agung Prio Rismawan</h2>
                <h4>
                  I am a hard worker and passionate about software <br>engineering especially for front end web <br>developer and UI/UX designer.
                </h4>
             </div>
             </v-flex>
             <v-flex xs12 class="description">
             <v-layout row wrap justify-center>
                 <v-layout row wrap>
               <v-flex xs12>
                 <v-flex xs12 sm6>
                  <v-btn outline class="header-descriptions" color="grey darken-3">CONTACT</v-btn>
                 <v-flex xs12 sm7 style="margin-top:10px;margin-left:10px">
                 <v-icon color="black">phone</v-icon><span style="font-weight: bold;margin-left:20px" class="black--text">Phone <br><small style="margin-left:50px">(+62)81254026142</small></span>
                 </v-flex>
                 <v-flex xs12 sm7 style="margin-top:10px;margin-left:10px">
                 <v-icon color="black">email</v-icon><span style="font-weight: bold;margin-left:20px" class="black--text">Email <br><small style="margin-left:50px">agungskak22@gmail.com</small></span>
                 </v-flex>
                 <v-flex xs12 sm7 style="margin-top:10px;margin-left:10px">
                 <v-icon color="black" style="font-size:28px">fa fa-github</v-icon><span style="font-weight: bold;margin-left:20px" class="black--text">Github <br><small style="margin-left:50px">github.com/agungskak22</small></span>
                 </v-flex>
                 <v-flex xs12 sm7 style="margin-top:10px;margin-left:10px">
                 <v-icon color="black">location_on</v-icon><span style="font-weight: bold;margin-left:20px" class="black--text">Home <br><small style="margin-left:50px">Salakan,Mergansang,Sewon,Bantul</small></span>
                </v-flex>
                 </v-flex>
                 <v-flex xs12>
                  <v-btn style="margin-left:-80px; margin-top:20px" outline class="header-descriptions" color="grey darken-3">ACTIVITIES</v-btn>
                 <v-flex xs12 style="margin-top:10px;margin-left:10px">
                  <ul>
                    <v-flex xs12 sm12>
                    <li style="color:black">Asistant Lecturer Sistem Digital (2017/2018)</li>
                    <li style="color:black">Asistant Lecturer Sistem Digital (2018/2019)</li>
                    <li style="color:black">2nd Brawijaya Open 2016 as a fighter D class</li>
                    </v-flex>
                  </ul>
                 </v-flex>
                 </v-flex>
                 <v-flex xs12>
                  <v-btn style="margin-left:-80px; margin-top:20px" outline class="header-descriptions" color="grey darken-3">Interest</v-btn>
                 <v-flex xs12 style="margin-top:10px;margin-left:10px">
                    <v-flex xs12 sm3>
                    <img src="static/images/Interest.png" alt="" height="30px">
                    </v-flex>
                 </v-flex>
                 </v-flex>
               </v-flex>
              </v-layout>
               <v-flex xs2>
                  <div class="line-vertical">
                  </div>
               </v-flex>
               <v-flex xs5>
                  <v-flex xs12>
                  <v-btn style="margin-left:-80px; margin-top:10px" outline class="header-descriptions" color="grey darken-3">EDUCATION</v-btn>
                 <v-flex xs12 style="margin-top:5px;margin-left:-25px">
                    <v-flex xs12>
                      <v-layout row wrap>
                    <v-flex xs12>
                    <img style="margin-left:30px;margin-top:10px" src="static/images/education.png" alt="" height="175">
                    </v-flex>
                    </v-layout>
                    </v-flex>
                 </v-flex>
                 </v-flex>
                 <v-flex xs12>
                  <v-btn style="margin-left:-80px; margin-top:10px" outline class="header-descriptions" color="grey darken-3">PROJECT HOSTORY</v-btn>
                 <v-flex xs12 style="margin-top:5px;margin-left:-25px">
                    <v-flex xs12>
                      <v-layout row wrap>
                    <v-flex xs12>
                    <img style="margin-left:30px;margin-top:10px" src="static/images/project.png" alt="" height="220">
                    </v-flex>
                    </v-layout>
                    </v-flex>
                 </v-flex>
                 </v-flex>
                 <v-flex xs12>
                  <v-btn style="margin-left:-80px; margin-top:10px" outline class="header-descriptions" color="grey darken-3">SKILLS</v-btn>
                 <v-flex xs12 style="margin-top:5px;margin-left:-25px">
                    <v-flex xs12>
                      <v-layout row wrap>
                    <v-flex xs12>
                    <img style="margin-left:30px;margin-top:10px" src="static/images/skills.png" alt="" height="120">
                    </v-flex>
                    </v-layout>
                    </v-flex>
                 </v-flex>
                 </v-flex>
               </v-flex>
              </v-layout>
               </v-flex>
             </v-layout>
             <v-card flat style="margin-top:-35px" height="5px" color="pink lighten-1">
             </v-card>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {

}
</script>

<style>
.border-pink{
    margin-top: 30px;
    border: 3px solid #EC407A;
    border-radius: 100%;

}
.description{
  padding: 70px;
}
.header-descriptions{
  height: 40px;
  width: 200px;
}
.line-vertical{
  border-left: 3px solid #424242;
  height: 780px;
  border-style: dashed;
  position: absolute;
  left: 50%;
  margin-left: -3px;
}
</style>
