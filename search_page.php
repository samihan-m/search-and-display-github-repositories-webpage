<?php
$github_account_name = "";

$validation_function_call = "";


if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$name_input = $_GET["github_account_name"];
	/*
	Only performs validation if the entry isn't blank.
	*/
	if(!empty($name_input)) {
		$github_account_name = clean_input($name_input);
		$validation_function_call = "check_name('$github_account_name');";
	}
}

function clean_input($input) {
	$input = trim($input);
	$input = stripslashes($input);
	$input = htmlspecialchars($input);
	return $input;
}
?>
<html>
	<head>
		<title>
			First Page!
		</title>
		<link rel="stylesheet" href="search.css">
		<!-- the second stylesheet is for the search icon -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="search_validation_scripts.js"></script>
	</head>
	<body>
    <div id="search" class="center">
			<form id="search-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="get">
				<label>github account name</label>
				<input autofocus type="text" name="github_account_name">
				<span id=nameError class=error></span>
				<button type="submit" onclick=hasSearched()><i class="fa fa-search"></i></button>
				<script type="text/javascript"><?php echo $validation_function_call;?></script>
			</form>
		</div>
	</body>
</html>
