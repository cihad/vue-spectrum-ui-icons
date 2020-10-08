# vue-spectrum-workflow-icons

You can view all icons from [spectrum.adobe.com/page/icons](https://spectrum.adobe.com/page/icons/)

For use these icons your Vue app:

Firstly install the package:

`npm install vue-spectrum-ui-icons`
or
`yarn add vue-spectrum-ui-icons`

Then you can use:

```html
<template>
	<div>
		<AlertMedium />
	</div>
</template>

<script>
import AlertMedium from 'vue-spectrum-ui-icons/dist/AlertMedium'

export default {
	components: { AlertMedium }
}
</script>
```

That's all. If you wish you can create wrap an `Icon` component for don't repeat yourself.

`Icon.vue` file:

```html
<template>
	<component
		:is="icon"
		class="spectrum-Icon"
		:height="null"
		:width="null"
		viewBox='0 0 36 36'
	/>
</template>

<script>
export default {
	props: {
		icon: {
			required: true
		},
	}
}
</script>

<style>
@import "~@spectrum-css/icon/dist/index-vars.css";
</style>
```

And than:

```html
<template>
	<div>
		<icon :icon="$options.components.AlertMedium" />
	</div>
</template>

<script>
import AlertMedium from 'vue-spectrum-ui-icons/dist/AlertMedium'

export default {
	components: {
		AlertMedium
	}
}
</script>
```

It's tried. Works fine. Enjoy it.