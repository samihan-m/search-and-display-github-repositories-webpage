<?php
$account_name = $_GET["github_account_name"];
?>
<html>
	<head>
		<title>
			First Page!
		</title>
		<link rel="stylesheet" href="results.css">
		<script type="text/javascript">
			var account_name = <?php echo json_encode($account_name) ?>
		</script>
		<script src="results_processing_scripts.js">
		</script>
	</head>
	<body>
		<div id="header" class="center">
			Samihan Muppirala
		</div>
		<div class="center bigFont">
			<h1>
				Welcome!
			</h1>
			<h2>
				<a href="search_page.php" class="button"> Search something else? </a>
			</h2>
			<div id="dashboard">
				Things To See
				<?php echo $_GET["github_account-name"]?>
				<div class="verticalFlex">
					<?php
					$link = "https://github.com/{$account_name}";
					$name = $account_name;
					echo "<a href=$link class=\"button\">$name's GitHub Page</a>";
					?>
					<div id="repoList">
						You shouldn't see this :)
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
