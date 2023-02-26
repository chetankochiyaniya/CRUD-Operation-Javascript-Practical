const table =`
<div class="table-responsive">
<div class="container rounded-4 p-3 mb-3">
<div class="row d-flex">
<div class="d-flex col-lg-6 justify-content-end">
<button class="btn_color"> Add new Product</button>
</div>
</div>
</div>
<div class="container card rounded-4 p-3">
<div class="d-flex">
Search :  
<div class="form-group col-md-6 mb-3">
  <input
  class="input-group form-control"
  type="text"
  name=""
  id="myInput"
  placeholder="Please Enter your Product Name"
  onkeyup="searchFun()"
  style="color: black"
/>
</div>
</div>
<table>
  <thead>
    <tr>
      <th scope="col">ProductId</th>
      <th scope="col">ProductName</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <td>1</td>
      <td>Headphone</td>
      <td><img alt="product_image" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="50px" height="50px"></td>
      <td>1000</td>
      <td>Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.</td>
      <td><i class="fa fa-pencil-square-o"></i></td>
      <td><i class="fa fa-trash-o"></i>
</td>
      <td><button class="btn_color">View</button></td>
      </tr>
    <tr>
      <td>1</td>
      <td>Headphone</td>
      <td><img alt="product_image" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="50px" height="50px"></td>
      <td>1000</td>
      <td>Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.</td>
      <td><i class="fa fa-pencil-square-o"></i></td>
      <td><i class="fa fa-trash-o"></i>
</td>
      <td><button class="btn_color">View</button></td>
      </tr>
    <tr>
      <td scope="row">1</td>
      <td>Headphone</td>
      <td><img alt="product_image" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="50px" height="50px"></td>
      <td>1000</td>
      <td>Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earphones or, colloquially, cans.</td>
      <td><i class="fa fa-pencil-square-o"></i></td>
      <td><i class="fa fa-trash-o"></i>
</td>
      <td><button class="btn_color">View</button></td>
      </tr>
  </tbody>
</table>
</div>
</div>
`