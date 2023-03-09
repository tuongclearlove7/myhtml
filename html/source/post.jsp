<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sf"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<jsp:include page="/WEB-INF/views/common/variables.jsp"></jsp:include>
<title>Post</title>
<jsp:include page="/WEB-INF/views/manager/Layout/css.jsp"></jsp:include>
</head>
<body class="sb-nav-fixed">
	<jsp:include page="/WEB-INF/views/manager/Layout/header.jsp"></jsp:include>
	<div id="layoutSidenav_content">
		<main>
			<div class="container-fluid px-4">
				<sf:form class="mt-3" action="${base }/admin/new-post"
					name="return validateForm()" modelAttribute="new-post"
					enctype="multipart/form-data">
					<sf:hidden path="id" />
					<div class="form-group">
						<label for="category">Category (required)</label>
						<sf:select path="categories.id" class="form-control" id="category">
							<sf:options items="${categories }" itemValue="id"
								itemLabel="name" />
						</sf:select>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Title</label>
						<sf:input type="text" path="title" id="inputTitle"
							class="form-control" />
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Price</label>
						<sf:input type="number" name="price" path="price"
							class="form-control" id="inputPrice" placeholder="1.000" />
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Price Sale</label>
						<sf:input type="number" path="priceSale" class="form-control"
							id="inputPriceSale" placeholder="10%" />
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Short description</label>
						<sf:textarea autocomplete="off" path="shortDesc" name="shortDescs"
							class="form-control summernote" placeholder="Short Description"
							rows="3" required="required"></sf:textarea>
					</div>

					<div class="form-group">
						<label for="exampleFormControlSelect1">Status</label>
						<sf:checkbox path="status" class="form-check-input" id="isstatus" />
					</div>
					<div class="form-group mt-2">
						<label for="exampleFormControlSelect1">Detail description</label>
						<sf:textarea autocomplete="off" path="details" name="detail"
							class="form-control summernote" rows="3" required="required"></sf:textarea>
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Seo</label> <input
							type="text" class="form-control" id="inputSeo">
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Is Hot</label>
						<sf:checkbox path="hot" class="form-check-input" id="ishot" />
					</div>
					<div class="form-group mt-2">
						<label class="col-12" for="exampleFormControlFile1">Avata</label>
						<input class="col-4" name="customFile" type="file"
							class="custom-file-input" id="customFileLang" lang="in">
					</div>
					<div class="mt-3">
						<button type="submit" class="btn btn-primary">Sign in</button>
					</div>
				</sf:form>
			</div>
		</main>
		<jsp:include page="/WEB-INF/views/manager/Layout/footer.jsp"></jsp:include>
	</div>
	</div>
	<script>
      $('.summernote').summernote({
        placeholder: 'Hello Bootstrap 4',
        tabsize: 2,
        height: 100
      });
    </script>
</body>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
	crossorigin="anonymous"></script>
<script src="${base }/manager/js/scripts.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest"
	crossorigin="anonymous"></script>
<script src="${base }/manager/js/datatables-simple-demo.js"></script>
</html>