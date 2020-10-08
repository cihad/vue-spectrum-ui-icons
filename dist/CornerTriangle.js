
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"5","width":"5"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4.74.01a.25.25 0 00-.177.073l-4.48 4.48a.25.25 0 00.177.427h4.48a.25.25 0 00.25-.25V.26a.25.25 0 00-.25-.25z"}})])
          )
        }
      }
    