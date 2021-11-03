<template>
  <div class="Info container">
    <!-- <p>picture store</p> -->
    <img
      class="picStore row"
      aria-label="ภาพร้านค้า"
      name="ภาพหน้าร้านค้า"
      src="https://img.wongnai.com/p/1920x0/2016/10/31/97eb0ae9bf0848f786ce043d970dfca6.jpg"
    />

    <div class="information row">
      <div class="name row">
        <p>
          <b>{{ this.storeName }}</b>
        </p>
      </div>

      <div class="category row">
        <!-- อาจใช้ for วน ปริ๊น หรือ ต่อ str แล้ว ปริ๊นทีเดียว -->
        <p class="textCatagory" v-for="item in category" :key="item">
          {{ item }}
        </p>
      </div>

      <div class="workingHour row">
        <p class="row"><b>เวลาทำการ : </b> <br /></p>

        <div class="row" v-if="this.workingHour.all">
          <p>
            {{ this.workingHour.all }}
          </p>
        </div>

        <div class="row" v-if="this.workingHour.each">
          <p v-for="item in workingHour.each" :key="item">
            {{ item }}
          </p>
        </div>
      </div>

      <div class="about row">
        <p class="row">
          <b>ข้อมูลเพิ่มเติม :</b>
        </p>

        <p class="row">
          {{ this.about }}
        </p>
      </div>
    </div>

    <div class="iconCategoryMenu row" id="menuCategory">
      <p class="head row">หมวดหมู่</p>
      <p class="subHead row">* เลือกกดเพื่อไปสู่หมวดหมู่ที่ต้องการ</p>

      <div class="subMenu row">
        <div class="groupMenu">
          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มโปรโมชัน"
            v-if="this.menu.promotion[0]"
            @click="scroll(`menuPromotion`)"
          >
            <img
              src="../assets/promotion.png"
              alt="ปุ่มโปรโมชัน"
              width="80"
              height="80"
            />
            <label>โปรโมชัน</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มเมนูแนะนำ"
            v-if="this.menu.recommend[0]"
            @click="scroll(`menuRecommend`)"
          >
            <img
              src="../assets/recommend.png"
              alt="ปุ่มเมนูแนะนำ"
              width="80"
              height="80"
            />
            <label>เมนูแนะนำ</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มสุกี้"
            v-if="this.menu.suki[0]"
            @click="scroll(`menuSuki`)"
          >
            <img
              src="../assets/sukiyaki.png"
              alt="ปุ่มสุกี้"
              width="80"
              height="80"
            />
            <label>สุกี้</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มอาหารจานเดียว"
            v-if="this.menu.aLaCarte[0]"
            @click="scroll(`menuALaCarte`)"
          >
            <img
              src="../assets/dish.png"
              alt="ปุ่มอาหารจานเดียว"
              width="80"
              height="80"
            />
            <label>อาหารจานเดียว</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มอาหารเซ็ต"
            v-if="this.menu.bento[0]"
            @click="scroll(`menuBento`)"
          >
            <img
              src="../assets/bento.png"
              alt="ปุ่มอาหารเช็ต"
              width="80"
              height="80"
            />
            <label>อาหารเช็ต</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มของทานเล่น"
            v-if="this.menu.appetizer[0]"
            @click="scroll(`menuAppetizer`)"
          >
            <img
              src="../assets/appetizer.png"
              alt="ปุ่มของทานเล่น"
              width="80"
              height="80"
            />
            <label>ของทานเล่น</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มของหวาน"
            v-if="this.menu.dessert[0]"
            @click="scroll(`menuDessert`)"
          >
            <img
              src="../assets/dessert.png"
              alt="ปุ่มของหวาน"
              width="80"
              height="80"
            />
            <label>ของหวาน</label>
          </button>

          <button
            class="picCategory"
            type="button"
            aria-label="ปุ่มเครื่องดื่ม"
            v-if="this.menu.drink[0]"
            @click="scroll(`menuDrink`)"
          >
            <img
              src="../assets/drink.png"
              alt="ปุ่มเครื่องดื่ม"
              width="80"
              height="80"
            />
            <label>เครื่องดื่ม</label>
          </button>
        </div>
      </div>
    </div>

    <div class="menu row">
      <p class="head row">เมนู</p>

      <div class="longBar row"></div>

      <img
        class="picRecMenu"
        src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/68509400_1603082793156393_827718469423202304_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG2iZ4u8tQCnQheP_piM_m4sBJIqWvEfxuwEkipa8R_GyAg6izXn3u0br-MM_mt5M_1GZ3IsbSGF4SYK6dargVZ&_nc_ohc=hYhXbNlkUWYAX8dtLGQ&_nc_ht=scontent.fbkk5-5.fna&oh=19089938c2c693a28fa13df94af41640&oe=619FDA36"
        alt="ภาพเมนูแนะนำ"
      />

      <div class="allMenu row">
        <div
          class="promotionMenu"
          id="menuPromotion"
          v-if="this.menu.promotion[0]"
        >
          <p class="head row">โปรโมชัน</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.promotion" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div
          class="recommendMenu"
          id="menuRecommend"
          v-if="this.menu.recommend[0]"
        >
          <p class="head row">เมนูแนะนำ</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.recommend" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div class="SukiMenu" id="menuSuki" v-if="this.menu.suki[0]">
          <p class="head row">สุกี้</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.suki" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div
          class="aLaCarteMenu"
          id="menuALaCarte"
          v-if="this.menu.aLaCarte[0]"
        >
          <p class="head row">อาหารจานเดียว</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.aLaCarte" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div class="bentoMenu" id="menuBento" v-if="this.menu.bento[0]">
          <p class="head row">อาหารเซ็ต</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.bento" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div
          class="appetizerMenu"
          id="menuAppetizer"
          v-if="this.menu.appetizer[0]"
        >
          <p class="head row">ของทานเล่น</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.appetizer" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div class="dessertMenu" id="menuDessert" v-if="this.menu.dessert[0]">
          <p class="head row">ของหวาน</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.dessert" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName row">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <div class="drinkMenu" id="menuDrink" v-if="this.menu.drink[0]">
          <p class="head row">เครื่องดื่ม</p>
          <div class="shortBar row"></div>
          <div class="text row" v-for="item in menu.drink" :key="item">
            <div class="menuNamePrice row">
              <p class="menuName">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </div>
            <p class="ingre">{{ item.ingredient }}</p>
          </div>
          <div class="greyBar"></div>
        </div>

        <p class="subHead row">
          * แต่ละเมนูอาจเปลี่ยนแปลงตามช่วงเวลาในแต่ละวัน
        </p>
      </div>
    </div>

    <div class="contact row">
      <p class="row">
        <b>ติดต่อ : </b>
      </p>
      <p class="row" v-if="this.contact.facebook">
        Facebook : {{ this.contact.facebook }}
      </p>
      <p class="row" v-if="this.contact.line">Line : {{ this.contact.line }}</p>
      <p class="row" v-if="this.contact.phone">
        เบอร์โทรศัพท์ : {{ this.contact.phone }}
      </p>
      <p class="row" v-if="this.contact.website">
        เว็บไซต์ : {{ this.contact.website }}
      </p>
    </div>

    <button
      class="goUpButton"
      type="button"
      aria-label="ปุ่มกลับขึ้นด้านบน"
      @click="scroll(`menuCategory`)"
    >
      <img
        class="goUp"
        src="../assets/goUp.svg"
        name="ปุ่มกลับขึ้นด้านบน"
        alt="ปุ่มกลับขึ้นด้านบน"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Store',
  data() {
    return {
      // Mock data
      storeName: 'Hachiban Ramen Central World ชั้น 6',
      category: ['ราเมง', 'อาหารญี่ปุ่น'],
      // คุยเรื่องการเก็บ วัน-เวลา
      workingHour: {
        all: 'วันจันทร์ - วันศุกร์ 10.00 - 22.00',
        each: [
          'วันอาทิตย์ 10.00 - 22.00',
          'วันจันทร์ ปิด',
          'วันอังคาร 10.00 - 20.00',
          'วันพุธ 10.00 - 20.00',
          'วันพฤหัสบดี 10.00 - 20.00',
          'วันศุกร์ 10.00 - 22.00',
          'วันเสาร์ 10.00 - 22.00',
        ],
      },
      about: `บะหมี่สไตล์ญี่ปุ่นราคาคุ้มค่าพร้อมคัดสรรวัตถุ ดิบอย่างดีมาใช้ในการปรุง เพื่อให้ผู้บริโภคชาวไทยได้ลิ้มรสราเมนแสนอร่อยอย่างแท้จริง และสร้างเอกลักษณ์บนราเมนทุกชามให้จดจำ ง่ายด้วย “ฮะจิคามะ" 
                    หรือ "ลูกชิ้นหมายเลข 8” พร้อมพัฒนาเมนูให้มีความหลากหลายมากขึ้น รสชาติถูกปากชาวไทย`,
      contact: {
        facebook: 'Hachiban Ramen Thailand',
        line: '',
        phone: '022522530',
        website: 'https://www.hachiban.co.th',
      },
      menu: {
        promotion: [
          {
            name: 'ต้มยำกุ้ง ราเมน',
            ingredient: 'เส้นราเมน, กุ้ง, เห็ด, พริกเผา, กระเทียม ',
            price: '118.-',
          },
          {
            name: 'ซารุ ราเมน',
            ingredient: 'เส้นราเมน, ซอสซีอิ้วซารุ',
            price: '93.-',
          },
        ],
        recommend: [
          {
            name: 'ซารุ ราเมน เซ็ต',
            ingredient: 'เส้นราเมน, ซอสซีอิ้วซารุ เกี๊ยวซ่า โค้ก',
            price: '154.-',
          },
        ],
        suki: [
          {
            name: 'กุ้ง',
            ingredient: 'กุ้ง 5 ตัว',
            price: '58.-',
          },
        ],
        aLaCarte: [
          {
            name: 'ต้มยำกุ้ง ราเมน',
            ingredient: 'เส้นราเมน, กุ้ง, เห็ด, พริกเผา, กระเทียม ',
            price: '118.-',
          },
          {
            name: 'ซารุ ราเมน',
            ingredient: 'เส้นราเมน, ซอสซีอิ้วซารุ',
            price: '93.-',
          },
        ],
        bento: [
          {
            name: 'ซารุ ราเมน เซ็ต',
            ingredient: 'เส้นราเมน, ซอสซีอิ้วซารุ เกี๊ยวซ่า โค้ก',
            price: '154.-',
          },
        ],
        appetizer: [
          {
            name: 'คาระอาเกะ',
            ingredient: 'ไก่ทอด',
            price: '89.-',
          },
        ],
        dessert: [
          {
            name: 'ไอติม',
            price: '35.-',
          },
        ],
        drink: [
          {
            name: 'น้ำเปล่า',
            price: '20.-',
          },
          {
            name: 'ชาเขียว',
            price: '25.-',
          },
        ],
      },
    };
  },
  methods: {
    scroll(id) {
      console.log('go to ', id);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      });
      //  console.log('"${this.storeName}"');
    },
  },
};
</script>

