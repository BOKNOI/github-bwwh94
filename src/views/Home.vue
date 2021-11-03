<template>
  <div class="home container">
    <!-- <input type="file" accept="image/*;capture=camera"> -->
    <!-- <video class="feed" playsinline autoplay loop muted>
    </video> -->
    <div class="search">
      <input
        class="searchInput form-control"
        name="search"
        placeholder=" บอกร้านที่อยากหามาเลย"
      />
      <button type="button" class="confirmInput btn" name="find">ค้นหา</button>
    </div>

    <div class="location">
      latitude : {{ this.location.latitude }} <br />
      longtitude: {{ this.location.longitude }} <br />
      accuracy : {{ this.location.accuracy }} <br />
      id: {{ this.lineId }} <br />
      response: {{ this.res.data }}
    </div>

    <button class="snap" v-on:click="takePicture()">
      <a class="capture">capture</a>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import { WebCam } from "vue-web-cam";
import liff from '@line/liff';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      LINE_MESSAGING_API: 'https://api.line.me/v2/bot/message/push',
      LINE_HEADER: '',
      // LINE_BODY: "",
      lineId: '',
      lineName: '',
      location: {
        latitude: '',
        longitude: '',
        accuracy: '',
      },
      res: '',
    };
  },
  components: {
    // 'vue-web-cam': WebCam
  },
  methods: {
    init() {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices
          .getDisplayMedia({ video: true })
          .then((stream) => {
            const videoPlayer = document.querySelector('video');
            videoPlayer.srcObject = stream;
            videoPlayer.play();
          });
      } else {
        alert('cannot get media devices : ', navigator.mediaDevices);
        // navigator.getDisplayMedia(displayMediaStreamConstraints).then(success).catch(error);
      }
    },
    runApp() {
      liff.getProfile().then((lineProfile) => {
        this.lineId = lineProfile.userId;
        this.lineName = lineProfile.displayName;
      });
    },
    takePicture() {
      this.LINE_HEADER = {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer +Ewuw0RQ9uyMvALJFQ4mcIZyUWqZhGX5Fmr2xUYIq/ZVukpyqTSnocHTB1M3kRciFlco6c1Q7aUU0yBAdIHiyBG5M4vBPamBPE+D4MOMygwDGbGEkHR0MF+1/LfUyU8Tb+M7SEOsB0AYhCi+OaCXIwdB04t89/1O/w1cDnyilFU=',
      };
      let LINE_BODY = new FormData();
      LINE_BODY.append('to', this.lineId);
      LINE_BODY.append('messages', [
        {
          type: 'text',
          text: 'HI ${this.lineName} ID ${this.lineId}',
        },
      ]);

      // JSON.stringify({
      //   "to": this.lineId,
      //   "messages": [
      //     {
      //       "type": "text",
      //       "text": "HI ${this.lineName} ID ${this.lineId}"
      //     }
      //   ]
      // });

      // console.log("Take picture");
      // liff.sendMessages([
      //   {
      //     type: 'text',
      //     text: 'Hi ' + this.lineName + " ID: " + this.lineId
      //   }
      // ]);
      this.res = axios.post(`${this.LINE_MESSAGING_API}`, LINE_BODY, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer +Ewuw0RQ9uyMvALJFQ4mcIZyUWqZhGX5Fmr2xUYIq/ZVukpyqTSnocHTB1M3kRciFlco6c1Q7aUU0yBAdIHiyBG5M4vBPamBPE+D4MOMygwDGbGEkHR0MF+1/LfUyU8Tb+M7SEOsB0AYhCi+OaCXIwdB04t89/1O/w1cDnyilFU=',
        },
      });
      // liff.closeWindow();
    },
  },
  beforeMount() {
    // this.init();
    // console.log('mediaDevice: ', navigator.mediaDevices);
    // console.log('getUserMedia: ', navigator.mediaDevices.getUserMedia);
    liff.ready;
  },
  async created() {
    await liff
      .init({
        liffId: '1656567977-bEZ7Xpwd',
      })
      .then(() => {
        if (liff.isLoggedIn()) {
          this.runApp();
        } else {
          liff.login();
          this.runApp();
        }
      })
      .catch((err) => {
        console.log(err.code, err.message);
        liff.closeWindow();
      });

    navigator.geolocation.getCurrentPosition((pos) => {
      let gps = pos;
      this.location.latitude = gps.coords.latitude;
      this.location.longitude = gps.coords.longitude;
      this.location.accuracy = gps.coords.accuracy;
      console.log('GPS: ', this.location.latitude, this.location.longitude);
    });
  },
};
</script>

<style>
.location {
  margin-top: 50%;
}

.feed {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.search {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 7vh;
  /* background-color: transparent; */
  background-color: aquamarine;
}

.searchInput {
  height: 24px;
  width: 60%;
  border: 10px;
  margin-right: 5px;
}

.confirmInput {
  height: 24px;
  width: 15%;
  cursor: pointer;
}

.snap {
  background-color: transparent;
  /* background-color: cadetblue; */
  /* border: none; */
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  /* outline: none; */
  opacity: 0.5;
  position: fixed;
  padding: 0%;
  margin: 0%;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 45vh;
}

.capture {
  font-size: 32px;
  color: red;
}

.snap:active {
  opacity: 20%;
}
</style>
