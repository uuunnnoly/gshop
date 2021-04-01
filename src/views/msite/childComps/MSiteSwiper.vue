<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/1.jpg">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/2.jpg">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/3.jpg">
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/4.jpg">
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/5.jpg">
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/6.jpg">
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/7.jpg">
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/8.jpg">
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/9.jpg">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/10.jpg">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/11.jpg">
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/12.jpg">
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/13.jpg">
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/14.jpg">
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/1.jpg">
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="../images/nav/2.jpg">
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper  from "swiper";
import 'swiper/dist/css/swiper.min.css'

export default {
  name: "MSiteSwiper",
  mounted() {
    new Swiper('.swiper-container',{
        loop:true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
