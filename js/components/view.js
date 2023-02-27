const view = `
<h1 class="d-flex justify-content-center text-white mt-3 mb-5">Product Management System</h1>
<div class="container">
<div class="mb-2">
<a href="index.html"><button class="btn_color p-lg-2 p-md-2 p-sm-2 xsm d-flex"><i class="fa fa-chevron-left fa-change" aria-hidden="true"></i>&nbsp; Back</button></a>
      </div>
<div class="card mb-3">
  <div class="row m-3">
    <div class="col-md-5 m-0 p-0">
      <div id="vImage"></div>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h4 class="card-title" id="vName"></h4>
        <hr>
        <p class="card-text"  id="vId"></p>
        <p class="card-text" id="vDescription"></p>
        <hr>
        <div class="d-flex align-items-center"><i class="fa fa-inr" style="font-zise:15px" aria-hidden="true"></i><h5 class="card-text" id="vPrice"></h5></div>
      </div>
    </div>
  </div>
</div>
</div>
`