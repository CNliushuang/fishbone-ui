<style src="../components/font-awesome/css/font-awesome.min.css"></style>
<template>
    <div id="{{id}}" v-bind:class="[{
            'fbui-btn':true,
            'fbui-btn-blue':( types == 'blue'),
            'fbui-btn-disabled':( disabled == 'disabled'),
            'fbui-btn-default':( types == 'default'),
            'fbui-btn-primary':( types == 'primary'),
            'fbui-btn-success':( types == 'success'),
            'fbui-btn-info':( types == 'info'),
            'fbui-btn-warning':( types == 'warning'),
            'fbui-btn-danger':( types == 'danger'),
            'fbui-btn-link':( types == 'link'),
            'btn-sm':( size == 'sm'),
            'btn-xm':( size == 'xm')
        },cls]">
        <i class="fa {{fa}}" v-if="fa"></i>
        <slot>按钮</slot>
        <span class="carset" v-if="carset"></span>
    </div>
</template>

<script>
    export default{
        props: {
            types: {//预定义类型
                type: String
            },
            disabled:{//是否禁用
                type: String
            },
            size:{//大小
                type: String
            },
            fa:{//图标
                type: String
            },
            carset:{//小三角
                type: String
            },
            id:{//自定义class
                type: String,
                default:function(){
                    return '';
                }
            },
            cls:{
                type:String,
                default:function(){
                    return '';
                }
            }
        },
        created(){
//            console.log(this.types);
        }
    }

</script>
<style>
    .fbui-btn{
        display: inline-block;
        cursor: pointer;
        background: #f5f5f5;
        text-align: center;
        font-size: 14px;
        color: #585858;
        border: 1px solid #d2d2d2;
        border-radius: 2px;
        height: 28px;
        line-height: 28px;
        padding: 0 12px;
        min-width: 56px;
    }
    .fbui-btn:hover{
        background: #fff;
    }
    .fbui-btn-blue{
        background: #378be0;
        color: #fff;
    }
    .fbui-btn-blue:hover{
        background: #5fa2e6;
    }
    .fbui-btn-disabled{
        cursor: no-drop;
        background: #e6e6e6;
        color: #333;
        border:1px solid #e6e6e6;
    }
    .fbui-btn-disabled:hover{
        background: #e6e6e6;
        color: #333;
        border:1px solid #e6e6e6;
    }
    .fbui-btn-default{
        color: #333;
        background-color: #fff;
        border-color: #ccc;
    }
    .fbui-btn-default:hover{
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
    }
    .fbui-btn-primary{
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
    }
    .fbui-btn-primary:hover{
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }
    .fbui-btn-success{
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
    }
    .fbui-btn-success:hover{
        color: #fff;
        background-color: #449d44;
        border-color: #398439;
    }
    .fbui-btn-info{
        color: #fff;
        background-color: #5bc0de;
        border-color: #46b8da;
    }
    .fbui-btn-info:hover{
        color: #fff;
        background-color: #31b0d5;
        border-color: #269abc;
    }
    .fbui-btn-warning{
        color: #fff;
        background-color: #f0ad4e;
        border-color: #eea236;
     }
    .fbui-btn-warning:hover{
        color: #fff;
        background-color: #ec971f;
        border-color: #d58512;
    }
    .fbui-btn-danger{
        color: #fff;
        background-color: #d9534f;
        border-color: #d43f3a;
     }
    .fbui-btn-danger:hover{
        color: #fff;
        background-color: #c9302c;
        border-color: #ac2925;
    }
    .fbui-btn-link{
        font-weight: 400;
        color: #337ab7;
        border-radius: 0;
        border-color: transparent;
        background: none;
     }
    .fbui-btn-link:hover{
        color: #23527c;
        text-decoration: underline;
        background-color: transparent;
    }

    .btn-sm{
        height: 24px;
        padding: 0 14px;
        min-width: 26px;
        line-height: 24px;
        font-size: 12px;
    }
    .btn-xm{
        height: 18px;
        padding: 0 14px;
        min-width: 26px;
        line-height: 18px;
        font-size: 12px;
    }
    .fbui-btn .carset{
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid\9;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
    }

</style>
