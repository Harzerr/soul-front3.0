<template>
<div class="comment-wrap">
  <div class="title" style="color: mediumseagreen;border: none;">
    <h4 style="font-weight: 100;font-size: 16px;">感言寄语</h4>
    <h5 style="font-weight: 100;font-size: 16px;">MESSAGES</h5>
  </div>
  <div class="textarea" style="display: flex;flex-direction: column;justify-content: start;align-items: center;">
    <textarea placeholder="请输入内容：" style="padding: 20px 10px;resize: none;width: 70%;border: 1px solid mediumseagreen;outline-color: #0094ff;border-radius: 10px;min-height: 150px"></textarea>
    <button style="border: none;background-color: #0094ff;border-radius: 10px;padding: 10px 20px;color: white;margin: 20px;cursor: pointer;">提交</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Comment"
}
</script>

<style scoped>

</style>
