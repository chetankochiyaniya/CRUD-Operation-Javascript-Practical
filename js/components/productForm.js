const productForm = `
        <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="updateProduct" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateProduct">Product Information</h1>
                    </div>
                    <div class="modal-body">
                        <form id="addProductForm">
                            <div class="row mb-3">
                                <label for="inputName" class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="inputName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputDescription" class="col-sm-3 col-form-label">Description</label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" id="inputDescription" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPrice" class="col-sm-3 col-form-label">Price</label>
                                <div class="col-sm-9">
                                    <input type="number" class="form-control" id="inputPrice">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputImage" class="col-sm-3 col-form-label">Image</label>
                                <div class="col-sm-9">
                                    <input type="file" class="form-control" id="inputImage"
                                        accept="image/x-png,image/gif,image/jpeg">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="close" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button type="submit" data-toggle="toast" data-target="#toast1" class="btn btn-primary"
                            onclick="addProduct()">Add Product</button>
                    </div>
                </div>
            </div>
        </div>
`