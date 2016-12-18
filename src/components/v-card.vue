<template lang="html">
  <div class="card">
    <div class="m-card">
      <div class="m-card__header">
        前端技术
      </div>
      <div class="m-card__img--top" style="height:80px;background-color:#000;"></div>
      <div class="m-card__block">
        <h3 class="m-card__title">w3schools.com</h3>
        <h5 class="m-card__subtitle">原版国内镜像</h5>
        <p class="m-card__text" v-for="n of 3">
          <a href="#" class="m-card__link">w3schools.com</a>是最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
      </div>
      <div class="m-card__footer">
        前端技术
      </div>
    </div>

    <div class="m-card">
      <div class="m-card__block">
        <div class="m-list-group">
          <p class="m-list-group__item m-list-group__item--danger" v-for="n of 3">
            国内用户一直不能访问，并且国内的中文翻译版本十分陈旧
          </p>
        </div>
      </div>
    </div>


    <div class="m-card m-card--inverse">
      <div class="m-card__header">
        前端技术
      </div>
      <div class="m-card__block">
        <div class="m-list-group">
          <p class="m-list-group__item" v-for="n of 3">
            国内用户一直不能访问，并且国内的中文翻译版本十分陈旧
          </p>
        </div>
      </div>
      <div class="m-card__footer">
        前端技术
      </div>
    </div>

    <div class="m-card-group">
      <div class="m-card" v-for="n of 3">
        <div class="m-card__header">
          国内用户
        </div>
        <div class="m-card__block">
          <p class="m-card__text">
            国内用户一直不能访问，并且国内的中文翻译版本十分陈旧
          </p>
        </div>
      </div>
    </div>

    <div class="m-card-deck">
      <div class="m-card" v-for="n of 3">
        <div class="m-card__header">
          国内用户
        </div>
        <div class="m-card__block">
          <p class="m-card__text">
            国内用户一直不能访问，并且国内的中文翻译版本十分陈旧
          </p>
        </div>
      </div>
    </div>

    <div class="m-card-columns">
      <div class="m-card" v-for="n of 3">
        <div class="m-card__header">
          国内用户
        </div>
        <div class="m-card__block">
          <p class="m-card__text">
            国内用户一直不能访问，并且国内的中文翻译版本十分陈旧
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
