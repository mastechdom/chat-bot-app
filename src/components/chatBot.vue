<template>
  <div class="mainClass">
    <div class="headingofbot">
      Madgical Chat Bot
    </div>
    <div class="chatHistoryStyle">
      <chat-history />
    </div>
    <chat-send-blog />
  </div>
  

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import chatHistory from './chatHistory.vue';
import chatSendBlog from './chatSendingBlog.vue'

export default defineComponent({
  components: {
    chatHistory, chatSendBlog
  },
  
  
})
</script>

<style scoped>

.chatHistoryStyle {
    height: 500px;
    overflow-y: scroll;
}
::-webkit-scrollbar{
  width:5px;
}
::-webkit-scrollbar-thumb{
  background: grey;
}
.mainClass {
  position: fixed;
  margin-top: 30px;
  background-color: whitesmoke;
  width: 400px;
  margin-left: 50px;
  border-radius: 10px;
  border: 1px solid lightgray;
}
.headingofbot {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: blue;
  color: white;
  padding-left: 20px;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
@media only screen and (max-width: 768px) {
  .mainClass {
    margin-top: 0px;
    margin-left: 0px;
    padding-right: 0px;
    width: 100%;
    height: 100%;
  }
}
/* @media screen and (min-width: 600px) {
  .mainClass {
    background-color: red;
  }
}*/
@media screen and (max-width: 320px) {
  .mainClass {
    margin-top: 0px;
    margin-left: 0px;
    background-color: whitesmoke;
    width:100%;
    height: 100%;
  }
} 
@media screen and (max-width: 280px) {
  .mainClass {
    border-radius: 10px;
    margin-top: 0px;
    margin-left: 0px;
    background-color: whitesmoke;
    width:100%;
    height: 100%;
  }
  .headingofbot {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
}
</style>