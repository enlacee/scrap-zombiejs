<?php
$mail = '';
if (!empty($_POST['email']) && !empty($_POST['password'])) :
	$mail = $_POST['email'];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>privado <?php echo $mail ?></title>
	</head>
	<body>
		<h1>Privado ok</h1>
	</body>
</html>
<?php else : ?>
error
<?php endif; ?>
