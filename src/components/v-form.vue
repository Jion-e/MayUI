<template lang="html">
  <div class="form">
    <form>
      <div class="m-form__group">
        <label for="name">用户名：</label>
        <input type="text" class="m-form__control" id="name" placeholder="请输入用户名" disabled>
      </div>
      <div class="m-form__group">
        <label for="pwd">密码：</label>
        <input type="text" class="m-form__control" id="pwd" placeholder="请输入密码">
      </div>
      <div class="m-form__group">
        <label>性别：</label>
        <label>
        <input type="radio" name="sex" disabled>男
        </label>
        <label>
        <input type="radio" name="sex">女
        </label>
      </div>
      <div class="m-form__group">
        <label>水果：</label>
        <label>
          <input type="checkbox" disabled>苹果
        </label>
        <label>
          <input type="checkbox">梨
        </label>
        <label>
          <input type="checkbox">香蕉
        </label>
      </div>
      <div class="m-form__group">
        <label for="file">上传文件：</label>
        <input type="file" class="m-form__file" id="file">
      </div>
    </form>

    <form class="m-form--inline">
      <div class="m-form__group">
        <label for="name2">用户名：</label>
        <input type="text" class="m-form__control" id="name2" placeholder="请输入用户名">
      </div>
      <div class="m-form__group">
        <label for="pwd2">密码：</label>
        <input type="text" class="m-form__control" id="pwd2" placeholder="请输入密码">
      </div>
      <div class="m-form__group">
        <label for="file2">上传文件：</label>
        <input type="file" class="m-form__file" id="file2">
      </div>
    </form>
  </div>
</template>
