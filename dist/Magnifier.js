
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"16","width":"16"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15.77 14.71l-4.534-4.535a6.014 6.014 0 10-1.06 1.06l4.533 4.535a.75.75 0 101.061-1.06zM6.5 11A4.5 4.5 0 1111 6.5 4.505 4.505 0 016.5 11z"}})])
          )
        }
      }
    