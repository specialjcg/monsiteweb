<template>
  <div class="MainContainer">
    <page1></page1>

    <slide2></slide2>
    <slide3></slide3>

    <slide4></slide4>

    <div class="footer"></div>
  </div>
</template>

<script>
import page1 from "/home/specialjcg/site web/monsite/src/views/page.vue";
import slide2 from "/home/specialjcg/site web/monsite/src/views/page2.vue";
import slide3 from "/home/specialjcg/site web/monsite/src/views/page3.vue";
import slide4 from "/home/specialjcg/site web/monsite/src/views/page4.vue";

export default {
  components: {
    page1,
    slide2,
    slide3,

    slide4
  }
};
</script>

<style lang="scss" scoped>
.MainContainer {
  margin-top: 0;
  padding: 0;
  text-align: center;

  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  overflow: hidden;
}
</style>
