<!DOCTYPE html>
<title>My Example</title>


<p id="msg"></p>
<p>The <code>Math.random()</code> function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).</p>

<script>
  document.getElementById("msg").innerHTML = Math.random( 1, 100 );
</script>
