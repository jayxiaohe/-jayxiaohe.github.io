<!-- 使用： https://widget.qweather.com/create-standard?token=c69a2c9c3bf34c228557da172e899476&lang=zh#title -->


<template>
  <div>
    <div class="we card-box">
        <div id="he-plugin-standard"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    
    window.WIDGET = {
        "CONFIG": {
        "layout": "2",
        "width": "245",
        "height": 270,
        "background": "5",
        "dataColor": "9B9BAA",
		"language": "zh",
        "borderRadius": "5",
        "key": "0eb8ade545b446d4a6adc22231a9e752"}
        }
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
</script>

<style lang='stylus'>
.we
  height auto
  display inline-table
</style>
