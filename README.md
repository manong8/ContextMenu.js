# ContextMenu.js
JavaScript right click context menu (not support IE)

<pre>
<div id="div1" style="width:800px;height:600px;border:1px solid #ccc;">
	right click this area to show ContextMenu.
</div>

<div id="ContextMenu1" style="position:absolute;display:none;border:1px solid #ccc;box-shadow: 0 6px 12px rgba(0,0,0,.175);border-radius:4px;min-width:160px;padding:8px;">
	<li>Item1</li>
	<li>Item2</li>
	<li>Item3</li>
</div>

<script src="ContextMenu.js"></script>
<script> var menu=new ContextMenu(); </script>
</pre>
