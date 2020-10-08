const path = require('path')
const svgToVue = require('svg-to-vue')
const fs = require('fs')

const packageDir = path.join(__dirname, '..')
const iconDir = path.join(packageDir, 'src', 'assets')

fs.readdir(iconDir, (err, items) => {
	items = items.filter(item => item.endsWith('.svg'));	

	items.forEach(item => {
		let iconName = path.basename(item, '.svg')

		fs.readFile(path.join(iconDir, item), 'utf8', (err, data) => {
			svgToVue(data).then(component => {
				fs.writeFile(
					path.join(packageDir, 'dist', `${iconName}.js`),
					component,
					'utf8',
					err => { if (err) console.warn(err) }
				);
			});
		})
	})

});
