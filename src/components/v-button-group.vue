<template lang="html">
  <div class="btn-group">
    <div class="m-btn-group">
      <button class="m-btn m-btn--primary">left</button>
      <button class="m-btn m-btn--primary">middle</button>
      <button class="m-btn m-btn--primary">right</button>
    </div>

    <div class="m-btn-group m-btn-group--lg">
      <button class="m-btn m-btn--primary">left</button>
      <button class="m-btn m-btn--primary">middle</button>
      <button class="m-btn m-btn--primary">right</button>
    </div>

    <div class="m-btn-group m-btn-group--lg m-btn-group--vertical">
      <button class="m-btn m-btn--primary">left</button>
      <button class="m-btn m-btn--primary">middle</button>
      <button class="m-btn m-btn--primary">right</button>
    </div>
    <div class="m-btn-group">
      <button class="m-btn m-btn--primary">单个</button>
    </div>

    <div class="m-btn-group" data-toggle="buttons">
      <label class="m-btn m-btn--primary active">
        <input type="checkbox" checked>苹果
      </label>
      <label class="m-btn m-btn--primary">
        <input type="checkbox">香蕉
      </label>
      <label class="m-btn m-btn--primary">
        <input type="checkbox">梨
      </label>
    </div>

    <div class="m-btn-group" data-toggle="buttons">
      <label class="m-btn m-btn--primary active">
        <input type="radio" name="sex" checked>男
      </label>
      <label class="m-btn m-btn--primary">
        <input type="radio" name="sex">女
      </label>
    </div>
  </div>
</template>
