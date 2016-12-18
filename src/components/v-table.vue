<template lang="html">
    <div class="table">
      <table class="m-table m-table--hover m-table--bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n of 4">
            <td scope="row">{{n}}</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr class="m-table--info">
            <td scope="row">{{n}}</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
      <table class="m-table m-table--hover m-table--bordered m-table--responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n of 4">
            <td scope="row">{{n}}</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
      <table class="m-table m-table--hover m-table--reflow">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n of 4">
            <td scope="row">{{n}}</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
      <table class="m-table m-table--inverse">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
