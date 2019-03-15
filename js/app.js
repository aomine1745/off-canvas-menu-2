// elements
const $page = document.querySelector('.page'),
$menu_toggle = document.querySelector('.menu_toggle'),
$content = document.querySelector('.content');

$menu_toggle.onclick = () => {
	$page.classList.toggle('shazam');
}

$content.onclick = () => {
	$page.classList.remove('shazam');
}