<style>
.picStore {
  width: 100vw;
  height: auto;
  object-fit: scale-down;
  background: #fcfafa;
}

.information {
  text-align: left;
  padding: 4%;
  margin-bottom: 24px;
  font-size: 20px;
  background: #fdfbfb;
}

.information div:not(:last-child) {
  margin-bottom: 16px;
  /* background: purple; */
}

.information div:first-child {
  font-size: 36px;
}

/* .iconCategoryMenu {
    margin-bottom: 24px; 
} */

.head {
  text-align: left;
  margin-left: 4%;
  margin-bottom: 2%;
  font-size: 26px;
  font-weight: bold;
}

.subHead {
  text-align: left;
  margin-left: 4%;
  margin-bottom: 4%;
  font-size: 16px;
  color: #c51515;
}

.category {
  display: flex;
}

.textCatagory {
  margin-right: 10px;
}

.subMenu {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  padding: 0% 4% 0% 4%;
  /* background: aquamarine; */
}

.groupMenu {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

label {
  margin-top: 16px;
}

.picCategory {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  margin-bottom: 20px;
  cursor: pointer;
}

.picCategory:hover {
  opacity: 0.7;
  transition-delay: 1s;
  /* z-index: 1; */
}

.longBar {
  margin-left: 2.5%;
  width: 95vw;
  height: 5px;
  border-radius: 2px;
  margin-bottom: 10px;
  background: #ffb800;
}

.shortBar {
  margin-top: -6px;
  margin-left: 4%;
  width: 20vw;
  height: 5px;
  border-radius: 2px;
  margin-bottom: 10px;
  background: #ffb800;
}

button {
  border: none;
  background: transparent;
}

.picRecMenu {
  width: 95vw;
  border-radius: 5px;
  object-fit: fill;
  /* object-fit: scale-down; */
}

.menuName {
  display: flex;
  padding: 0% 8% 0% 8%;
  font-size: 22px;
}

/* .menuIngrePrice {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0% 8% 0% 10%;
    margin-top: -2px;
    margin-bottom: 16px;
} */

.ingre {
  width: 55%;
  font-size: 18px;
  text-align: left;
  font-weight: lighter;
  margin-top: -10px;
  margin-bottom: 16px;
  padding-left: 12%;
}

.price {
  font-size: 28px;
  font-weight: bold;
}

.menuNamePrice {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0% 8% 0% 8%;
  margin-top: -2px;
  margin-bottom: 16px;
}

.menuNamePrice .menuName {
  padding: 0%;
}

.greyBar {
  margin-left: 2.5%;
  width: 95vw;
  height: 1px;
  border-radius: 2px;
  margin-bottom: 10px;
  background: #e0e0e0;
}

.contact {
  text-align: left;
  padding: 4%;
  margin-bottom: 24px;
  font-size: 20px;
}

.goUpButton {
  border: none;
  background: transparent;
  position: fixed;
  cursor: pointer;
  right: 5%;
  bottom: 3%;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
}
</style>
