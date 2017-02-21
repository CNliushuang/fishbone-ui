<template>
    <div class="inputBox">
    <input class="fbui-input" :class="{'warn': type=='warn','success': type=='success','error': type=='error'}" v-model="value" type="text" :disabled="disabled" :placeholder="placeHolder" :readonly="readonly" @input="onChange|debounce 500" :maxlength="maxLength">
    <label class="faInput fa {{fa}}" v-if="fa"></label>
    </div>
</template>

<script>
    export default{
        props:{
            disabled:String,/*是否禁用*/
            placeHolder:String,/*输入框提示*/
            value:{/*默认值*/
                type:String,
                default:"",
                twoWay:true
            },
            readonly:String,/*只读*/
            type:String,/*状态*/
            icon:String,/*右侧图片*/
            fa:String,
            maxLength:String
        },
        methods:{
            /*处理数据双向绑定的（暂时无效）*/
            /*@keyup="change-data"*/
            onChange(ev){
                console.log(111);
                console.log(this.value);
                this.$dispatch('change-data',this.value)
            }
        }
    }
</script>


<style>
.inputBox{display: inline-block;position: relative;}
.faInput{position:absolute;right:5px;top:6px;}
.fbui-input{
    color: #5e5e5e;
    font-family: Microsoft yahei;
    width: 236px;
    height: 28px;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    text-indent: 6px;
}
.fbui-input:focus{
    border-color: #66afe9;
    outline: 0;;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.fbui-input.warn{
    border-color:#f0ad4e;
}
.fbui-input.warn.icon{
    background:url('/src/images/fbuiInput/warning.png') no-repeat right;
}
.fbui-input.warn:focus{
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(240,173,78,.075),0 0 8px rgba(240,173,78,.6);
}
.fbui-input.error{
    border-color:#f00;
}
.fbui-input.error.icon{
    background:url('/src/images/fbuiInput/error.png') no-repeat right;
}
.fbui-input.error:focus{
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(256,0,0,.075),0 0 8px rgba(256,0,0,.6);
}
.fbui-input.success{
    border-color:#5cb85c;
}
.fbui-input.success.icon{
    background:url('/src/images/fbuiInput/success.png') no-repeat right;
}
.fbui-input.success:focus{
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(92,184,92,.075),0 0 8px rgba(92,184,92,.6);
}
input:disabled, input[disabled] {
    font-family: Microsoft yahei;
    color: #000;
    border: 1px solid #d2d2d2;
    border-radius: 3px;
    background: #f5f5f5;
    cursor: not-allowed;
}
.fbui-input-group {
    position: relative;
    border: 1px solid #d2d2d2;
}
.fbui-input-group .input-opt {
    float: right;
    background: #fff;
    width: 22px;
    height: 28px;
    cursor: pointer;
    vertical-align: middle;
}
.fbui-input-group .fbui-input-box {
    margin-right: 22px;
}
.fbui-input-group input {
    color: #585858;
    border: none !important;
    display: block;
    font-size: 12px;
}
.fbui-input-group .fbui-drop-list {
    z-index: 9;
    background: #fff;
    display: none;
    max-height: 200px;
    overflow: auto;
    margin-top: -1px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #d2d2d2;
}
.fbui-input-group .fbui-drop-list li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    color: #585858;
    cursor: pointer;
    padding: 0 4px;
    height: 27px;
    line-height: 27px;
    border-bottom: 1px solid #d2d2d2;
}
.ac {
    text-align: center;
}


</style>