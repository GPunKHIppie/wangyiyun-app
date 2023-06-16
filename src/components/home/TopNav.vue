<template>
    <div class="TopNav">
        <div class="TopLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
      <div class="TopContent">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
      </div>
      <div class="TopRight">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
  </template>
  <style lang="less" scoped>
  .TopNav {
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    .TopContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .36rem;
        .active{
            font-weight: 900;
        }
    }
  }  
  </style>