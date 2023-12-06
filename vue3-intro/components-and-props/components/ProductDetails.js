app.component('product-details', {
    props: {
        details: {
          type: Array,
          required: true
        }
    },
    template: 
     /*html*/ 
    `<div>
      <h2>Product Details</h2>
      <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
      </ul>
    </div>`, 
})